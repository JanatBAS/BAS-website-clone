import { unstable_cache, revalidateTag } from 'next/cache';
import { del, list, put } from '@vercel/blob';
import type { AdminEvent, AdminBlogPost } from '@/types/admin';

const EVENTS_KEY = 'admin/events.json';
const POSTS_KEY = 'admin/posts.json';

const EVENTS_TAG = 'admin-events';
const POSTS_TAG = 'admin-posts';
const DATASET_VERSION_RETENTION = 2;

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

function getVersionedBlobPattern(key: string): { extension: string; prefix: string } {
  const extensionMatch = /\.[^.]+$/.exec(key);
  const extension = extensionMatch?.[0] ?? '';
  const prefix = extension ? key.slice(0, -extension.length) : key;
  return { extension, prefix };
}

function isVersionedBlobPath(pathname: string, key: string): boolean {
  const { prefix, extension } = getVersionedBlobPattern(key);
  return pathname.startsWith(`${prefix}-`) && pathname.endsWith(extension);
}

async function readVersionedBlob<T>(key: string): Promise<T | null> {
  try {
    const versionedBlobs = await listVersionedBlobs(key);
    if (versionedBlobs.length === 0) return null;

    const latest = versionedBlobs.reduce((currentLatest, blob) => {
      return new Date(blob.uploadedAt).getTime() > new Date(currentLatest.uploadedAt).getTime()
        ? blob
        : currentLatest;
    });

    const response = await fetch(latest.url, { cache: 'no-store' });
    if (!response.ok) return null;
    return response.json() as Promise<T>;
  } catch {
    return null;
  }
}

async function writeVersionedBlob<T>(key: string, data: T): Promise<void> {
  const newBlob = await put(key, JSON.stringify(data), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: true,
  });

  await pruneOldVersions(key, newBlob.url);
}

async function listVersionedBlobs(key: string) {
  const { prefix } = getVersionedBlobPattern(key);
  const blobs = [];
  let cursor: string | undefined;

  do {
    const page = await list({ prefix, cursor });
    blobs.push(...page.blobs.filter((blob) => isVersionedBlobPath(blob.pathname, key)));
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);

  return blobs;
}

async function pruneOldVersions(key: string, newestBlobUrl: string): Promise<void> {
  try {
    const versionedBlobs = await listVersionedBlobs(key);
    if (versionedBlobs.length <= DATASET_VERSION_RETENTION) return;

    const sorted = versionedBlobs.slice().sort((a, b) => {
      if (a.url === newestBlobUrl) return -1;
      if (b.url === newestBlobUrl) return 1;
      return new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();
    });

    const staleUrls = sorted.slice(DATASET_VERSION_RETENTION).map((blob) => blob.url);
    if (staleUrls.length > 0) {
      await del(staleUrls);
    }
  } catch {
    // Cleanup is best-effort. Reads still use the latest version if pruning fails.
  }
}

async function getAdminEventsUncached(): Promise<AdminEvent[]> {
  const events = (await readVersionedBlob<StoredAdminEvent[]>(EVENTS_KEY)) ?? [];
  return events.map((event) => ({
    ...event,
    category: normalizeEventCategory(event.category),
  }));
}

const getAdminEventsCached = unstable_cache(
  async (): Promise<AdminEvent[]> => getAdminEventsUncached(),
  ['admin-events-dataset'],
  {
    tags: [EVENTS_TAG],
    revalidate: false,
  },
);

export async function getAdminEvents(): Promise<AdminEvent[]> {
  return getAdminEventsCached();
}

export function invalidateAdminEventsCache(): void {
  revalidateTag(EVENTS_TAG, { expire: 0 });
}

export async function addAdminEvent(event: AdminEvent): Promise<void> {
  const events = await getAdminEventsUncached();
  events.push(event);
  await writeVersionedBlob(EVENTS_KEY, events);
}

export async function deleteAdminEvent(id: string): Promise<void> {
  const events = await getAdminEventsUncached();
  const filtered = events.filter((e) => e.id !== id);
  await writeVersionedBlob(EVENTS_KEY, filtered);
}

export async function excludeEventOccurrence(id: string, date: string): Promise<void> {
  const events = await getAdminEventsUncached();
  const event = events.find((e) => e.id === id);
  if (!event) return;
  if (!event.excludedDates) event.excludedDates = [];
  if (!event.excludedDates.includes(date)) {
    event.excludedDates.push(date);
  }
  await writeVersionedBlob(EVENTS_KEY, events);
}

async function getAdminPostsUncached(): Promise<AdminBlogPost[]> {
  return (await readVersionedBlob<AdminBlogPost[]>(POSTS_KEY)) ?? [];
}

const getAdminPostsCached = unstable_cache(
  async (): Promise<AdminBlogPost[]> => getAdminPostsUncached(),
  ['admin-posts-dataset'],
  {
    tags: [POSTS_TAG],
    revalidate: false,
  },
);

export async function getAdminPosts(): Promise<AdminBlogPost[]> {
  return getAdminPostsCached();
}

export function invalidateAdminPostsCache(): void {
  revalidateTag(POSTS_TAG, { expire: 0 });
}

export async function addAdminPost(post: AdminBlogPost): Promise<void> {
  const posts = await getAdminPostsUncached();
  posts.push(post);
  await writeVersionedBlob(POSTS_KEY, posts);
}

export async function deleteAdminPost(id: string): Promise<void> {
  const posts = await getAdminPostsUncached();
  const filtered = posts.filter((p) => p.id !== id);
  await writeVersionedBlob(POSTS_KEY, filtered);
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
  await writeVersionedBlob(POSTS_KEY, posts);
  return posts[index];
}
