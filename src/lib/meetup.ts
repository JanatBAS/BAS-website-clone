import { unstable_cache, revalidateTag } from 'next/cache';
import { put } from '@vercel/blob';
import { MEETUP_GROUPS } from '@/data/meetup-groups';
import { readPublicBlobJson } from './blob-read';
import { stripHtml } from './utils';

/**
 * Meetup events are scraped from each group's public events page once a day
 * by /api/cron/sync-meetup and stored as one JSON file in Vercel Blob.
 *
 * Blob operation budget (keep it this way):
 * - The daily sync reads the stored file once and writes it only when the
 *   event list changed.
 * - Pages read the stored file through `unstable_cache`; the sync expires that
 *   cache only after a write, so page rebuilds normally cost no Blob operation.
 */

const MEETUP_FETCH_TIMEOUT_MS = 8000;
const MEETUP_MEMORY_TTL_MS = 3600 * 1000; // fallback cache per serverless instance
const MEETUP_CACHE_KEY = 'cache/meetup-events.json';
const MEETUP_CACHE_VERSION = 1;
const MEETUP_EVENTS_TAG = 'meetup-events';

/**
 * Past meetups stay in the calendar for this long, so it does not go blank
 * between the end of one batch and the publication of the next.
 */
const MEETUP_PAST_WINDOW_DAYS = 90;

interface MeetupVenue {
  name?: string;
  address?: string;
  city?: string;
}

export interface MeetupEvent {
  id: string;
  title: string;
  description: string;
  dateISO: string;      // "2026-03-04"
  endDateISO?: string;  // "2026-03-06" for multi-day events
  startTime: string;    // "19:00"
  endTime?: string;     // "23:00"
  location?: string;
  eventUrl: string;
  imageUrl?: string;
  groupUrlname: string;
}

interface MeetupEventsCache {
  version: typeof MEETUP_CACHE_VERSION;
  syncedAt: string;
  source: 'meetup-public-events-page';
  groups: string[];
  events: MeetupEvent[];
}

export interface MeetupSyncResult {
  status: 'updated' | 'unchanged';
  eventCount: number;
  syncedAt: string;
  groups: string[];
  /** Groups that could not be fetched; their previously stored events were kept. */
  failedGroups: string[];
}

type ApolloState = Record<string, unknown>;

let memoryEvents: MeetupEvent[] | null = null;
let memoryTimestamp = 0;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function getString(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined;
}

function getRef(value: unknown): string | undefined {
  if (!isRecord(value)) return undefined;
  return getString(value.__ref);
}

/** First date (YYYY-MM-DD, UTC) that is still shown. */
function pastWindowStartISO(now = new Date()): string {
  const start = new Date(now.getTime() - MEETUP_PAST_WINDOW_DAYS * 24 * 60 * 60 * 1000);
  return start.toISOString().slice(0, 10);
}

function withinWindow(events: MeetupEvent[], now = new Date()): MeetupEvent[] {
  const startISO = pastWindowStartISO(now);
  return events.filter((event) => (event.endDateISO || event.dateISO) >= startISO);
}

function parseMeetupDateTime(isoString: string): { dateISO: string; time: string } {
  // Keep Meetup's local wall-clock date/time from the ISO string itself.
  // Avoid Date#getHours()/getDate() to prevent server-timezone shifts.
  const match = isoString.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/);
  if (match) {
    return {
      dateISO: match[1],
      time: match[2],
    };
  }

  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid Meetup dateTime: ${isoString}`);
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return {
    dateISO: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}`,
  };
}

function buildVenueString(venue: MeetupVenue | null): string | undefined {
  if (!venue) return undefined;

  const parts: string[] = [];
  if (venue.name) parts.push(venue.name);
  if (venue.address && venue.address !== venue.name) parts.push(venue.address);
  if (venue.city) parts.push(venue.city);
  return parts.length > 0 ? parts.join(', ') : undefined;
}

function readVenue(state: ApolloState, ref: string | undefined): MeetupVenue | null {
  if (!ref || !isRecord(state[ref])) return null;

  const venue = state[ref];
  return {
    name: getString(venue.name),
    address: getString(venue.address),
    city: getString(venue.city),
  };
}

function readPhotoUrl(state: ApolloState, ref: string | undefined): string | undefined {
  if (!ref || !isRecord(state[ref])) return undefined;
  return getString(state[ref].highResUrl);
}

