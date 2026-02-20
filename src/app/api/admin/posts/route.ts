import { NextResponse } from 'next/server';
import { getAdminPosts, addAdminPost, deleteAdminPost } from '@/lib/blob-store';
import type { AdminBlogPost, AdminBlogPostFormData } from '@/types/admin';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const posts = await getAdminPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function POST(request: Request) {
  try {
    const data: AdminBlogPostFormData = await request.json();

    if (!data.title || !data.author || !data.date || !data.excerpt || !data.htmlContent) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const id = `admin-post-${Date.now().toString(36)}`;
    const now = new Date().toISOString();

    // Parse the display date into a timestamp
    const timestamp = new Date(data.date).getTime() || Date.now();

    const post: AdminBlogPost = {
      id,
      slug: slugify(data.title),
      title: data.title,
      author: data.author,
      authorId: data.authorId || '672bdb3ae0672c1501f39ce8',
      date: data.date,
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
