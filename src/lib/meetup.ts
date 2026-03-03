/**
 * Fetches upcoming events from Meetup.com groups using the undocumented
 * /gql2 persisted query endpoint (no authentication required).
 *
 * This uses the same endpoint that Meetup's own frontend uses internally.
 * The SHA256 hash identifies the `getUpcomingGroupEvents` persisted query,
 * which returns events in ascending chronological order (earliest first).
 * The `afterDateTime` variable filters to only future events.
 *
 * Meetup periodically rotates these hashes. If you get PersistedQueryNotFound
 * errors, inspect the JS bundles at meetup.com for updated hashes — look for
 * `getUpcomingGroupEvents` in the webpack chunks.
 */

const MEETUP_GQL_ENDPOINT = 'https://www.meetup.com/gql2';
const MEETUP_FETCH_TIMEOUT_MS = 8000;
const MEETUP_CACHE_TTL_MS = 3600 * 1000; // 1 hour

/** Hash for getUpcomingGroupEvents — returns events ascending (earliest first) */
const UPCOMING_EVENTS_HASH =
  '55bced4dca11114ce83c003609158f19b3ca289939c2e6c0b39ce728722756f4';

/** Hashes for getPastGroupEvents — returns events descending (latest first), used as fallback.
 *  Multiple hashes for resilience against intermittent PersistedQueryNotFound. */
const PAST_EVENTS_HASHES = [
  '84d621b514d4bfad36d9b37d78f469ee558b01ebe97ba9fb9183fe958b2ad1f1',
  '9463f7c9ab5b08db3f2172223c806fb48993508781cd939184d9151c75214e3a',
];

/** All BAS-affiliated Meetup groups */
export const MEETUP_GROUPS = [
  { urlname: 'bitcoin-meetup-switzerland', city: 'Zurich' },
  { urlname: 'bitcoin-meetup-geneva', city: 'Geneva' },
  { urlname: 'bitcoin-meetup-luzern', city: 'Luzern' },
  { urlname: 'bitcoin-meetup-neuchatel', city: 'Neuchatel' },
  { urlname: 'bitcoin-meetup-basel', city: 'Basel' },
];

const MAX_PAGES_PER_GROUP = 5;

interface MeetupVenue {
  name?: string;
  address?: string;
  city?: string;
}

interface MeetupPhoto {
  highResUrl?: string;
}

interface MeetupEventNode {
  id: string;
  title?: string | null;
  eventUrl?: string | null;
  description?: string | null;
  dateTime: string;  // ISO 8601 e.g. "2026-03-04T19:00:00+01:00"
  endTime?: string | null;
  venue: MeetupVenue | null;
  featuredEventPhoto: MeetupPhoto | null;
  isOnline: boolean;
}

interface MeetupPageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

interface MeetupEdge {
  node: MeetupEventNode;
}

interface MeetupGqlResponse {
  data?: {
    groupByUrlname?: {
      events?: {
        pageInfo: MeetupPageInfo;
        edges: MeetupEdge[];
      };
    };
  };
  errors?: Array<{ message: string }>;
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

  // Fallback for unexpected formats.
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
  // Deduplicate: name and address are often identical on Meetup
  const parts: string[] = [];
  if (venue.name) parts.push(venue.name);
  if (venue.address && venue.address !== venue.name) parts.push(venue.address);
  if (venue.city) parts.push(venue.city);
  return parts.length > 0 ? parts.join(', ') : undefined;
}

function meetupNodeToEvent(node: MeetupEventNode, groupUrlname: string): MeetupEvent {
  const start = parseMeetupDateTime(node.dateTime);
  const end = node.endTime ? parseMeetupDateTime(node.endTime) : undefined;

  return {
    id: `meetup-${node.id}`,
    title: node.title?.trim() || 'Meetup Event',
    description: stripHtml(node.description || ''),
    dateISO: start.dateISO,
    startTime: start.time,
    endTime: end?.time,
    location: buildVenueString(node.venue),
    eventUrl: node.eventUrl || `https://www.meetup.com/${groupUrlname}/events/${node.id}/`,
    imageUrl: node.featuredEventPhoto?.highResUrl,
    groupUrlname,
  };
}

/**
 * Makes a single GraphQL request to the Meetup gql2 endpoint.
 */
async function meetupGqlRequest(
  operationName: string,
  variables: Record<string, unknown>,
  sha256Hash: string,
): Promise<MeetupGqlResponse> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), MEETUP_FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(MEETUP_GQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operationName,
        variables,
        extensions: {
          persistedQuery: {
            version: 1,
            sha256Hash,
          },
        },
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      return { errors: [{ message: `HTTP ${res.status}` }] };
    }

    return await res.json();
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Fetches upcoming events using `getUpcomingGroupEvents` (ascending order,
 * filtered by afterDateTime). Falls back to `getPastGroupEvents` (descending
 * order, client-side future filtering) if the primary hash stops working.
 */
async function fetchGroupEvents(
  urlname: string,
): Promise<MeetupEvent[]> {
  // Try primary: getUpcomingGroupEvents (returns only future events, ASC)
  const primaryEvents = await fetchUpcomingGroupEvents(urlname);
  if (primaryEvents !== null) return primaryEvents;

  // Fallback: getPastGroupEvents (returns all events DESC, we filter)
  console.warn(`[meetup] primary query failed for "${urlname}", trying fallback`);
  return fetchPastGroupEventsFallback(urlname);
}

/**
 * Primary strategy: use getUpcomingGroupEvents with afterDateTime filter.
 * Returns null if the persisted query hash is no longer valid.
 */