function meetupNodeToEvent(
  node: Record<string, unknown>,
  state: ApolloState,
  groupUrlname: string,
): MeetupEvent {
  const id = getString(node.id);
  const dateTime = getString(node.dateTime);

  if (!id) throw new Error('Missing Meetup event id');
  if (!dateTime) throw new Error(`Missing Meetup event dateTime for "${id}"`);

  const start = parseMeetupDateTime(dateTime);
  const endTime = getString(node.endTime);
  const end = endTime ? parseMeetupDateTime(endTime) : undefined;
  const endDateISO = end && end.dateISO !== start.dateISO ? end.dateISO : undefined;
  const venue = readVenue(state, getRef(node.venue));
  const photoUrl =
    readPhotoUrl(state, getRef(node.featuredEventPhoto)) ??
    readPhotoUrl(state, getRef(node.displayPhoto));

  return {
    id: `meetup-${id}`,
    title: getString(node.title)?.trim() || 'Meetup Event',
    description: stripHtml(getString(node.description) ?? ''),
    dateISO: start.dateISO,
    endDateISO,
    startTime: start.time,
    endTime: end?.time,
    location: buildVenueString(venue),
    eventUrl: getString(node.eventUrl) ?? `https://www.meetup.com/${groupUrlname}/events/${id}/`,
    imageUrl: photoUrl,
    groupUrlname,
  };
}

function extractApolloState(html: string): ApolloState {
  const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!match) {
    throw new Error('Missing Meetup __NEXT_DATA__ payload');
  }

  const data: unknown = JSON.parse(match[1]);
  if (!isRecord(data)) throw new Error('Invalid Meetup __NEXT_DATA__ payload');

  const props = data.props;
  const pageProps = isRecord(props) ? props.pageProps : undefined;
  const state = isRecord(pageProps) ? pageProps.__APOLLO_STATE__ : undefined;

  if (!isRecord(state)) {
    throw new Error('Missing Meetup Apollo state');
  }

  return state;
}

