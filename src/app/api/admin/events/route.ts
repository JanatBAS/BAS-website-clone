import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import {
  getAdminEvents,
  addAdminEvent,
  deleteAdminEvent,
  excludeEventOccurrence,
  getAdminEventById,
  updateAdminEvent,
  invalidateAdminEventsCache,
} from '@/lib/blob-store';
import type { AdminEvent, AdminEventFormData, RecurrenceRule } from '@/types/admin';
import type { EventCategory } from '@/types/calendar';
import { isValidDateISO } from '@/lib/event-dates';
import { slugify } from '@/lib/utils';

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

function optionalString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function requiredString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidTime(value: string): boolean {
  if (!TIME_PATTERN.test(value)) return false;
  const [hours, minutes] = value.split(':').map(Number);
  return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
}

function shortDescriptionFrom(description: string): string {
  return description.length > 150
    ? description.substring(0, 150).trim() + '...'
    : description;
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

  return {
    fields: {
      title,
      description,
      shortDescription: shortDescriptionFrom(description),
      dateISO,
      endDateISO,
      startTime,
      endTime,
      location: optionalString(data.location),
      locationUrl: optionalString(data.locationUrl),
      imageUrl: optionalString(data.imageUrl),
      signupLink: optionalString(data.signupLink),
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

export async function GET() {
  try {
    const events = await getAdminEvents();
    return NextResponse.json(events);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data: AdminEventFormData = await request.json();
    const validation = validateEventData(data);

    if (!validation.fields) {
      return NextResponse.json({ error: validation.error || 'Invalid event data' }, { status: 400 });
    }

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
  } catch {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }

    const existing = await getAdminEventById(id);
    if (!existing) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    const data: AdminEventFormData = await request.json();
    const validation = validateEventData(data);

    if (!validation.fields) {
      return NextResponse.json({ error: validation.error || 'Invalid event data' }, { status: 400 });
    }

    const updated = await updateAdminEvent(id, {
      ...validation.fields,
      excludedDates: validation.fields.recurrence ? existing.excludedDates : undefined,
      updatedAt: new Date().toISOString(),
    });

    if (!updated) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    revalidateEventPages();
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }
    const date = searchParams.get('date');
    if (date) {
      // Exclude a single occurrence from a recurring series
      await excludeEventOccurrence(id, date);
    } else {
      await deleteAdminEvent(id);
    }
    revalidateEventPages();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
  }
}
