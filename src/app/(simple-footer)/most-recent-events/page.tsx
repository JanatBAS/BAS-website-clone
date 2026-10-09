import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import IcsLink from "@/components/events/IcsLink";
import { formatEventDate, getEventBadge } from "@/components/events/event-format";
import { formatTimeDisplay } from "@/lib/date-utils";
import { getGoogleCalendarUrl, getSeriesEvents, type EventRecord } from "@/data/events";

export const metadata: Metadata = {
  title: "Most Recent Events",
  description:
    "Past Bitcoin Association Switzerland events, from our regular meetups in Zurich and Geneva to talks with Elizabeth Stark, Andreas M. Antonopoulos and Paul Sztorc.",
};

const events = getSeriesEvents("most-recent-events");

function EventCard({ event }: { event: EventRecord }) {
  const badge = getEventBadge(event);
  const startTime = formatTimeDisplay(event.startTime);
  const endTime = event.endTime && formatTimeDisplay(event.endTime);

  return (
    <article className="flex flex-col md:flex-row gap-0 py-10 border-b border-gray-200 last:border-b-0">
      {/* Thumbnail Image */}
      {event.imageUrl && (
        <Link
          href={event.href}
          className="flex-shrink-0 w-full md:w-[200px] h-[150px] relative overflow-hidden bg-gray-100"
        >
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
          />
        </Link>
      )}

      {/* Date Badge */}
      <Link
        href={event.href}
        className="hidden md:flex flex-col items-center justify-start flex-shrink-0 w-[80px] pt-1"
      >
        <div className="text-center">
          <div className="text-brand text-[11px] uppercase tracking-wider font-normal">
            {badge.month}
          </div>
          <div className="text-brand text-[32px] font-light leading-tight">{badge.day}</div>
          <div className="text-gray-500 text-[11px] mt-0.5">{startTime}</div>
        </div>
      </Link>

      {/* Event Info */}
      <div className="flex-1 pt-0 md:pt-0 mt-4 md:mt-0">
        {/* Title */}
        <h1 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
          <Link
            href={event.href}
            className="hover:text-brand transition-colors"
          >
            {event.title}
          </Link>
        </h1>

        {/* Meta Info */}
        <ul className="text-[13px] text-gray-500 space-y-0.5 mb-3">
          <li>{formatEventDate(event.dateISO)}</li>
          <li>
            {startTime}
            {endTime && ` - ${endTime}`}
          </li>
          {event.location && (
            <li>
              {event.locationUrl ? (
                <>
                  {event.location}{" "}
                  <a
                    href={event.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline"
                  >
                    (map)
                  </a>
                </>
              ) : (
                event.location
              )}
            </li>
          )}
          <li className="flex items-center gap-1">
            <a
              href={getGoogleCalendarUrl(event)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Google Calendar
            </a>
            <span className="text-gray-300 mx-1">|</span>
            <IcsLink event={event} className="text-brand hover:underline" />
          </li>
        </ul>

        {/* Description */}
        <div className="text-[13px] text-gray-600 mb-3 whitespace-pre-line line-clamp-4 leading-relaxed">
          {event.description}
        </div>

        {/* View Event Button */}
        <Link
          href={event.href}
          className="inline-block text-[13px] text-brand border border-brand px-4 py-2 hover:bg-brand hover:text-white transition-colors mb-4"
        >
          View Event &rarr;
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-4 text-[13px] text-gray-500">
          <button className="flex items-center gap-1.5 hover:text-gray-700 transition-colors">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
            </svg>
            Share
          </button>
        </div>
      </div>
    </article>
  );
}

export default function MostRecentEventsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 pt-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Separator line at top - dark gray line like original */}
          <Separator className="bg-gray-300 mb-0" />

          {/* Events List */}
          <div>
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
