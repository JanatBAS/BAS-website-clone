'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminNav from '@/components/admin/AdminNav';
import type { AdminBlogPost } from '@/types/admin';

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<AdminBlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const res = await fetch('/api/admin/posts');
    const data = await res.json();
    setPosts(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this post?')) return;
    await fetch(`/api/admin/posts?id=${id}`, { method: 'DELETE' });
    fetchPosts();
  };

  return (
    <>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Blog Posts</h1>
          <Link
            href="/admin/posts/new"
            className="px-4 py-2 bg-[#2a9d8f] hover:bg-[#238b7f] text-white text-sm font-medium rounded-lg transition-colors"
          >
            New Post
          </Link>
        </div>

        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-gray-400">No admin blog posts yet.</p>
        ) : (
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
                      <Link href={`/blog/${post.slug}`} className="hover:text-[#2a9d8f]" target="_blank">
                        {post.title}
                      </Link>
                    </td>
                    <td className="py-3 pr-4 text-gray-400">{post.author}</td>
                    <td className="py-3 pr-4 text-gray-400">{post.date}</td>
                    <td className="py-3 text-right">
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
        )}
      </div>
    </>
  );
}
