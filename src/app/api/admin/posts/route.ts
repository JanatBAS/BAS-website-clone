import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import {
  AdminDataConflictError,
  getAdminPosts,
  addAdminPost,
  deleteAdminPost,
  updateAdminPost,
  invalidateAdminPostsCache,
} from '@/lib/blob-store';
import type { AdminBlogPost, AdminBlogPostFormData } from '@/types/admin';
import { slugify } from '@/lib/utils';
import { sanitizePostHtml } from '@/lib/sanitize-html';
import { safeHttpUrl } from '@/lib/safe-url';

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

function requiredString(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

function optionalString(value: unknown, max: number): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.slice(0, max);
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

  // date field is YYYY-MM-DD from a date input
  const parsedDate = new Date(dateISO + 'T12:00:00');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateISO) || isNaN(parsedDate.getTime())) {
    return { error: 'Invalid date format. Use YYYY-MM-DD.' };
  }

  // Strict validation: reject impossible dates like Feb 31 (Node normalizes them silently)
  const [year, month, day] = dateISO.split('-').map(Number);
  if (parsedDate.getFullYear() !== year || parsedDate.getMonth() + 1 !== month || parsedDate.getDate() !== day) {
    return { error: 'Invalid calendar date.' };
  }

  const authorId = optionalString(data.authorId, 64);
  if (authorId && !AUTHOR_ID_PATTERN.test(authorId)) {
    return { error: 'Invalid author id.' };
  }

  const imageUrlInput = optionalString(data.imageUrl, 2048);
  const imageUrl = imageUrlInput ? safeHttpUrl(imageUrlInput) : undefined;
  if (imageUrlInput && !imageUrl) {
    return { error: 'Image URL must be an http(s) URL.' };
  }

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
      timestamp: parsedDate.getTime(),
      excerpt,
      htmlContent,
      category: optionalString(data.category, 100),
      tags: validateTags(data.tags),
      imageUrl,
    },
  };
}

/** Expires every page that lists or shows admin posts. */
function revalidatePostPages(slugs: string[]): void {
  invalidateAdminPostsCache();
  revalidatePath('/bitcoin-association-switzerland');
  revalidatePath('/bitcoin-association-switzerland/author/[authorId]', 'page');
  for (const slug of slugs) {
    revalidatePath(`/blog/${slug}`);
  }
}

function saveFailed(error: unknown, message: string): NextResponse {
  if (error instanceof AdminDataConflictError) {
    return NextResponse.json({ error: error.message }, { status: 409 });
  }
  return NextResponse.json({ error: message }, { status: 500 });
}

export async function GET() {
  try {
    const posts = await getAdminPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data: AdminBlogPostFormData = await request.json();
    const validation = validatePostData(data);

    if (!validation.fields) {
      return NextResponse.json({ error: validation.error || 'Invalid post data' }, { status: 400 });
    }

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
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }

    const data: AdminBlogPostFormData = await request.json();
    const validation = validatePostData(data);

    if (!validation.fields) {
      return NextResponse.json({ error: validation.error || 'Invalid post data' }, { status: 400 });
    }

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
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }
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
