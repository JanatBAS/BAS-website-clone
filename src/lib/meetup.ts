import { get, put } from '@vercel/blob';

const MEETUP_FETCH_TIMEOUT_MS = 8000;
const MEETUP_CACHE_TTL_MS = 3600 * 1000; // 1 hour per serverless instance
const MEETUP_CACHE_KEY = 'cache/meetup-events.json';
const MEETUP_CACHE_VERSION = 1;

/** All BAS-affiliated Meetup groups */
export const MEETUP_GROUPS = [
  { urlname: 'bitcoin-meetup-switzerland', city: 'Zurich' },
  { urlname: 'bitcoin-meetup-geneva', city: 'Geneva' },
  { urlname: 'bitcoin-meetup-luzern', city: 'Luzern' },
  { urlname: 'bitcoin-meetup-neuchatel', city: 'Neuchatel' },
  { urlname: 'bitcoin-meetup-basel', city: 'Basel' },
];

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
}

type ApolloState = Record<string, unknown>;

let cachedEvents: MeetupEvent[] | null = null;
let cacheTimestamp = 0;

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

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
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
  const venue = readVenue(state, getRef(node.venue));
  const photoUrl =
    readPhotoUrl(state, getRef(node.featuredEventPhoto)) ??
    readPhotoUrl(state, getRef(node.displayPhoto));

  return {
    id: `meetup-${id}`,
    title: getString(node.title)?.trim() || 'Meetup Event',
    description: stripHtml(getString(node.description) ?? ''),
    dateISO: start.dateISO,
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

async function fetchGroupEvents(urlname: string, cacheMode: RequestCache): Promise<MeetupEvent[]> {
  const response = await fetchWithTimeout(`https://www.meetup.com/${urlname}/events/`, cacheMode);
  if (!response.ok) {
    throw new Error(`Meetup events page returned HTTP ${response.status} for "${urlname}"`);
  }

  const state = extractApolloState(await response.text());
  const now = new Date();
  const events: MeetupEvent[] = [];

  for (const [key, node] of Object.entries(state)) {
    if (!key.startsWith('Event:') || !isRecord(node)) continue;
    if (getString(node.status) && getString(node.status) !== 'ACTIVE') continue;

    const dateTime = getString(node.dateTime);
    if (!dateTime || new Date(dateTime) < now) continue;

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

async function fetchAllGroups(cacheMode: RequestCache): Promise<MeetupEvent[]> {
  const results = await Promise.allSettled(
    MEETUP_GROUPS.map((group) => fetchGroupEvents(group.urlname, cacheMode)),
  );

  const failures = results.flatMap((result, index) => {
    if (result.status === 'fulfilled') return [];
    const reason = result.reason instanceof Error ? result.reason.message : String(result.reason);
    return [`${MEETUP_GROUPS[index].urlname} (${reason})`];
  });

  if (failures.length > 0) {
    throw new Error(`Meetup sync failed for groups: ${failures.join(', ')}`);
  }

  return normalizeEvents(results.flatMap((result) => (
    result.status === 'fulfilled' ? result.value : []
  )));
}

async function readMeetupCache(): Promise<MeetupEventsCache | null> {
  try {
    const result = await get(MEETUP_CACHE_KEY, {
      access: 'public',
      useCache: false,
    });

    if (!result || result.statusCode !== 200) return null;

    const cache = await new Response(result.stream).json() as MeetupEventsCache;
    if (cache.version !== MEETUP_CACHE_VERSION || !Array.isArray(cache.events)) {
      return null;
    }

    return cache;
  } catch {
    return null;
  }
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

function cacheEventsInMemory(events: MeetupEvent[]): void {
  cachedEvents = events;
  cacheTimestamp = Date.now();
}

function canonicalizeEvents(events: MeetupEvent[]): string {
  return JSON.stringify(normalizeEvents(events));
}

/**
 * Fetches upcoming Meetup events for a scheduled sync. Throws on any group
 * failure so the previous durable cache remains the last known good dataset.
 */
export async function syncMeetupEventsCache(): Promise<MeetupSyncResult> {
  const events = await fetchAllGroups('no-store');
  const currentCache = await readMeetupCache();
  const syncedAt = new Date().toISOString();
  const status = canonicalizeEvents(currentCache?.events ?? []) === canonicalizeEvents(events)
    ? 'unchanged'
    : 'updated';

  if (status === 'updated') {
    await writeMeetupCache(events, syncedAt);
  }

  cacheEventsInMemory(events);

  return {
    status,
    eventCount: events.length,
    syncedAt,
    groups: MEETUP_GROUPS.map((group) => group.urlname),
  };
}

/**
 * Returns the last known good Meetup events. Public pages read from the durable
 * Blob cache first; live Meetup fetching is only a bootstrap fallback when the
 * cache has not been created yet.
 */
export async function getMeetupEvents(): Promise<MeetupEvent[]> {
  const storedCache = await readMeetupCache();
  if (storedCache) {
    cacheEventsInMemory(storedCache.events);
    return storedCache.events;
  }

  if (cachedEvents && Date.now() - cacheTimestamp < MEETUP_CACHE_TTL_MS) {
    return cachedEvents;
  }

  try {
    const events = await fetchAllGroups('force-cache');
    cacheEventsInMemory(events);
    return events;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.warn(`[meetup] failed to fetch events and no durable cache is available: ${message}`);
    return cachedEvents ?? [];
  }
}
