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
  missingId,
  optionalString,
  optionalUrl,
  requiredString,
  saveFailed,
} from '@/lib/admin-input';
import type { AdminEvent, AdminEventFormData, RecurrenceRule } from '@/types/admin';
import type { EventCategory } from '@/types/calendar';
import { isValidDateISO } from '@/lib/event-dates';
import { slugify } from '@/lib/utils';
import { truncateDescription } from '@/lib/date-utils';

export const dynamic = 'force-dynamic';

const validCategories: EventCategory[] = ['meetup', 'conference', 'workshop', 'general'];
const validFrequencies: RecurrenceRule['frequency'][] = ['weekly', 'biweekly', 'monthly'];
const TIME_PATTERN = /^\d{2}:\d{2}$/;

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
    if (!isValidDateISO(endDate)) {
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

  if (!title || !dateISO || !startTime || !description) {
    return { error: 'Missing required fields' };
  }

  if (!isValidDateISO(dateISO)) {
    return { error: 'Invalid date format. Use YYYY-MM-DD.' };
  }

  let endDateISO: string | undefined;
  if (endDateISOInput && endDateISOInput !== dateISO) {
    if (!isValidDateISO(endDateISOInput)) {
      return { error: 'Invalid end date format. Use YYYY-MM-DD.' };
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
      location: optionalString(data.location),
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
    const data: AdminEventFormData = await request.json();
    const validation = validateEventData(data);

    if (!validation.fields) return invalidInput(validation.error || 'Invalid event data');

    const uniqueSuffix = Date.now().toString(36);
    const now = new Date().toISOString();
    const event: AdminEvent = {
      id: `admin-evt-${uniqueSuffix}`,
      slug: `${slugify(validation.fields.title)}-${uniqueSuffix}`,
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

    const data: AdminEventFormData = await request.json();
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

    revalidateEventPages();
    return NextResponse.json(updated);
  } catch (error) {
    return saveFailed(error, 'Failed to update event');
  }
}

export async function DELETE(request: Request) {
  try {
    const id = idParam(request);
    if (!id) return missingId();
    const date = new URL(request.url).searchParams.get('date');
    if (date && !isValidDateISO(date)) return invalidInput('Invalid date format. Use YYYY-MM-DD.');
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
