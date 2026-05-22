import { notFound } from 'next/navigation';
import AdminNav from '@/components/admin/AdminNav';
import EventForm from '@/components/admin/EventForm';
import { getAdminEventById } from '@/lib/blob-store';

export const dynamic = 'force-dynamic';

export default async function DuplicateEventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = await getAdminEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <>
      <AdminNav />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Duplicate Event</h1>
        <EventForm mode="create" initialData={event} isDuplicate />
      </div>
    </>
  );
}
