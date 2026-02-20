import Link from 'next/link';
import AdminNav from '@/components/admin/AdminNav';
import AdminEventsList from '@/components/admin/AdminEventsList';
import { getAdminEvents } from '@/lib/blob-store';

export const dynamic = 'force-dynamic';

export default async function AdminEventsPage() {
  const events = await getAdminEvents();

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
        <AdminEventsList events={events} />
      </div>
    </>
  );
}
