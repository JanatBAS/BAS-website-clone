import { NextResponse } from 'next/server';
import { getAdminEvents } from '@/lib/blob-store';

export const dynamic = 'force-dynamic';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const events = await getAdminEvents();
    const event = events.find((item) => item.id === id);
    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
    return NextResponse.json(event);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch event' }, { status: 500 });
  }
}
