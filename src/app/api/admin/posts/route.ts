import { NextResponse } from 'next/server';
import { getAdminPosts, addAdminPost, deleteAdminPost, updateAdminPost, getAdminPostById } from '@/lib/blob-store';
import type { AdminBlogPost, AdminBlogPostFormData } from '@/types/admin';
import { slugify } from '@/lib/utils';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const posts = await getAdminPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

function formatDisplayDate(dateISO: string): string {
  const date = new Date(dateISO + 'T12:00:00');
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export async function POST(request: Request) {
  try {
    const data: AdminBlogPostFormData = await request.json();

    if (!data.title || !data.author || !data.date || !data.excerpt || !data.htmlContent) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // date field is now YYYY-MM-DD from a date input
    const dateISO = data.date;
    const parsedDate = new Date(dateISO + 'T12:00:00');

    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json({ error: 'Invalid date format. Use YYYY-MM-DD.' }, { status: 400 });
    }

    // Strict validation: reject impossible dates like Feb 31 (Node normalizes them silently)
    const [year, month, day] = dateISO.split('-').map(Number);
    if (parsedDate.getFullYear() !== year || parsedDate.getMonth() + 1 !== month || parsedDate.getDate() !== day) {
      return NextResponse.json({ error: 'Invalid calendar date.' }, { status: 400 });
    }

    const displayDate = formatDisplayDate(dateISO);
    const timestamp = parsedDate.getTime();

    const uniqueSuffix = Date.now().toString(36);
    const id = `admin-post-${uniqueSuffix}`;
    const slug = `${slugify(data.title)}-${uniqueSuffix}`;
    const now = new Date().toISOString();

    const post: AdminBlogPost = {
      id,
      slug,
      title: data.title,
      author: data.author,
      authorId: data.authorId || '672bdb3ae0672c1501f39ce8',
      date: displayDate,
      timestamp,
      excerpt: data.excerpt,
      htmlContent: data.htmlContent,
      category: data.category || undefined,
      tags: data.tags?.length ? data.tags : undefined,
      imageUrl: data.imageUrl || undefined,
      createdAt: now,
      updatedAt: now,
    };

    await addAdminPost(post);
    return NextResponse.json(post, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }

    const existing = await getAdminPostById(id);
    if (!existing) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const data: AdminBlogPostFormData = await request.json();

    if (!data.title || !data.author || !data.date || !data.excerpt || !data.htmlContent) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const dateISO = data.date;
    const parsedDate = new Date(dateISO + 'T12:00:00');

    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json({ error: 'Invalid date format. Use YYYY-MM-DD.' }, { status: 400 });
    }

    const [year, month, day] = dateISO.split('-').map(Number);
    if (parsedDate.getFullYear() !== year || parsedDate.getMonth() + 1 !== month || parsedDate.getDate() !== day) {
      return NextResponse.json({ error: 'Invalid calendar date.' }, { status: 400 });
    }

    const updated = await updateAdminPost(id, {
      title: data.title,
      author: data.author,
      authorId: data.authorId || existing.authorId,
      date: formatDisplayDate(dateISO),
      timestamp: parsedDate.getTime(),
      excerpt: data.excerpt,
      htmlContent: data.htmlContent,
      category: data.category || undefined,
      tags: data.tags?.length ? data.tags : undefined,
      imageUrl: data.imageUrl || undefined,
      updatedAt: new Date().toISOString(),
    });

    if (!updated) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }
    await deleteAdminPost(id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
