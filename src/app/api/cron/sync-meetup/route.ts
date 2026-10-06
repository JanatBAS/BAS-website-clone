import { timingSafeEqual } from 'node:crypto';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { syncMeetupEventsCache } from '@/lib/meetup';

export const dynamic = 'force-dynamic';

/**
 * Vercel Cron sends `Authorization: Bearer $CRON_SECRET`. Without a configured
 * secret the endpoint stays closed, so nobody can trigger syncs (and the Blob
 * read each sync costs) from outside.
 */
function isAuthorized(request: Request): boolean {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return false;

  const expected = Buffer.from(`Bearer ${cronSecret}`);
  const received = Buffer.from(request.headers.get('authorization') ?? '');
  return received.length === expected.length && timingSafeEqual(received, expected);
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    if (!process.env.CRON_SECRET) {
      console.error('[meetup-sync] CRON_SECRET is not configured; refusing to run');
    }
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
