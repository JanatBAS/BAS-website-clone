'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminNav from '@/components/admin/AdminNav';
import type { AdminEvent } from '@/types/admin';

export default function AdminEventsPage() {
  const [events, setEvents] = useState<AdminEvent[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    const res = await fetch('/api/admin/events');
    const data = await res.json();
    setEvents(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this event?')) return;
    await fetch(`/api/admin/events?id=${id}`, { method: 'DELETE' });
    fetchEvents();
  };

  return (
    <>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Events</h1>
          <Link
            href="/admin/events/new"
            className="px-4 py-2 bg-[#2a9d8f] hover:bg-[#238b7f] text-white text-sm font-medium rounded-lg transition-colors"
          >
            New Event
          </Link>
        </div>

        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : events.length === 0 ? (
          <p className="text-gray-400">No admin events yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800 text-left text-gray-400">
                  <th className="pb-2 pr-4">Title</th>
                  <th className="pb-2 pr-4">Date</th>
                  <th className="pb-2 pr-4">Category</th>
                  <th className="pb-2"></th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">{event.title}</td>
                    <td className="py-3 pr-4 text-gray-400">{event.dateISO}</td>
                    <td className="py-3 pr-4 text-gray-400 capitalize">{event.category}</td>
                    <td className="py-3 text-right">
                      <button
                        onClick={() => handleDelete(event.id)}
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
