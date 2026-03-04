'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import AdminNav from '@/components/admin/AdminNav';
import PostForm from '@/components/admin/PostForm';
import type { AdminBlogPost } from '@/types/admin';

export default function EditPostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<AdminBlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/admin/posts/${id}`);
        if (res.status === 404) {
          setError('Post not found');
          return;
        }
        if (!res.ok) throw new Error('Failed to fetch post');
        const found: AdminBlogPost = await res.json();
        setPost(found);
      } catch {
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  return (
    <>
      <AdminNav />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Edit Blog Post</h1>
        {loading && <p className="text-gray-400">Loading...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {post && <PostForm mode="edit" initialData={post} />}
      </div>
    </>
  );
}
