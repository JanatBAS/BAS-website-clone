'use client';

import Link from 'next/link';
import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import type { AdminBlogPost } from '@/types/admin';
import { apiErrorMessage } from './api-error';

export default function AdminPostsList({ posts }: { posts: AdminBlogPost[] }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  // True until the refreshed list has rendered, so a deleted row cannot be deleted again.
  const [refreshing, startRefresh] = useTransition();

  const handleDelete = async (id: string, title: string) => {
    if (deletingId || refreshing || !confirm(`Delete the post "${title}"?`)) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/posts?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
      if (res.status === 401) {
        router.push('/admin/login?redirect=/admin/posts');
        return;
      }
      if (!res.ok) {
        alert(await apiErrorMessage(res, 'Failed to delete post'));
      }
      startRefresh(() => router.refresh());
    } catch {
      alert('Failed to delete post');
    } finally {
      setDeletingId(null);
    }
  };

  if (posts.length === 0) {
    return <p className="text-gray-400">No admin blog posts yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-800 text-left text-gray-400">
            <th className="pb-2 pr-4">Title</th>
            <th className="pb-2 pr-4">Author</th>
            <th className="pb-2 pr-4">Date</th>
            <th className="pb-2"></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b border-gray-800/50">
              <td className="py-3 pr-4">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand-teal" target="_blank">
                  {post.title}
                </Link>
              </td>
              <td className="py-3 pr-4 text-gray-400">{post.author}</td>
              <td className="py-3 pr-4 text-gray-400">{post.date}</td>
              <td className="py-3 text-right space-x-3">
                <Link
                  href={`/admin/posts/${post.id}/edit`}
                  className="text-brand-teal hover:text-brand-teal-dark text-xs"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  onClick={() => handleDelete(post.id, post.title)}
                  disabled={deletingId !== null || refreshing}
                  className="text-red-400 hover:text-red-300 disabled:opacity-50 text-xs"
                >
                  {deletingId === post.id ? 'Deleting...' : 'Delete'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
