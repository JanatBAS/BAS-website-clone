import type { UnifiedEvent } from '@/types/calendar';
import { CATEGORY_COLORS } from '@/types/calendar';
import type { AdminEvent, AdminBlogPost } from '@/types/admin';
import type { BlogPost } from '@/types/blog';
import { getAdminEvents, getAdminPosts } from './blob-store';
import { expandRecurringEvent } from './recurrence';
import { getMeetupEvents, type MeetupEvent } from './meetup';
import { slugify, stripHtml } from './utils';
import { safeHttpUrl } from './safe-url';
import { formatTimeDisplay, getDateInfo, truncateDescription } from './date-utils';

export function adminEventToUnified(event: AdminEvent): UnifiedEvent {
  const dateInfo = getDateInfo(event.dateISO);

  return {
    id: event.id,
    slug: event.slug,
    title: event.title,
    description: event.description,
    shortDescription: event.shortDescription || truncateDescription(event.description),
    dateISO: event.dateISO,
    endDateISO: event.endDateISO,
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
    locationUrl: safeHttpUrl(event.locationUrl),
    imageUrl: safeHttpUrl(event.imageUrl),
    href: `/calendar#${event.slug}`,
    signupLink: safeHttpUrl(event.signupLink),
    category: event.category,
    source: 'admin',
    accentColor: CATEGORY_COLORS[event.category],
  };
}

export function meetupEventToUnified(event: MeetupEvent): UnifiedEvent {
  const dateInfo = getDateInfo(event.dateISO);

  return {
    id: event.id,
    slug: slugify(event.title) + '-' + event.id.replace('meetup-', ''),
    title: event.title,
    description: event.description,
    shortDescription: truncateDescription(event.description),
    dateISO: event.dateISO,
    endDateISO: event.endDateISO,
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
    imageUrl: safeHttpUrl(event.imageUrl),
    href: safeHttpUrl(event.eventUrl) ?? 'https://www.meetup.com/',
    signupLink: safeHttpUrl(event.eventUrl),
    category: 'meetup',
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
  const normalizeComparableEventLink = (url: string): string => {
    try {
      const parsed = new URL(url);
      const meetupEventMatch = parsed.hostname.includes('meetup.com')
        ? parsed.pathname.match(/\/events\/(\d+)/)
        : null;

      if (meetupEventMatch) {
        return `meetup:${meetupEventMatch[1]}`;
      }

      const normalizedPath = parsed.pathname.replace(/\/+$/, '');
      return `${parsed.hostname.toLowerCase()}${normalizedPath}`;
    } catch {
      return url.trim().replace(/\/+$/, '');
    }
  };

  const seenKeys = new Set(
    existingEvents.map((e) => `${e.title.toLowerCase()}__${e.dateISO}`),
  );
  const seenLinks = new Set(
    existingEvents.flatMap((event) =>
      [event.signupLink, event.href]
        .filter((value): value is string => Boolean(value))
        .map(normalizeComparableEventLink),
    ),
  );

  const deduped: UnifiedEvent[] = [];
  for (const event of meetupEvents) {
    const key = `${event.title.toLowerCase()}__${event.dateISO}`;
    if (seenKeys.has(key)) continue;
    const comparableLinks = [event.signupLink, event.href]
      .filter((value): value is string => Boolean(value))
      .map(normalizeComparableEventLink);
    if (comparableLinks.some((link) => seenLinks.has(link))) continue;

    seenKeys.add(key);
    comparableLinks.forEach((link) => seenLinks.add(link));
    deduped.push(event);
  }
  return deduped;
}

/**
 * Static, admin and Meetup events for the calendar pages. A failed admin read
 * throws on purpose: the cached page then keeps its last good version instead
 * of being regenerated without the admin events. Meetup failures are handled
 * inside getMeetupEvents().
 */
export async function getAllEventsWithAdmin(hardcodedEvents: UnifiedEvent[]): Promise<UnifiedEvent[]> {
  const [adminEvents, meetupRaw] = await Promise.all([getAdminEvents(), getMeetupEvents()]);

  const adminTransformed = adminEvents.flatMap(expandRecurringEvent).map(adminEventToUnified);
  const meetupTransformed = meetupRaw.map(meetupEventToUnified);

  const baseEvents = [...hardcodedEvents, ...adminTransformed];
  const dedupedMeetup = deduplicateMeetupEvents(meetupTransformed, baseEvents);

  return [...baseEvents, ...dedupedMeetup].sort((a, b) => b.dateISO.localeCompare(a.dateISO));
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
    excerpt: stripHtml(post.excerpt),
    href: `/blog/${post.slug}`,
    image: safeHttpUrl(post.imageUrl),
    tags: post.tags,
    commentCount: 0,
    unoptimizedImage: true,
  };
}

/** Static and admin posts, newest first. A failed admin read throws (see above). */
export async function getAllPostsWithAdmin(hardcodedPosts: BlogPost[]): Promise<BlogPost[]> {
  const adminPosts = await getAdminPosts();
  const transformed = adminPosts.map(adminPostToMerged);
  return [...transformed, ...hardcodedPosts].sort((a, b) => b.timestamp - a.timestamp);
}
