import { put, list, del } from '@vercel/blob';
import type { AdminEvent, AdminBlogPost } from '@/types/admin';

const EVENTS_KEY = 'admin/events.json';
const POSTS_KEY = 'admin/posts.json';

async function readBlob<T>(key: string): Promise<T | null> {
  try {
    // Strip extension for prefix search: addRandomSuffix inserts suffix before
    // the extension, so "admin/events.json" becomes "admin/events-{suffix}.json"
    // and won't match a prefix of "admin/events.json"
    const prefix = key.replace(/\.[^.]+$/, '');
    const { blobs } = await list({ prefix });
    if (blobs.length === 0) return null;
    // Pick the most recently uploaded blob
    const latest = blobs.sort(
      (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
    )[0];
    const res = await fetch(latest.url, { cache: 'no-store' });
    return res.json();
  } catch {
    return null;
  }
}

async function writeBlob<T>(key: string, data: T): Promise<void> {
  // Write new data FIRST (with random suffix to avoid conflicts)
  const newBlob = await put(key, JSON.stringify(data), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: true,
  });
  // Then clean up old blobs (safe: new data is already persisted)
  try {
    const prefix = key.replace(/\.[^.]+$/, '');
    const { blobs } = await list({ prefix });
    for (const blob of blobs) {
      if (blob.url !== newBlob.url) {
        await del(blob.url);
      }
    }
  } catch {
    // Cleanup failure is non-critical — data is safe
  }
}

// --- Events ---

export async function getAdminEvents(): Promise<AdminEvent[]> {
  return (await readBlob<AdminEvent[]>(EVENTS_KEY)) || [];
}

export async function addAdminEvent(event: AdminEvent): Promise<void> {
  const events = await getAdminEvents();
  events.push(event);
  await writeBlob(EVENTS_KEY, events);
}

export async function deleteAdminEvent(id: string): Promise<void> {
  const events = await getAdminEvents();
  const filtered = events.filter((e) => e.id !== id);
  await writeBlob(EVENTS_KEY, filtered);
}

// --- Blog Posts ---

export async function getAdminPosts(): Promise<AdminBlogPost[]> {
  return (await readBlob<AdminBlogPost[]>(POSTS_KEY)) || [];
}

export async function addAdminPost(post: AdminBlogPost): Promise<void> {
  const posts = await getAdminPosts();
  posts.push(post);
  await writeBlob(POSTS_KEY, posts);
}

export async function deleteAdminPost(id: string): Promise<void> {
  const posts = await getAdminPosts();
  const filtered = posts.filter((p) => p.id !== id);
  await writeBlob(POSTS_KEY, filtered);
}

export async function getAdminPostBySlug(slug: string): Promise<AdminBlogPost | undefined> {
  const posts = await getAdminPosts();
  return posts.find((p) => p.slug === slug);
}
