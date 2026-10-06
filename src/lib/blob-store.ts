import { unstable_cache, revalidateTag } from 'next/cache';
import { BlobPreconditionFailedError, put } from '@vercel/blob';
import type { AdminEvent, AdminBlogPost } from '@/types/admin';
import { readPublicBlobJson } from './blob-read';

/**
 * Admin-created events and posts, each stored as one JSON list in Vercel Blob.
 *
 * Blob operation budget (keep it this way):
 * - Public pages read through `unstable_cache` with no expiry, so a cache hit
 *   costs nothing. The admin API invalidates the tag after every save.
 * - A save is exactly one fresh read (a simple operation) plus one `put` (an
 *   advanced operation). A save that changes nothing performs no `put`.
 *
 * Only a missing blob (404) counts as an empty list. Any other read error is
 * thrown, so an empty list is never cached for public pages and never written
 * back over the real data.
 */

const EVENTS_KEY = 'admin/events.json';
const POSTS_KEY = 'admin/posts.json';

const EVENTS_TAG = 'admin-events';
const POSTS_TAG = 'admin-posts';

/** Thrown when another save changed the same list between our read and write. */
export class AdminDataConflictError extends Error {
  constructor() {
    super('The data was changed by another save. Reload and try again.');
    this.name = 'AdminDataConflictError';
  }
}

interface Dataset<T> {
  items: T[];
  /** ETag of the stored blob; undefined when the blob does not exist yet. */
  etag?: string;
}

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

function normalizeEvents(events: StoredAdminEvent[]): AdminEvent[] {
  return events.map((event) => ({
    ...event,
    category: normalizeEventCategory(event.category),
  }));
}

async function readDataset<T>(key: string): Promise<Dataset<T>> {
  // Null when the blob does not exist yet, or locally/in CI where no store is configured.
  const result = await readPublicBlobJson(key);
  if (!result) return { items: [] };
  if (!Array.isArray(result.data)) {
    throw new Error(`Blob ${key} does not contain a list`);
  }

  return { items: result.data as T[], etag: result.etag };
}

async function writeDataset<T>(key: string, items: T[], etag: string | undefined): Promise<void> {
  try {
    await put(key, JSON.stringify(items), {
      access: 'public',
      contentType: 'application/json',
      addRandomSuffix: false,
      cacheControlMaxAge: 60,
      // Overwrite only the exact version we read. When the blob did not exist,
      // refuse to overwrite one that appeared in the meantime.
      ...(etag ? { allowOverwrite: true, ifMatch: etag } : { allowOverwrite: false }),
    });
  } catch (error) {
    if (error instanceof BlobPreconditionFailedError) throw new AdminDataConflictError();
    if (!etag && error instanceof Error && /already exists/i.test(error.message)) {
      throw new AdminDataConflictError();
    }
    throw error;
  }
}

/**
 * Reads the current list, applies `change`, and writes the result back.
 * `change` returns null when nothing needs to be written.
 */
async function updateDataset<T, R>(
  key: string,
  change: (items: T[]) => { items: T[]; result: R } | null,
  normalize: (items: T[]) => T[] = (items) => items,
): Promise<R | null> {
  const dataset = await readDataset<T>(key);
  const outcome = change(normalize(dataset.items));
  if (!outcome) return null;

  await writeDataset(key, outcome.items, dataset.etag);
  return outcome.result;
}

// ---------------------------------------------------------------------------
// Events

const getAdminEventsCached = unstable_cache(
  async (): Promise<AdminEvent[]> => normalizeEvents((await readDataset<StoredAdminEvent>(EVENTS_KEY)).items),
  ['admin-events-dataset'],
  {
    tags: [EVENTS_TAG],
    revalidate: false,
  },
);

export async function getAdminEvents(): Promise<AdminEvent[]> {
  return getAdminEventsCached();
}

export async function getAdminEventById(id: string): Promise<AdminEvent | undefined> {
  const events = await getAdminEvents();
  return events.find((event) => event.id === id);
}

