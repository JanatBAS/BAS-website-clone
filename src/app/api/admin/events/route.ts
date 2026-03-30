import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import {
  getAdminEvents,
  addAdminEvent,
  deleteAdminEvent,
  excludeEventOccurrence,
  invalidateAdminEventsCache,
} from '@/lib/blob-store';
import type { AdminEvent, AdminEventFormData } from '@/types/admin';
import type { RecurrenceFrequency } from '@/types/admin';
import { slugify } from '@/lib/utils';

export const dynamic = 'force-dynamic';

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

    if (!data.title || !data.dateISO || !data.startTime || !data.description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Strict date validation: reject impossible dates like Feb 31
    const parsedDate = new Date(data.dateISO + 'T12:00:00');
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json({ error: 'Invalid date format. Use YYYY-MM-DD.' }, { status: 400 });
    }
    const [year, month, day] = data.dateISO.split('-').map(Number);
    if (parsedDate.getFullYear() !== year || parsedDate.getMonth() + 1 !== month || parsedDate.getDate() !== day) {
      return NextResponse.json({ error: 'Invalid calendar date.' }, { status: 400 });
    }

    // Validate recurrence if provided
    if (data.recurrence) {
      const validFrequencies: RecurrenceFrequency[] = ['weekly', 'biweekly', 'monthly'];
      if (!validFrequencies.includes(data.recurrence.frequency)) {
        return NextResponse.json({ error: 'Invalid recurrence frequency.' }, { status: 400 });
      }
      if (data.recurrence.endDate) {
        const endParsed = new Date(data.recurrence.endDate + 'T12:00:00');
        if (isNaN(endParsed.getTime())) {
          return NextResponse.json({ error: 'Invalid recurrence end date.' }, { status: 400 });
        }
        if (data.recurrence.endDate <= data.dateISO) {
          return NextResponse.json({ error: 'Recurrence end date must be after the event start date.' }, { status: 400 });
        }
      }
    }

    const uniqueSuffix = Date.now().toString(36);
    const id = `admin-evt-${uniqueSuffix}`;
    const slug = `${slugify(data.title)}-${uniqueSuffix}`;
    const now = new Date().toISOString();
    const description = data.description;
    const shortDescription = description.length > 150
      ? description.substring(0, 150).trim() + '...'
      : description;

    const event: AdminEvent = {
      id,
      slug,
      title: data.title,
      description,
      shortDescription,
      dateISO: data.dateISO,
      startTime: data.startTime,
      endTime: data.endTime || undefined,
      location: data.location || undefined,
      locationUrl: data.locationUrl || undefined,
      imageUrl: data.imageUrl || undefined,
      signupLink: data.signupLink || undefined,
      category: data.category,
      recurrence: data.recurrence || undefined,
      createdAt: now,
      updatedAt: now,
    };

    await addAdminEvent(event);
    invalidateAdminEventsCache();
    revalidatePath('/calendar');
    revalidatePath('/events');
    return NextResponse.json(event, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
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
    invalidateAdminEventsCache();
    revalidatePath('/calendar');
    revalidatePath('/events');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
  }
}
