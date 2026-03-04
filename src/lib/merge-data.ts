import type { UnifiedEvent } from '@/types/calendar';
import { CATEGORY_COLORS } from '@/types/calendar';
import type { AdminEvent, AdminBlogPost } from '@/types/admin';
import { getAdminEvents, getAdminPosts } from './blob-store';
import { expandRecurringEvent } from './recurrence';
import { getMeetupEvents, type MeetupEvent } from './meetup';
import { slugify } from './utils';
import { formatTimeDisplay, getDateInfo, truncateDescription } from './date-utils';

export function adminEventToUnified(event: AdminEvent): UnifiedEvent {
  const dateInfo = getDateInfo(event.dateISO);
  const eventDate = new Date(event.dateISO + 'T23:59:59');
  const status = eventDate >= new Date() ? 'upcoming' : 'past';

  return {
    id: event.id,
    slug: event.slug,
    title: event.title,
    description: event.description,
    shortDescription: event.shortDescription || truncateDescription(event.description),
    dateISO: event.dateISO,
    startTime: event.startTime,
    endTime: event.endTime,
    startTimeDisplay: formatTimeDisplay(event.startTime),
    endTimeDisplay: event.endTime ? formatTimeDisplay(event.endTime) : undefined,
    dayOfWeek: dateInfo.dayOfWeek,
    dayOfMonth: dateInfo.dayOfMonth,
    monthShort: dateInfo.monthShort,
    monthLong: dateInfo.monthLong,
    year: dateInfo.year,
    location: event.location,
    locationUrl: event.locationUrl,
    imageUrl: event.imageUrl,
    href: `/calendar#${event.slug}`,
    signupLink: event.signupLink,
    category: event.category,
    status,
    source: 'admin',
    accentColor: CATEGORY_COLORS[event.category],
  };
}

function compactDate(dateISO: string): string {
  return dateISO.replace(/-/g, '');
}

function addDaysToDateISO(dateISO: string, days: number): string {
  const date = new Date(`${dateISO}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function timeToMinutes(time24: string): number {
  const [h, m] = time24.split(':').map(Number);
  return h * 60 + m;
}

function minutesToTimePart(minutes: number): string {
  const normalized = ((minutes % 1440) + 1440) % 1440;
  const h = Math.floor(normalized / 60);
  const m = normalized % 60;
  return `${String(h).padStart(2, '0')}${String(m).padStart(2, '0')}00`;
}

function buildGoogleCalendarUrl(event: MeetupEvent): string {
  const startDate = compactDate(event.dateISO);
  const startTime = event.startTime.replace(':', '') + '00';
  const startMinutes = timeToMinutes(event.startTime);
  let endPart: string;

  if (event.endTime) {
    const endMinutes = timeToMinutes(event.endTime);
    const dayOffset = endMinutes < startMinutes ? 1 : 0;
    const endDate = compactDate(addDaysToDateISO(event.dateISO, dayOffset));
    const endTime = event.endTime.replace(':', '') + '00';
    endPart = `${endDate}T${endTime}`;
  } else {
    const endTotalMinutes = startMinutes + 120;
    const dayOffset = Math.floor(endTotalMinutes / 1440);
    const endDate = compactDate(addDaysToDateISO(event.dateISO, dayOffset));
    const endTime = minutesToTimePart(endTotalMinutes);
    endPart = `${endDate}T${endTime}`;
  }

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${startDate}T${startTime}/${endPart}`,
    ctz: 'Europe/Zurich',
  });
  if (event.location) params.set('location', event.location);
  if (event.eventUrl) params.set('details', `RSVP: ${event.eventUrl}`);

  return `https://www.google.com/calendar/event?${params.toString()}`;
}