export function invalidateAdminEventsCache(): void {
  revalidateTag(EVENTS_TAG, { expire: 0 });
}

function updateEvents<R>(change: (events: AdminEvent[]) => { items: AdminEvent[]; result: R } | null) {
  return updateDataset<AdminEvent, R>(
    EVENTS_KEY,
    change,
    (items) => normalizeEvents(items as StoredAdminEvent[]),
  );
}

export async function addAdminEvent(event: AdminEvent): Promise<void> {
  await updateEvents((events) => ({ items: [...events, event], result: true }));
}

/** Returns false when no event has this id. */
export async function deleteAdminEvent(id: string): Promise<boolean> {
  const deleted = await updateEvents((events) => {
    if (!events.some((event) => event.id === id)) return null;
    return { items: events.filter((event) => event.id !== id), result: true };
  });
  return deleted ?? false;
}

/**
 * Replaces an event with `build(existing)`, using the freshly read version.
 * Returns null when no event has this id.
 */
export async function updateAdminEvent(
  id: string,
  build: (existing: AdminEvent) => AdminEvent,
): Promise<AdminEvent | null> {
  return updateEvents((events) => {
    const index = events.findIndex((event) => event.id === id);
    if (index === -1) return null;
    const updated = build(events[index]);
    const items = events.slice();
    items[index] = updated;
    return { items, result: updated };
  });
}

/**
 * Hides one occurrence of a recurring event. Returns false when the event does
 * not exist; an occurrence that is already hidden is not written again.
 */
export async function excludeEventOccurrence(id: string, date: string): Promise<boolean> {
  let found = false;
  await updateEvents((events) => {
    const index = events.findIndex((item) => item.id === id);
    if (index === -1) return null;
    found = true;
    if (events[index].excludedDates?.includes(date)) return null;
    const items = events.slice();
    items[index] = { ...events[index], excludedDates: [...(events[index].excludedDates ?? []), date] };
    return { items, result: true };
  });
  return found;
}

// ---------------------------------------------------------------------------
// Posts

const getAdminPostsCached = unstable_cache(
  async (): Promise<AdminBlogPost[]> => (await readDataset<AdminBlogPost>(POSTS_KEY)).items,
  ['admin-posts-dataset'],
  {
    tags: [POSTS_TAG],
    revalidate: false,
  },
);

export async function getAdminPosts(): Promise<AdminBlogPost[]> {
  return getAdminPostsCached();
}

export async function getAdminPostBySlug(slug: string): Promise<AdminBlogPost | undefined> {
  const posts = await getAdminPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getAdminPostById(id: string): Promise<AdminBlogPost | undefined> {
  const posts = await getAdminPosts();
  return posts.find((post) => post.id === id);
}

export function invalidateAdminPostsCache(): void {
  revalidateTag(POSTS_TAG, { expire: 0 });
}

export async function addAdminPost(post: AdminBlogPost): Promise<void> {
  await updateDataset<AdminBlogPost, true>(POSTS_KEY, (posts) => ({ items: [...posts, post], result: true }));
}

/** Returns the deleted post, or null when no post has this id. */
export async function deleteAdminPost(id: string): Promise<AdminBlogPost | null> {
  return updateDataset<AdminBlogPost, AdminBlogPost>(POSTS_KEY, (posts) => {
    const existing = posts.find((post) => post.id === id);
    if (!existing) return null;
    return { items: posts.filter((post) => post.id !== id), result: existing };
  });
}

/**
 * Replaces a post with `build(existing)`, using the freshly read version.
 * Returns null when no post has this id.
 */
export async function updateAdminPost(
  id: string,
  build: (existing: AdminBlogPost) => AdminBlogPost,
): Promise<AdminBlogPost | null> {
  return updateDataset<AdminBlogPost, AdminBlogPost>(POSTS_KEY, (posts) => {
    const index = posts.findIndex((post) => post.id === id);
    if (index === -1) return null;
    const updated = build(posts[index]);
    const items = posts.slice();
    items[index] = updated;
    return { items, result: updated };
  });
}
