import { Metadata } from 'next';
import Header from '@/components/Header';
import FooterSimple from '@/components/FooterSimple';
import { Calendar } from '@/components/calendar';
import { allEvents } from '@/data/events';
import { getAllEventsWithAdmin } from '@/lib/merge-data';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Events Calendar | Bitcoin Association Switzerland',
  description: 'View all Bitcoin Association Switzerland events, meetups, and conferences in our interactive calendar.',
};

export default async function CalendarPage() {
  const events = await getAllEventsWithAdmin(allEvents);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Events Calendar
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Stay up to date with all Bitcoin Association Switzerland events, meetups, and conferences.
          </p>
        </div>
      </div>

      {/* Calendar section */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Calendar events={events} />
        </div>
      </main>

      <FooterSimple />
    </div>
  );
}
