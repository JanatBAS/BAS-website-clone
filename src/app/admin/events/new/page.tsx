import AdminNav from '@/components/admin/AdminNav';
import EventForm from '@/components/admin/EventForm';

export default function NewEventPage() {
  return (
    <>
      <AdminNav />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">New Event</h1>
        <EventForm mode="create" />
      </div>
    </>
  );
}
