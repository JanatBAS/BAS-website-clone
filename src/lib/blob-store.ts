import { cache } from 'react';
import { get, list, put } from '@vercel/blob';
import type { AdminEvent, AdminBlogPost } from '@/types/admin';
import { env } from '@/lib/env';

const EVENTS_KEY = 'admin/events.json';
const POSTS_KEY = 'admin/posts.json';

interface StoredAdminEvent extends Omit<AdminEvent, 'category'> {
  category?: string;
}

function normalizeEventCategory(category: string | undefined): AdminEvent['category'] {
  if (category === 'roadshow') return 'conference';
  if (category === 'meetup' || category === 'conference' || category === 'workshop' || category === 'general') {
    return category;
  }
  return 'general';
}

async function readBlob<T>(key: string): Promise<T | null> {
  try {
    const result = await get(key, {
      access: 'private',
      token: env.BLOB_READ_WRITE_TOKEN,
      useCache: false,
    });

    if (!result || result.statusCode !== 200) return null;
    return await new Response(result.stream).json();
  } catch {
    return null;
  }
}

async function readLegacyBlob<T>(key: string): Promise<T | null> {
  try {
    const prefix = key.replace(/\.[^.]+$/, '');
    const { blobs } = await list({ prefix });
    const legacyBlobs = blobs.filter((blob) => blob.pathname !== key);
    if (legacyBlobs.length === 0) return null;

    const latest = legacyBlobs
      .slice()
      .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())[0];

    const res = await fetch(latest.url, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

async function writeBlob<T>(key: string, data: T): Promise<void> {
  await put(key, JSON.stringify(data), {
    access: 'private',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

async function readEventsDataset(): Promise<StoredAdminEvent[]> {
  const stableData = await readBlob<StoredAdminEvent[]>(EVENTS_KEY);
  if (stableData) return stableData;

  const legacyData = await readLegacyBlob<StoredAdminEvent[]>(EVENTS_KEY);
  if (!legacyData) return [];

  try {
    await writeBlob(EVENTS_KEY, legacyData);
  } catch {
    // Legacy data was readable, so returning it is still the correct behavior.
  }

  return legacyData;
}

async function readPostsDataset(): Promise<AdminBlogPost[]> {
  const stableData = await readBlob<AdminBlogPost[]>(POSTS_KEY);
  if (stableData) return stableData;

  const legacyData = await readLegacyBlob<AdminBlogPost[]>(POSTS_KEY);
  if (!legacyData) return [];

  try {
    await writeBlob(POSTS_KEY, legacyData);
  } catch {
    // Legacy data was readable, so returning it is still the correct behavior.
  }

  return legacyData;
}

// --- Events ---

async function getAdminEventsUncached(): Promise<AdminEvent[]> {
  const events = await readEventsDataset();
  return events.map((event) => ({
    ...event,
    category: normalizeEventCategory(event.category),
  }));
}

const getAdminEventsCached = cache(async (): Promise<AdminEvent[]> => {
  return getAdminEventsUncached();
});

export async function getAdminEvents(): Promise<AdminEvent[]> {
  return getAdminEventsCached();
}

export async function addAdminEvent(event: AdminEvent): Promise<void> {
  const events = await getAdminEventsUncached();
  events.push(event);
  await writeBlob(EVENTS_KEY, events);
}

export async function deleteAdminEvent(id: string): Promise<void> {
  const events = await getAdminEventsUncached();
  const filtered = events.filter((e) => e.id !== id);
  await writeBlob(EVENTS_KEY, filtered);
}

export async function excludeEventOccurrence(id: string, date: string): Promise<void> {
  const events = await getAdminEventsUncached();
  const event = events.find((e) => e.id === id);
  if (!event) return;
  if (!event.excludedDates) event.excludedDates = [];
  if (!event.excludedDates.includes(date)) {
    event.excludedDates.push(date);
  }
  await writeBlob(EVENTS_KEY, events);
}

// --- Blog Posts ---

async function getAdminPostsUncached(): Promise<AdminBlogPost[]> {
  return [...await readPostsDataset()];
}

const getAdminPostsCached = cache(async (): Promise<AdminBlogPost[]> => {
  return getAdminPostsUncached();
});

export async function getAdminPosts(): Promise<AdminBlogPost[]> {
  return getAdminPostsCached();
}

export async function addAdminPost(post: AdminBlogPost): Promise<void> {
  const posts = await getAdminPostsUncached();
  posts.push(post);
  await writeBlob(POSTS_KEY, posts);
}

export async function deleteAdminPost(id: string): Promise<void> {
  const posts = await getAdminPostsUncached();
  const filtered = posts.filter((p) => p.id !== id);
  await writeBlob(POSTS_KEY, filtered);
}

export async function getAdminPostBySlug(slug: string): Promise<AdminBlogPost | undefined> {
  const posts = await getAdminPosts();
  return posts.find((p) => p.slug === slug);
}

export async function getAdminPostById(id: string): Promise<AdminBlogPost | undefined> {
  const posts = await getAdminPosts();
  return posts.find((p) => p.id === id);
}

export async function updateAdminPost(id: string, updates: Partial<AdminBlogPost>): Promise<AdminBlogPost | null> {
  const posts = await getAdminPostsUncached();
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return null;
  posts[index] = { ...posts[index], ...updates };
  await writeBlob(POSTS_KEY, posts);
  return posts[index];
}