export function meetupEventToUnified(event: MeetupEvent): UnifiedEvent {
  const dateInfo = getDateInfo(event.dateISO);
  const eventDate = new Date(event.dateISO + 'T23:59:59');
  const status = eventDate >= new Date() ? 'upcoming' : 'past';

  return {
    id: event.id,
    slug: slugify(event.title) + '-' + event.id.replace('meetup-', ''),
    title: event.title,
    description: event.description,
    shortDescription: truncateDescription(event.description),
    dateISO: event.dateISO,
    startTime: event.startTime,
    endTime: event.endTime,
    startTimeDisplay: formatTimeDisplay(event.startTime),
    endTimeDisplay: event.endTime ? formatTimeDisplay(event.endTime) : undefined,
    dayOfWeek: dateInfo.dayOfWeek,
    dayOfMonth: dateInfo.dayOfMonth,
    monthShort: dateInfo.monthShort,
    monthLong: dateInfo.monthLong,
    year: dateInfo.year,
    location: event.location,
    imageUrl: event.imageUrl,
    href: event.eventUrl,
    signupLink: event.eventUrl,
    googleCalendarUrl: buildGoogleCalendarUrl(event),
    category: 'meetup',
    status,
    source: 'meetup.com',
    accentColor: CATEGORY_COLORS.meetup,
  };
}

/**
 * Deduplicates Meetup events against existing events.
 * Skips a Meetup event if there's already an event with the same title
 * (case-insensitive) on the same date from another source.
 */
function deduplicateMeetupEvents(
  meetupEvents: UnifiedEvent[],
  existingEvents: UnifiedEvent[],
): UnifiedEvent[] {
  const seenKeys = new Set(
    existingEvents.map((e) => `${e.title.toLowerCase()}__${e.dateISO}`),
  );

  const deduped: UnifiedEvent[] = [];
  for (const event of meetupEvents) {
    const key = `${event.title.toLowerCase()}__${event.dateISO}`;
    if (seenKeys.has(key)) continue;
    seenKeys.add(key);
    deduped.push(event);
  }
  return deduped;
}

export async function getAllEventsWithAdmin(hardcodedEvents: UnifiedEvent[]): Promise<UnifiedEvent[]> {
  try {
    const [adminResult, meetupResult] = await Promise.allSettled([
      getAdminEvents(),
      getMeetupEvents(),
    ]);

    const adminEvents = adminResult.status === 'fulfilled' ? adminResult.value : [];
    const meetupRaw = meetupResult.status === 'fulfilled' ? meetupResult.value : [];

    const adminTransformed = adminEvents.flatMap(expandRecurringEvent).map(adminEventToUnified);
    const meetupTransformed = meetupRaw.map(meetupEventToUnified);

    const baseEvents = [...hardcodedEvents, ...adminTransformed];
    const dedupedMeetup = deduplicateMeetupEvents(meetupTransformed, baseEvents);

    return [...baseEvents, ...dedupedMeetup].sort((a, b) => b.dateISO.localeCompare(a.dateISO));
  } catch {
    return hardcodedEvents;
  }
}

interface BlogPost {
  id: string;
  author: string;
  authorId: string;
  date: string;
  timestamp: number;
  category?: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  tags?: string[];
  commentCount?: number;
  likeCount?: number;
  unoptimizedImage?: boolean;
}

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

export function adminPostToMerged(post: AdminBlogPost): BlogPost {
  return {
    id: post.id,
    author: post.author,
    authorId: post.authorId,
    date: post.date,
    timestamp: post.timestamp,
    category: post.category,
    title: post.title,
    excerpt: stripHtmlTags(post.excerpt),
    href: `/blog/${post.slug}`,
    image: post.imageUrl,
    tags: post.tags,
    commentCount: 0,
    likeCount: 0,
    unoptimizedImage: true,
  };
}

export async function getAllPostsWithAdmin(hardcodedPosts: BlogPost[]): Promise<BlogPost[]> {
  try {
    const adminPosts = await getAdminPosts();
    const transformed = adminPosts.map(adminPostToMerged);
    return [...transformed, ...hardcodedPosts].sort((a, b) => b.timestamp - a.timestamp);
  } catch {
    return hardcodedPosts;
  }
}
