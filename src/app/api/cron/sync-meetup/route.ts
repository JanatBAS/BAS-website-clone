import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { syncMeetupEventsCache } from '@/lib/meetup';

export const dynamic = 'force-dynamic';

function isAuthorized(request: Request): boolean {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return true;
  return request.headers.get('authorization') === `Bearer ${cronSecret}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const result = await syncMeetupEventsCache();

    if (result.status === 'updated') {
      revalidatePath('/calendar');
      revalidatePath('/events');
    }

    console.log('[meetup-sync] completed', result);
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[meetup-sync] failed', { message });
    return NextResponse.json({ error: 'Meetup sync failed' }, { status: 500 });
  }
}