async function fetchWithTimeout(url: string, cacheMode: RequestCache): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), MEETUP_FETCH_TIMEOUT_MS);

  try {
    return await fetch(url, {
      cache: cacheMode,
      headers: {
        'User-Agent': 'BAS website meetup sync',
      },
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Published events of one group: upcoming ones plus recent past ones (the
 * public events page embeds the next events and the ten most recent).
 * Drafts and cancelled events are skipped.
 */
async function fetchGroupEvents(urlname: string, cacheMode: RequestCache): Promise<MeetupEvent[]> {
  const response = await fetchWithTimeout(`https://www.meetup.com/${urlname}/events/`, cacheMode);
  if (!response.ok) {
    throw new Error(`Meetup events page returned HTTP ${response.status} for "${urlname}"`);
  }

  const state = extractApolloState(await response.text());
  const events: MeetupEvent[] = [];

  for (const [key, node] of Object.entries(state)) {
    if (!key.startsWith('Event:') || !isRecord(node)) continue;
    const status = getString(node.status);
    if (status && status !== 'ACTIVE' && status !== 'PAST') continue;

    try {
      events.push(meetupNodeToEvent(node, state, urlname));
    } catch (error) {
      const id = getString(node.id) ?? 'unknown';
      const message = error instanceof Error ? error.message : 'Unknown event parsing error';
      console.warn(`[meetup] skipped malformed event "${id}" for group "${urlname}": ${message}`);
    }
  }

  return events;
}

function normalizeEvents(events: MeetupEvent[]): MeetupEvent[] {
  const unique = new Map<string, MeetupEvent>();
  for (const event of events) {
    unique.set(event.id, event);
  }

  return [...unique.values()].sort((a, b) => {
    const dateOrder = `${a.dateISO}T${a.startTime}`.localeCompare(`${b.dateISO}T${b.startTime}`);
    if (dateOrder !== 0) return dateOrder;
    return a.id.localeCompare(b.id);
  });
}

interface GroupFetchResult {
  events: MeetupEvent[];
  failedGroups: string[];
}

/**
 * Fetches every group. A group that fails falls back to `previous` (its last
 * stored events), so one unreachable group no longer blocks all updates.
 */
async function fetchAllGroups(cacheMode: RequestCache, previous: MeetupEvent[] = []): Promise<GroupFetchResult> {
  const results = await Promise.allSettled(
    MEETUP_GROUPS.map((group) => fetchGroupEvents(group.urlname, cacheMode)),
  );

  const events: MeetupEvent[] = [];
  const failedGroups: string[] = [];

  results.forEach((result, index) => {
    const { urlname } = MEETUP_GROUPS[index];
    if (result.status === 'fulfilled') {
      events.push(...result.value);
      return;
    }

    const reason = result.reason instanceof Error ? result.reason.message : String(result.reason);
    console.warn(`[meetup] could not fetch group "${urlname}": ${reason}`);
    failedGroups.push(urlname);
    events.push(...previous.filter((event) => event.groupUrlname === urlname));
  });

  return { events: normalizeEvents(withinWindow(events)), failedGroups };
}

/** Reads the stored events. A missing file returns null; other failures throw. */
async function readMeetupCache(): Promise<MeetupEventsCache | null> {
  // Null when the file does not exist yet, or locally/in CI where no store is configured.
  const result = await readPublicBlobJson(MEETUP_CACHE_KEY);
  const cache = result?.data as MeetupEventsCache | undefined;
  if (!cache || cache.version !== MEETUP_CACHE_VERSION || !Array.isArray(cache.events)) {
    return null;
  }

  return cache;
}

async function writeMeetupCache(events: MeetupEvent[], syncedAt: string): Promise<void> {
  const cache: MeetupEventsCache = {
    version: MEETUP_CACHE_VERSION,
    syncedAt,
    source: 'meetup-public-events-page',
    groups: MEETUP_GROUPS.map((group) => group.urlname),
    events,
  };

  await put(MEETUP_CACHE_KEY, JSON.stringify(cache), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 60,
  });
}

const readStoredMeetupEvents = unstable_cache(
  async (): Promise<MeetupEvent[] | null> => (await readMeetupCache())?.events ?? null,
  ['meetup-events-stored'],
  {
    tags: [MEETUP_EVENTS_TAG],
    revalidate: false,
  },
);

function rememberInMemory(events: MeetupEvent[]): void {
  memoryEvents = events;
  memoryTimestamp = Date.now();
}

function canonicalizeEvents(events: MeetupEvent[]): string {
  return JSON.stringify(normalizeEvents(events));
}

/**
 * Daily sync. Fetches all groups, keeps the stored events of groups that
 * failed, and writes only when the list changed. Throws (and keeps the stored
 * list) when the stored list cannot be read or every group failed.
 */
export async function syncMeetupEventsCache(): Promise<MeetupSyncResult> {
  const currentCache = await readMeetupCache();
  const { events, failedGroups } = await fetchAllGroups('no-store', currentCache?.events ?? []);

  if (failedGroups.length === MEETUP_GROUPS.length) {
    throw new Error('Meetup sync failed for every group');
  }

  const syncedAt = new Date().toISOString();
  const status = canonicalizeEvents(currentCache?.events ?? []) === canonicalizeEvents(events)
    ? 'unchanged'
    : 'updated';

  if (status === 'updated') {
    await writeMeetupCache(events, syncedAt);
    revalidateTag(MEETUP_EVENTS_TAG, { expire: 0 });
  }

  rememberInMemory(events);

  return {
    status,
    eventCount: events.length,
    syncedAt,
    groups: MEETUP_GROUPS.map((group) => group.urlname),
    failedGroups,
  };
}

/**
 * Meetup events for the calendar pages. Reads the stored list (cached); only
 * when none exists yet or it cannot be read, falls back to fetching Meetup
 * directly. Never throws.
 */
export async function getMeetupEvents(): Promise<MeetupEvent[]> {
  try {
    const stored = await readStoredMeetupEvents();
    if (stored) {
      rememberInMemory(stored);
      return withinWindow(stored);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.warn(`[meetup] could not read stored events: ${message}`);
  }

  if (memoryEvents && Date.now() - memoryTimestamp < MEETUP_MEMORY_TTL_MS) {
    return withinWindow(memoryEvents);
  }

  const { events, failedGroups } = await fetchAllGroups('force-cache');
  if (failedGroups.length === MEETUP_GROUPS.length) {
    console.warn('[meetup] no stored list is available and every group failed to load');
    return memoryEvents ? withinWindow(memoryEvents) : [];
  }

  rememberInMemory(events);
  return events;
}
