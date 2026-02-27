/**
 * Fetches upcoming events from Meetup.com groups using the undocumented
 * /gql2 persisted query endpoint (no authentication required).
 *
 * This uses the same endpoint that Meetup's own frontend uses internally.
 * The SHA256 hash identifies the `getPastGroupEvents` persisted query,
 * which despite its name returns events in reverse chronological order
 * (farthest future first), making it suitable for fetching upcoming events.
 */

const MEETUP_GQL_ENDPOINT = 'https://www.meetup.com/gql2';

const PERSISTED_QUERY_HASH =
  '9463f7c9ab5b08db3f2172223c806fb48993508781cd939184d9151c75214e3a';

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
  title: string;
  eventUrl: string;
  description: string;
  dateTime: string;  // ISO 8601 e.g. "2026-03-04T19:00:00+01:00"
  endTime: string;
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
  const date = new Date(isoString);
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
    title: node.title,
    description: stripHtml(node.description),
    dateISO: start.dateISO,
    startTime: start.time,
    endTime: end?.time,
    location: buildVenueString(node.venue),
    eventUrl: node.eventUrl,
    imageUrl: node.featuredEventPhoto?.highResUrl,
    groupUrlname,
  };
}

async function fetchGroupEvents(
  urlname: string,
): Promise<MeetupEvent[]> {
  const now = new Date();
  const events: MeetupEvent[] = [];
  let cursor: string | null = null;

  for (let page = 0; page < MAX_PAGES_PER_GROUP; page++) {
    const variables: Record<string, unknown> = { urlname };
    if (cursor) {
      variables.after = cursor;
    }

    const res = await fetch(MEETUP_GQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operationName: 'getPastGroupEvents',
        variables,
        extensions: {
          persistedQuery: {
            version: 1,
            sha256Hash: PERSISTED_QUERY_HASH,
          },
        },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) break;

    const json: MeetupGqlResponse = await res.json();
    if (json.errors || !json.data?.groupByUrlname?.events) break;

    const { edges, pageInfo } = json.data.groupByUrlname.events;

    let foundPastEvent = false;
    for (const edge of edges) {
      const eventDate = new Date(edge.node.dateTime);
      if (eventDate < now) {
        foundPastEvent = true;
        continue;
      }
      events.push(meetupNodeToEvent(edge.node, urlname));
    }

    // Events are returned farthest-future first, so once we see a past
    // event, all subsequent events will also be past — stop paginating.
    if (foundPastEvent || !pageInfo.hasNextPage) break;
    cursor = pageInfo.endCursor;
  }

  return events;
}

/**
 * Fetches upcoming events from all BAS Meetup groups in parallel.
 * Returns an empty array on failure (never throws).
 */
export async function getMeetupEvents(): Promise<MeetupEvent[]> {
  try {
    const results = await Promise.allSettled(
      MEETUP_GROUPS.map((group) => fetchGroupEvents(group.urlname)),
    );

    return results.flatMap((r) => (r.status === 'fulfilled' ? r.value : []));
  } catch {
    return [];
  }
}
