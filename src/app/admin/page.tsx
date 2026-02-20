'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminNav from '@/components/admin/AdminNav';

export default function AdminDashboard() {
  const [eventCount, setEventCount] = useState<number | null>(null);
  const [postCount, setPostCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/admin/events').then(r => r.json()).then(data => setEventCount(Array.isArray(data) ? data.length : 0));
    fetch('/api/admin/posts').then(r => r.json()).then(data => setPostCount(Array.isArray(data) ? data.length : 0));
  }, []);

  return (
    <>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Admin Events</p>
            <p className="text-3xl font-bold mt-1">{eventCount ?? '...'}</p>
            <Link href="/admin/events" className="text-[#2a9d8f] text-sm mt-3 inline-block hover:underline">
              Manage events
            </Link>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Admin Blog Posts</p>
            <p className="text-3xl font-bold mt-1">{postCount ?? '...'}</p>
            <Link href="/admin/posts" className="text-[#2a9d8f] text-sm mt-3 inline-block hover:underline">
              Manage posts
            </Link>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            href="/admin/events/new"
            className="px-4 py-2 bg-[#2a9d8f] hover:bg-[#238b7f] text-white text-sm font-medium rounded-lg transition-colors"
          >
            New Event
          </Link>
          <Link
            href="/admin/posts/new"
            className="px-4 py-2 bg-[#2a9d8f] hover:bg-[#238b7f] text-white text-sm font-medium rounded-lg transition-colors"
          >
            New Blog Post
          </Link>
        </div>
      </div>
    </>
  );
}
