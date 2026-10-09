'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { AdminEvent } from '@/types/admin';

function formatAdminDateRange(event: AdminEvent): string {
  if (event.endDateISO && event.endDateISO !== event.dateISO) {
    return `${event.dateISO} → ${event.endDateISO}`;
  }
  return event.dateISO;
}

export default function AdminEventsList({ events }: { events: AdminEvent[] }) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this event?')) return;
    const res = await fetch(`/api/admin/events?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data.error || 'Failed to delete event');
    }
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
            <th className="pb-2 pr-4">Dates</th>
            <th className="pb-2 pr-4">Category</th>
            <th className="pb-2"></th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="border-b border-gray-800/50">
              <td className="py-3 pr-4">{event.title}</td>
              <td className="py-3 pr-4 text-gray-400">
                {formatAdminDateRange(event)}
                {event.recurrence && (
                  <span className="ml-2 text-xs text-brand-teal">
                    (repeats {event.recurrence.frequency === 'biweekly' ? 'biweekly' : event.recurrence.frequency})
                  </span>
                )}
              </td>
              <td className="py-3 pr-4 text-gray-400 capitalize">{event.category}</td>
              <td className="py-3 text-right whitespace-nowrap space-x-3">
                <Link
                  href={`/admin/events/${event.id}/edit`}
                  className="text-brand-teal hover:text-brand-teal-dark text-xs"
                >
                  Edit
                </Link>
                <Link
                  href={`/admin/events/${event.id}/duplicate`}
                  className="text-brand-teal hover:text-brand-teal-dark text-xs"
                >
                  Duplicate
                </Link>
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
