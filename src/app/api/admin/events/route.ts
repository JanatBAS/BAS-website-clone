import { NextResponse } from 'next/server';
import { getAdminEvents, addAdminEvent, deleteAdminEvent } from '@/lib/blob-store';
import type { AdminEvent, AdminEventFormData } from '@/types/admin';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const events = await getAdminEvents();
    return NextResponse.json(events);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function POST(request: Request) {
  try {
    const data: AdminEventFormData = await request.json();

    if (!data.title || !data.dateISO || !data.startTime || !data.description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const id = `admin-evt-${Date.now().toString(36)}`;
    const now = new Date().toISOString();
    const description = data.description;
    const shortDescription = description.length > 150
      ? description.substring(0, 150).trim() + '...'
      : description;

    const event: AdminEvent = {
      id,
      slug: slugify(data.title),
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
      createdAt: now,
      updatedAt: now,
    };

    await addAdminEvent(event);
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
    await deleteAdminEvent(id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
  }
}
