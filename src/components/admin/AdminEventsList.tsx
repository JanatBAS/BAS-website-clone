'use client';

import { useRouter } from 'next/navigation';
import type { AdminEvent } from '@/types/admin';

export default function AdminEventsList({ events }: { events: AdminEvent[] }) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this event?')) return;
    await fetch(`/api/admin/events?id=${id}`, { method: 'DELETE' });
    router.refresh();
  };

  if (events.length === 0) {
    return <p className="text-gray-400">No admin events yet.</p>;
  }

  return (
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
              <td className="py-3 pr-4 text-gray-400">
                {event.dateISO}
                {event.recurrence && (
                  <span className="ml-2 text-xs text-[#2a9d8f]">
                    (repeats {event.recurrence.frequency === 'biweekly' ? 'biweekly' : event.recurrence.frequency})
                  </span>
                )}
              </td>
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
  );
}
