import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ShareButton from "@/components/ShareButton";
import IcsLink from "@/components/events/IcsLink";
import { formatEventDate, getEventBadge } from "@/components/events/event-format";
import { formatTimeDisplay } from "@/lib/date-utils";
import { getGoogleCalendarUrl, getSeriesEvents, type EventRecord } from "@/data/events";

export const metadata: Metadata = {
  title: "Roadshow 2025",
  description:
    "The Bitcoin Association Switzerland's official Roadshow 2025, with stops in Bern, Lausanne, Lake Zurich and Basel.",
};

const roadshowEvents = getSeriesEvents("roadshow-2025");

function EventCard({ event }: { event: EventRecord }) {
  const badge = getEventBadge(event);
  const location = event.venue ?? event.location;
  const paragraphs = event.description.split("\n\n");

  return (
    <article className="flex gap-6 py-8">
      {/* Date Tag */}
      <Link href={event.href} className="flex-shrink-0">
        <div className="w-20 text-center">
          <div className="text-brand text-xs uppercase tracking-wider font-medium">
            {badge.month}
          </div>
          <div className="text-brand text-3xl font-light">{badge.day}</div>
          <div className="text-gray-400 text-xs mt-1">
            <span className="hidden sm:inline">{formatTimeDisplay(event.startTime)}</span>
            <span className="sm:hidden">{event.startTime}</span>
          </div>
        </div>
      </Link>

      {/* Event Info */}
      <div className="flex-1">
        {/* Title */}
        <h2 className="text-xl font-normal text-gray-900 mb-3">
          <Link
            href={event.href}
            className="hover:text-brand transition-colors"
          >
            {event.title}
          </Link>
        </h2>

        {/* Meta Info */}
        <ul className="text-xs text-gray-500 space-y-1 mb-4">
          <li>{formatEventDate(event.dateISO)}</li>
          {event.endTime && (
            <li>
              <span className="hidden sm:inline">
                {formatTimeDisplay(event.startTime)} - {formatTimeDisplay(event.endTime)}
              </span>
              <span className="sm:hidden">
                {event.startTime} - {event.endTime}
              </span>
            </li>
          )}
          {location && (
            <li>
              {location}{" "}
              {event.locationUrl && (
                <a
                  href={event.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  (map)
                </a>
              )}
            </li>
          )}
          {!location && event.locationUrl && (
            <li>
              Location:{" "}
              <a
                href={event.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                (map)
              </a>
            </li>
          )}
          <li className="flex gap-2 items-center">
            <a
              href={getGoogleCalendarUrl(event)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Google Calendar
            </a>
            <span className="text-gray-300">|</span>
            <IcsLink event={event} className="text-brand hover:underline" />
          </li>
        </ul>

        {/* Description */}
        <div className="text-sm text-gray-600 space-y-3 mb-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>
              {index === 0 ? <strong>{paragraph}</strong> : paragraph}
            </p>
          ))}
          {event.signupLink && (
            <p>
              <strong>{event.signupText}</strong>{" "}
              <a
                href={event.signupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline font-semibold"
              >
                here
              </a>
            </p>
          )}
          <p>
            <strong>Best regards,</strong>
            <br />
            The BAS Board
          </p>
        </div>

        {/* Roadshow Image */}
        {event.imageUrl && (
          <div className="my-6">
            <Image
              src={event.imageUrl}
              alt="BAS Roadshow 2025"
              width={905}
              height={1280}
              className="max-w-full h-auto"
            />
          </div>
        )}

        {/* View Event Button */}
        <Button
          asChild
          variant="outline"
          className="text-xs uppercase tracking-wider border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-800 rounded-none px-6"
        >
          <Link href={event.href}>View Event &rarr;</Link>
        </Button>

        {/* Actions Row */}
        <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
          <ShareButton title={event.title} />
        </div>
      </div>
    </article>
  );
}

export default function Roadshow2025Page() {
  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Past Events Divider */}
        <Separator className="mb-0" />

        {/* Events List */}
        <div className="divide-y divide-gray-200">
          {roadshowEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </main>
  );
}
