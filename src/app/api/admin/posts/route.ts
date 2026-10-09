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
  missingId,
  optionalString,
  optionalUrl,
  requiredString,
  saveFailed,
} from '@/lib/admin-input';
import type { AdminBlogPost, AdminBlogPostFormData } from '@/types/admin';
import { isValidDateISO } from '@/lib/event-dates';
import { slugify } from '@/lib/utils';
import { sanitizePostHtml } from '@/lib/sanitize-html';

export const dynamic = 'force-dynamic';

const DEFAULT_AUTHOR_ID = '672bdb3ae0672c1501f39ce8';
const MAX_TITLE_LENGTH = 300;
const MAX_AUTHOR_LENGTH = 200;
const MAX_EXCERPT_LENGTH = 2000;
const MAX_HTML_LENGTH = 500_000;
const MAX_TAGS = 30;
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

function validateTags(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const tags = value
    .filter((tag): tag is string => typeof tag === 'string')
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, MAX_TAGS);
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
  const title = requiredString(data.title, MAX_TITLE_LENGTH);
  const author = requiredString(data.author, MAX_AUTHOR_LENGTH);
  const excerpt = requiredString(data.excerpt, MAX_EXCERPT_LENGTH);
  const dateISO = typeof data.date === 'string' ? data.date.trim() : '';
  const rawHtml = typeof data.htmlContent === 'string' ? data.htmlContent : '';

  if (!title || !author || !dateISO || !excerpt || !rawHtml.trim()) {
    return { error: 'Missing required fields' };
  }
  if (rawHtml.length > MAX_HTML_LENGTH) {
    return { error: 'Post content is too long.' };
  }

  // YYYY-MM-DD from a date input; impossible dates such as Feb 31 are rejected.
  if (!isValidDateISO(dateISO)) {
    return { error: 'Invalid date format. Use YYYY-MM-DD.' };
  }

  const authorId = optionalString(data.authorId, 64);
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
    const data: AdminBlogPostFormData = await request.json();
    const validation = validatePostData(data);

    if (!validation.fields) return invalidInput(validation.error || 'Invalid post data');

    const { fields } = validation;
    const uniqueSuffix = Date.now().toString(36);
    const now = new Date().toISOString();

    const post: AdminBlogPost = {
      id: `admin-post-${uniqueSuffix}`,
      slug: `${slugify(fields.title)}-${uniqueSuffix}`,
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

    const data: AdminBlogPostFormData = await request.json();
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

    revalidatePostPages([updated.slug]);
    return NextResponse.json(updated);
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
