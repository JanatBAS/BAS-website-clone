"use client";

import Link from 'next/link';
import Image from 'next/image';
import { UnifiedEvent, CATEGORY_COLORS, CATEGORY_LABELS } from '@/types/calendar';

interface CalendarListViewProps {
  events: UnifiedEvent[];
  onEventClick: (event: UnifiedEvent) => void;
}

export function CalendarListView({ events, onEventClick }: CalendarListViewProps) {
  // Group events by status (upcoming first, then past)
  const upcomingEvents = events.filter(e => e.status === 'upcoming');
  const pastEvents = events.filter(e => e.status === 'past');

  const EventCard = ({ event }: { event: UnifiedEvent }) => {
    const isPast = event.status === 'past';

    return (
      <article
        className={`
          flex flex-col sm:flex-row gap-4 p-4 rounded-lg border transition-all duration-200
          hover:shadow-md hover:border-gray-300 cursor-pointer
          ${isPast ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200'}
        `}
        onClick={() => onEventClick(event)}
      >
        {/* Date badge */}
        <div className="flex-shrink-0 flex sm:flex-col items-center sm:items-start gap-2 sm:gap-0 sm:w-20">
          <div
            className="text-center sm:text-left"
            style={{ color: isPast ? '#9ca3af' : CATEGORY_COLORS[event.category] }}
          >
            <div className="text-xs uppercase tracking-wider font-medium">
              {event.monthShort}
            </div>
            <div className="text-2xl sm:text-3xl font-light">
              {event.dayOfMonth}
            </div>
          </div>
          <div className="text-xs text-gray-500 sm:mt-1">
            {event.startTimeDisplay}
          </div>
        </div>

        {/* Event image (mobile: hidden, desktop: shown) */}
        {event.imageUrl && (
          <div className="hidden md:block flex-shrink-0 w-24 h-24 relative rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Event details */}
        <div className="flex-1 min-w-0">
          {/* Category badge */}
          <div className="flex items-center gap-2 mb-1">
            <span
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
              style={{
                backgroundColor: `${CATEGORY_COLORS[event.category]}20`,
                color: CATEGORY_COLORS[event.category],
              }}
            >
              {CATEGORY_LABELS[event.category]}
            </span>
            {isPast && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-600">
                Past Event
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {event.title}
          </h3>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-500">
            <span>
              {event.dayOfWeek}, {event.dayOfMonth} {event.monthLong} {event.year}
            </span>
            {event.location && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {event.shortDescription}
          </p>
        </div>

        {/* Action arrow */}
        <div className="hidden sm:flex items-center flex-shrink-0">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </article>
    );
  };

  return (
    <div className="calendar-view-transition space-y-8">
      {/* Upcoming events */}
      {upcomingEvents.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Upcoming Events
          </h3>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}

      {/* Past events */}
      {pastEvents.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            Past Events
          </h3>
          <div className="space-y-3">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {events.length === 0 && (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No events found</h3>
          <p className="mt-2 text-sm text-gray-500">
            Try adjusting your filters or check back later for new events.
          </p>
        </div>
      )}
    </div>
  );
}
