'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { AdminBlogPost } from '@/types/admin';

export default function AdminPostsList({ posts }: { posts: AdminBlogPost[] }) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this post?')) return;
    const res = await fetch(`/api/admin/posts?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data.error || 'Failed to delete post');
    }
    router.refresh();
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
                  onClick={() => handleDelete(post.id)}
                  className="text-red-400 hover:text-red-300 text-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
