import type { UnifiedEvent } from '@/types/calendar';
import { CATEGORY_COLORS } from '@/types/calendar';
import type { AdminEvent, AdminBlogPost } from '@/types/admin';
import { getAdminEvents, getAdminPosts } from './blob-store';

function formatTimeDisplay(time24: string): string {
  const [h, m] = time24.split(':').map(Number);
  const period = h >= 12 ? 'pm' : 'am';
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, '0')} ${period}`;
}

function getDateInfo(dateISO: string) {
  const date = new Date(dateISO + 'T12:00:00');
  return {
    dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'long' }),
    dayOfMonth: date.getDate().toString(),
    monthShort: date.toLocaleDateString('en-US', { month: 'short' }),
    monthLong: date.toLocaleDateString('en-US', { month: 'long' }),
    year: date.getFullYear(),
  };
}

function truncateDescription(description: string, maxLength = 150): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength).trim() + '...';
}

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

export async function getAllEventsWithAdmin(hardcodedEvents: UnifiedEvent[]): Promise<UnifiedEvent[]> {
  try {
    const adminEvents = await getAdminEvents();
    const transformed = adminEvents.map(adminEventToUnified);
    return [...hardcodedEvents, ...transformed].sort((a, b) => b.dateISO.localeCompare(a.dateISO));
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

export function adminPostToMerged(post: AdminBlogPost): BlogPost {
  return {
    id: post.id,
    author: post.author,
    authorId: post.authorId,
    date: post.date,
    timestamp: post.timestamp,
    category: post.category,
    title: post.title,
    excerpt: post.excerpt,
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
