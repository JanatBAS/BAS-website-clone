import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import IcsLink from "@/components/events/IcsLink";
import { formatEventDate, formatEventDay } from "@/components/events/event-format";
import { formatTimeDisplay } from "@/lib/date-utils";
import {
  getAdjacentEvents,
  getGoogleCalendarUrl,
  getPageTitle,
  type EventRecord,
} from "@/data/events";

export const EVENT_TAGLINE =
  "A bright new dawn for digital transfers, sound money and personal freedom.";

const linkClass = "text-brand hover:underline";

interface EventDetailLayoutProps {
  event: EventRecord;
  /** The page's own description of the event. */
  children: ReactNode;
  /** Banner with the site tagline above the page. */
  tagline?: string;
  /** "← …" link above the event. */
  backLink?: { href: string; label: string };
  /** 24-hour range with a hyphen (default) or an en dash, or 12-hour times on wider screens. */
  timeStyle?: "hyphen" | "en-dash" | "responsive";
  /** Character between the two calendar links. */
  linkSeparator?: "|" | "-";
  /** Link to the sign-up page ("Registration") instead of the ICS download. */
  registrationLink?: boolean;
  share?: boolean;
}

function EventTime({ event, timeStyle }: { event: EventRecord; timeStyle: EventDetailLayoutProps["timeStyle"] }) {
  const { startTime, endTime } = event;
  if (event.page?.time) return <>{event.page.time}</>;
  if (!endTime) return <>From {startTime}</>;
  if (timeStyle === "responsive") {
    return (
      <>
        <span className="hidden sm:inline">
          {formatTimeDisplay(startTime)} - {formatTimeDisplay(endTime)}
        </span>
        <span className="sm:hidden">
          {startTime} - {endTime}
        </span>
      </>
    );
  }
  return <>{`${startTime}${timeStyle === "en-dash" ? " – " : " - "}${endTime}`}</>;
}

function AdjacentEvent({ label, event }: { label: string; event: EventRecord }) {
  return (
    <>
      <div className="text-gray-500 mb-1">
        {label}: {formatEventDay(event.dateISO)}
      </div>
      <Link href={event.href} className={linkClass}>
        {getPageTitle(event)}
      </Link>
    </>
  );
}

export default function EventDetailLayout({
  event,
  children,
  tagline,
  backLink,
  timeStyle = "hyphen",
  linkSeparator = "|",
  registrationLink = false,
  share = false,
}: EventDetailLayoutProps) {
  const title = getPageTitle(event);
  const location = event.page?.location ?? event.location;
  const locationUrl =
    event.page?.locationUrl === null ? undefined : (event.page?.locationUrl ?? event.locationUrl);
  const googleCalendarUrl = getGoogleCalendarUrl(event);
  const { earlier, later } = getAdjacentEvents(event);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {tagline && (
        <section className="relative w-full h-[200px] mt-20 bg-ink">
          {event.imageUrl && (
            <Image
              src={event.imageUrl}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-30"
              priority
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-xs md:text-sm uppercase tracking-[0.25em] text-center px-4 font-light">
              {tagline}
            </p>
          </div>
        </section>
      )}

      <main className={tagline ? "flex-1" : "flex-1 pt-20"}>
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {backLink && (
            <Link
              href={backLink.href}
              className="inline-block text-[13px] text-gray-500 hover:text-brand mb-8 transition-colors"
            >
              &larr; {backLink.label}
            </Link>
          )}

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12">
            {/* Image, title, date, location and calendar links */}
            <div>
              {event.imageUrl && (
                <Image
                  src={event.imageUrl}
                  alt={title}
                  width={0}
                  height={0}
                  sizes="(min-width: 768px) 280px, 100vw"
                  className="w-full h-auto mb-6"
                />
              )}

              <h1 className="text-2xl font-light text-gray-900 mb-6 leading-tight">{title}</h1>

              <ul className="text-[13px] text-gray-500 space-y-1 mb-4">
                <li>{formatEventDate(event.dateISO)}</li>
                <li>
                  <EventTime event={event} timeStyle={timeStyle} />
                </li>
                {event.venue && <li>{event.venue}</li>}
                {location && (
                  <li>
                    {location}
                    {locationUrl && (
                      <>
                        {" "}
                        <a href={locationUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          (map)
                        </a>
                      </>
                    )}
                  </li>
                )}
              </ul>

              <div className="text-[13px] flex flex-wrap items-center gap-2">
                <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Google Calendar
                </a>
                <span className="text-gray-300">{linkSeparator}</span>
                {registrationLink && event.signupLink ? (
                  <a href={event.signupLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Registration
                  </a>
                ) : (
                  <IcsLink event={event} className={linkClass} />
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <div className="text-[15px] text-gray-700 leading-relaxed space-y-4">{children}</div>

              {share && (
                <div className="flex items-center gap-4 mt-8 text-xs text-gray-400">
                  <ShareButton title={title} />
                </div>
              )}
            </div>
          </div>

          {(earlier || later) && (
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 pt-8 border-t border-gray-200 text-[13px]">
              <div>{earlier && <AdjacentEvent label="Earlier Event" event={earlier} />}</div>
              <div className="md:text-right">
                {later && <AdjacentEvent label="Later Event" event={later} />}
              </div>
            </nav>
          )}
        </div>
      </main>
    </div>
  );
}
