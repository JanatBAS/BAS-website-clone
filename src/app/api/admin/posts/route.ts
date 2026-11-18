import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import {
  addAdminPost,
  deleteAdminPost,
  updateAdminPost,
  invalidateAdminPostsCache,
} from '@/lib/blob-store';
import {
  idParam,
  invalidInput,
  isAdminDateISO,
  lengthError,
  missingId,
  optionalString,
  optionalUrl,
  readJsonObject,
  recordSlug,
  requiredString,
  saveFailed,
} from '@/lib/admin-input';
import type { AdminBlogPost, AdminBlogPostFormData } from '@/types/admin';
import { sanitizePostHtml } from '@/lib/sanitize-html';

export const dynamic = 'force-dynamic';

const DEFAULT_AUTHOR_ID = '672bdb3ae0672c1501f39ce8';
const MAX_TITLE_LENGTH = 300;
const MAX_AUTHOR_LENGTH = 200;
const MAX_EXCERPT_LENGTH = 2000;
const MAX_HTML_LENGTH = 500_000;
const MAX_TAGS = 30;
const MAX_TAG_LENGTH = 100;
const AUTHOR_ID_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;

interface ValidatedPostFields {
  title: string;
  author: string;
  authorId?: string;
  dateISO: string;
  timestamp: number;
  excerpt: string;
  htmlContent: string;
  category?: string;
  tags?: string[];
  imageUrl?: string;
}

/** Trimmed, shortened tags without repeats (ignoring case), in their original order. */
function validateTags(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const seen = new Set<string>();
  const tags: string[] = [];
  for (const tag of value) {
    const text = requiredString(tag)?.slice(0, MAX_TAG_LENGTH).trim();
    if (!text || seen.has(text.toLowerCase())) continue;
    seen.add(text.toLowerCase());
    tags.push(text);
    if (tags.length === MAX_TAGS) break;
  }
  return tags.length > 0 ? tags : undefined;
}

function formatDisplayDate(dateISO: string): string {
  const date = new Date(dateISO + 'T12:00:00');
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function validatePostData(data: AdminBlogPostFormData): { fields?: ValidatedPostFields; error?: string } {
  const title = requiredString(data.title);
  const author = requiredString(data.author);
  const excerpt = requiredString(data.excerpt);
  const dateISO = typeof data.date === 'string' ? data.date.trim() : '';
  const rawHtml = typeof data.htmlContent === 'string' ? data.htmlContent : '';

  if (!title || !author || !dateISO || !excerpt || !rawHtml.trim()) {
    return { error: 'Missing required fields' };
  }
  const tooLong =
    lengthError('Title', title, MAX_TITLE_LENGTH) ||
    lengthError('Author', author, MAX_AUTHOR_LENGTH) ||
    lengthError('Excerpt', excerpt, MAX_EXCERPT_LENGTH);
  if (tooLong) return { error: tooLong };
  if (rawHtml.length > MAX_HTML_LENGTH) {
    return { error: 'Post content is too long.' };
  }

  // YYYY-MM-DD from a date input; impossible dates such as Feb 31 are rejected.
  if (!isAdminDateISO(dateISO)) {
    return { error: 'Invalid date. Use YYYY-MM-DD between 2000 and 2100.' };
  }

  // The pattern also limits the length, so a longer id is refused rather than cut.
  const authorId = optionalString(data.authorId);
  if (authorId && !AUTHOR_ID_PATTERN.test(authorId)) {
    return { error: 'Invalid author id.' };
  }

  const imageUrl = optionalUrl(data.imageUrl, 'Image URL');
  if (imageUrl.error) return { error: imageUrl.error };

  const htmlContent = sanitizePostHtml(rawHtml);
  if (!htmlContent.trim()) {
    return { error: 'Post content is empty after removing unsupported HTML.' };
  }

  return {
    fields: {
      title,
      author,
      authorId,
      dateISO,
      timestamp: new Date(dateISO + 'T12:00:00').getTime(),
      excerpt,
      htmlContent,
      category: optionalString(data.category, 100),
      tags: validateTags(data.tags),
      imageUrl: imageUrl.url,
    },
  };
}

/** Expires every page that lists or shows admin posts. */
function revalidatePostPages(slugs: string[]): void {
  invalidateAdminPostsCache();
  revalidatePath('/bitcoin-association-switzerland');
  // A route pattern (unlike a URL) includes the route group folder.
  revalidatePath('/(simple-footer)/bitcoin-association-switzerland/author/[authorId]', 'page');
  for (const slug of slugs) {
    revalidatePath(`/blog/${slug}`);
  }
}

export async function POST(request: Request) {
  try {
    const data = await readJsonObject<AdminBlogPostFormData>(request);
    if (!data) return invalidInput('Invalid request body');
    const validation = validatePostData(data);

    if (!validation.fields) return invalidInput(validation.error || 'Invalid post data');

    const { fields } = validation;
    const uniqueSuffix = Date.now().toString(36);
    const now = new Date().toISOString();

    const post: AdminBlogPost = {
      id: `admin-post-${uniqueSuffix}`,
      slug: recordSlug(fields.title, 'post', uniqueSuffix),
      title: fields.title,
      author: fields.author,
      authorId: fields.authorId || DEFAULT_AUTHOR_ID,
      date: formatDisplayDate(fields.dateISO),
      timestamp: fields.timestamp,
      excerpt: fields.excerpt,
      htmlContent: fields.htmlContent,
      category: fields.category,
      tags: fields.tags,
      imageUrl: fields.imageUrl,
      createdAt: now,
      updatedAt: now,
    };

    await addAdminPost(post);
    revalidatePostPages([post.slug]);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return saveFailed(error, 'Failed to create post');
  }
}

export async function PUT(request: Request) {
  try {
    const id = idParam(request);
    if (!id) return missingId();

    const data = await readJsonObject<AdminBlogPostFormData>(request);
    if (!data) return invalidInput('Invalid request body');
    const validation = validatePostData(data);

    if (!validation.fields) return invalidInput(validation.error || 'Invalid post data');

    const { fields } = validation;
    const updated = await updateAdminPost(id, (existing) => ({
      ...existing,
      title: fields.title,
      author: fields.author,
      authorId: fields.authorId || existing.authorId,
      date: formatDisplayDate(fields.dateISO),
      timestamp: fields.timestamp,
      excerpt: fields.excerpt,
      htmlContent: fields.htmlContent,
      category: fields.category,
      tags: fields.tags,
      imageUrl: fields.imageUrl,
      updatedAt: new Date().toISOString(),
    }));

    if (!updated) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Also after an edit that wrote nothing: saving again then repairs pages
    // left stale by an interrupted save (at most one cached read).
    revalidatePostPages([updated.item.slug]);
    return NextResponse.json(updated.item);
  } catch (error) {
    return saveFailed(error, 'Failed to update post');
  }
}

export async function DELETE(request: Request) {
  try {
    const id = idParam(request);
    if (!id) return missingId();
    const deleted = await deleteAdminPost(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    revalidatePostPages([deleted.slug]);
    return NextResponse.json({ success: true });
  } catch (error) {
    return saveFailed(error, 'Failed to delete post');
  }
}