async function fetchUpcomingGroupEvents(
  urlname: string,
): Promise<MeetupEvent[] | null> {
  const events: MeetupEvent[] = [];
  let cursor: string | null = null;
  const afterDateTime = new Date().toISOString();

  for (let page = 0; page < MAX_PAGES_PER_GROUP; page++) {
    const variables: Record<string, unknown> = { urlname, afterDateTime };
    if (cursor) {
      variables.after = cursor;
    }

    let json: MeetupGqlResponse;
    try {
      json = await meetupGqlRequest('getUpcomingGroupEvents', variables, UPCOMING_EVENTS_HASH);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown fetch error';
      console.warn(`[meetup] request failed for group "${urlname}": ${message}`);
      return null;
    }

    // PersistedQueryNotFound → hash rotated, signal caller to try fallback
    if (json.errors?.some((e) => e.message === 'PersistedQueryNotFound')) {
      return null;
    }

    if (json.errors || !json.data?.groupByUrlname?.events) {
      console.warn(`[meetup] GraphQL errors for group "${urlname}"`);
      return null;
    }

    const { edges, pageInfo } = json.data.groupByUrlname.events;

    for (const edge of edges) {
      try {
        events.push(meetupNodeToEvent(edge.node, urlname));
      } catch (error) {
        const id = edge.node?.id ?? 'unknown';
        const message = error instanceof Error ? error.message : 'Unknown event parsing error';
        console.warn(`[meetup] skipped malformed event "${id}" for group "${urlname}": ${message}`);
      }
    }

    if (!pageInfo.hasNextPage) break;
    cursor = pageInfo.endCursor;
  }

  return events;
}

/**
 * Fallback strategy: use getPastGroupEvents (returns events DESC, including
 * future events). We filter client-side to keep only future events.
 * Tries multiple hashes for resilience against intermittent failures.
 */
async function fetchPastGroupEventsFallback(
  urlname: string,
): Promise<MeetupEvent[]> {
  for (const hash of PAST_EVENTS_HASHES) {
    const result = await fetchPastGroupEventsWithHash(urlname, hash);
    if (result !== null) return result;
  }
  return [];
}

async function fetchPastGroupEventsWithHash(
  urlname: string,
  hash: string,
): Promise<MeetupEvent[] | null> {
  const now = new Date();
  const events: MeetupEvent[] = [];
  let cursor: string | null = null;

  for (let page = 0; page < MAX_PAGES_PER_GROUP; page++) {
    const variables: Record<string, unknown> = { urlname };
    if (cursor) {
      variables.after = cursor;
    }

    let json: MeetupGqlResponse;
    try {
      json = await meetupGqlRequest('getPastGroupEvents', variables, hash);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown fetch error';
      console.warn(`[meetup] fallback request failed for group "${urlname}": ${message}`);
      return null;
    }

    if (json.errors?.some((e) => e.message === 'PersistedQueryNotFound')) {
      return null; // Try next hash
    }

    if (json.errors || !json.data?.groupByUrlname?.events) {
      console.warn(`[meetup] fallback GraphQL errors for group "${urlname}"`);
      return null;
    }

    const { edges, pageInfo } = json.data.groupByUrlname.events;

    let foundPastEvent = false;
    for (const edge of edges) {
      const eventDate = new Date(edge.node.dateTime);
      if (eventDate < now) {
        foundPastEvent = true;
        continue;
      }
      try {
        events.push(meetupNodeToEvent(edge.node, urlname));
      } catch (error) {
        const id = edge.node?.id ?? 'unknown';
        const message = error instanceof Error ? error.message : 'Unknown event parsing error';
        console.warn(`[meetup] skipped malformed event "${id}" for group "${urlname}": ${message}`);
      }
    }

    // Events are returned farthest-future first, so once we see a past
    // event, all subsequent events will also be past — stop paginating.
    if (foundPastEvent || !pageInfo.hasNextPage) break;
    cursor = pageInfo.endCursor;
  }

  return events;
}

/** Simple in-memory cache to avoid refetching on every request within the same serverless instance. */
let cachedEvents: MeetupEvent[] | null = null;
let cacheTimestamp = 0;

async function fetchAllGroups(): Promise<MeetupEvent[]> {
  const results = await Promise.allSettled(
    MEETUP_GROUPS.map((group) => fetchGroupEvents(group.urlname)),
  );
  return results.flatMap((r) => (r.status === 'fulfilled' ? r.value : []));
}

/**
 * Fetches upcoming events from all BAS Meetup groups in parallel.
 * Results are cached in-memory for 1 hour per serverless instance.
 * Empty results are NEVER cached — stale data is preferred over nothing,
 * because Meetup's endpoint intermittently returns PersistedQueryNotFound.
 * Returns an empty array on failure (never throws).
 */
export async function getMeetupEvents(): Promise<MeetupEvent[]> {
  try {
    if (cachedEvents && Date.now() - cacheTimestamp < MEETUP_CACHE_TTL_MS) {
      return cachedEvents;
    }

    let events = await fetchAllGroups();

    // Meetup's endpoint intermittently fails — retry once after a short delay
    if (events.length === 0) {
      await new Promise((r) => setTimeout(r, 1500));
      events = await fetchAllGroups();
    }

    // Only cache non-empty results. Stale data is better than nothing.
    if (events.length > 0) {
      cachedEvents = events;
      cacheTimestamp = Date.now();
      return events;
    }

    return cachedEvents ?? [];
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.warn(`[meetup] failed to fetch events: ${message}`);
    return cachedEvents ?? [];
  }
}
