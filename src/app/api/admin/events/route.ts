import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import {
  addAdminEvent,
  deleteAdminEvent,
  excludeEventOccurrence,
  updateAdminEvent,
  invalidateAdminEventsCache,
} from '@/lib/blob-store';
import {
  idParam,
  invalidInput,
  isAdminDateISO,
  lengthError,
  missingId,
  optionalString,
  optionalUrl,
  readJsonObject,
  recordSlug,
  requiredString,
  saveFailed,
} from '@/lib/admin-input';
import type { AdminEvent, AdminEventFormData, RecurrenceRule } from '@/types/admin';
import type { EventCategory } from '@/types/calendar';
import { truncateDescription } from '@/lib/date-utils';

export const dynamic = 'force-dynamic';

const validCategories: EventCategory[] = ['meetup', 'conference', 'workshop', 'general'];
const validFrequencies: RecurrenceRule['frequency'][] = ['weekly', 'biweekly', 'monthly'];
const TIME_PATTERN = /^\d{2}:\d{2}$/;
// Every admin event is part of one cached list, which Next.js only caches up
// to 2 MB. The limits keep a single event far below that and are set far
// above real content (the longest static description is about 700
// characters), so events saved before the limits existed still save.
const MAX_TITLE_LENGTH = 300;
const MAX_LOCATION_LENGTH = 500;
const MAX_DESCRIPTION_LENGTH = 20_000;

interface ValidatedEventFields {
  title: string;
  description: string;
  shortDescription: string;
  dateISO: string;
  endDateISO?: string;
  startTime: string;
  endTime?: string;
  location?: string;
  locationUrl?: string;
  imageUrl?: string;
  signupLink?: string;
  category: EventCategory;
  recurrence?: RecurrenceRule;
}

function isValidTime(value: string): boolean {
  if (!TIME_PATTERN.test(value)) return false;
  const [hours, minutes] = value.split(':').map(Number);
  return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
}

function validateRecurrence(data: AdminEventFormData): { recurrence?: RecurrenceRule; error?: string } {
  if (!data.recurrence) return {};

  if (!validFrequencies.includes(data.recurrence.frequency)) {
    return { error: 'Invalid recurrence frequency.' };
  }

  const endDate = optionalString(data.recurrence.endDate);
  if (endDate) {
    if (!isAdminDateISO(endDate)) {
      return { error: 'Invalid recurrence end date.' };
    }
    if (endDate <= data.dateISO) {
      return { error: 'Recurrence end date must be after the event start date.' };
    }
  }

  return {
    recurrence: {
      frequency: data.recurrence.frequency,
      endDate,
    },
  };
}

function validateEventData(data: AdminEventFormData): { fields?: ValidatedEventFields; error?: string } {
  const title = requiredString(data.title);
  const dateISO = requiredString(data.dateISO);
  const endDateISOInput = optionalString(data.endDateISO);
  const startTime = requiredString(data.startTime);
  const endTime = optionalString(data.endTime);
  const description = requiredString(data.description);
  const location = optionalString(data.location);

  if (!title || !dateISO || !startTime || !description) {
    return { error: 'Missing required fields' };
  }

  const tooLong =
    lengthError('Title', title, MAX_TITLE_LENGTH) ||
    lengthError('Location', location, MAX_LOCATION_LENGTH) ||
    lengthError('Description', description, MAX_DESCRIPTION_LENGTH);
  if (tooLong) return { error: tooLong };

  if (!isAdminDateISO(dateISO)) {
    return { error: 'Invalid date. Use YYYY-MM-DD between 2000 and 2100.' };
  }

  let endDateISO: string | undefined;
  if (endDateISOInput && endDateISOInput !== dateISO) {
    if (!isAdminDateISO(endDateISOInput)) {
      return { error: 'Invalid end date. Use YYYY-MM-DD between 2000 and 2100.' };
    }
    if (endDateISOInput < dateISO) {
      return { error: 'End date must be on or after the start date.' };
    }
    endDateISO = endDateISOInput;
  }

  if (!isValidTime(startTime)) {
    return { error: 'Invalid start time. Use HH:MM.' };
  }

  if (endTime && !isValidTime(endTime)) {
    return { error: 'Invalid end time. Use HH:MM.' };
  }

  if (!validCategories.includes(data.category)) {
    return { error: 'Invalid category.' };
  }

  const recurrenceResult = validateRecurrence({ ...data, dateISO });
  if (recurrenceResult.error) return { error: recurrenceResult.error };

  const locationUrl = optionalUrl(data.locationUrl, 'Location URL');
  if (locationUrl.error) return { error: locationUrl.error };
  const imageUrl = optionalUrl(data.imageUrl, 'Image URL');
  if (imageUrl.error) return { error: imageUrl.error };
  const signupLink = optionalUrl(data.signupLink, 'Signup link');
  if (signupLink.error) return { error: signupLink.error };

  return {
    fields: {
      title,
      description,
      shortDescription: truncateDescription(description),
      dateISO,
      endDateISO,
      startTime,
      endTime,
      location,
      locationUrl: locationUrl.url,
      imageUrl: imageUrl.url,
      signupLink: signupLink.url,
      category: data.category,
      recurrence: recurrenceResult.recurrence,
    },
  };
}

function revalidateEventPages(): void {
  invalidateAdminEventsCache();
  revalidatePath('/calendar');
  revalidatePath('/events');
}

export async function POST(request: Request) {
  try {
    const data = await readJsonObject<AdminEventFormData>(request);
    if (!data) return invalidInput('Invalid request body');
    const validation = validateEventData(data);

    if (!validation.fields) return invalidInput(validation.error || 'Invalid event data');

    const uniqueSuffix = Date.now().toString(36);
    const now = new Date().toISOString();
    const event: AdminEvent = {
      id: `admin-evt-${uniqueSuffix}`,
      slug: recordSlug(validation.fields.title, 'event', uniqueSuffix),
      ...validation.fields,
      createdAt: now,
      updatedAt: now,
    };

    await addAdminEvent(event);
    revalidateEventPages();
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    return saveFailed(error, 'Failed to create event');
  }
}

export async function PUT(request: Request) {
  try {
    const id = idParam(request);
    if (!id) return missingId();

    const data = await readJsonObject<AdminEventFormData>(request);
    if (!data) return invalidInput('Invalid request body');
    const validation = validateEventData(data);

    if (!validation.fields) return invalidInput(validation.error || 'Invalid event data');

    const fields = validation.fields;
    const updated = await updateAdminEvent(id, (existing) => ({
      ...existing,
      ...fields,
      // Hidden occurrences only make sense while the event still recurs.
      excludedDates: fields.recurrence ? existing.excludedDates : undefined,
      updatedAt: new Date().toISOString(),
    }));

    if (!updated) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    // Also after an edit that wrote nothing: saving again then repairs pages
    // left stale by an interrupted save (at most one cached read).
    revalidateEventPages();
    return NextResponse.json(updated.item);
  } catch (error) {
    return saveFailed(error, 'Failed to update event');
  }
}

export async function DELETE(request: Request) {
  try {
    const id = idParam(request);
    if (!id) return missingId();
    const date = new URL(request.url).searchParams.get('date');
    if (date && !isAdminDateISO(date)) return invalidInput('Invalid date format. Use YYYY-MM-DD.');
    // With a date, only that occurrence of a recurring series is hidden.
    const found = date ? await excludeEventOccurrence(id, date) : await deleteAdminEvent(id);
    if (!found) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
    revalidateEventPages();
    return NextResponse.json({ success: true });
  } catch (error) {
    return saveFailed(error, 'Failed to delete event');
  }
}
