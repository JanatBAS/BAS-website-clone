import type { Metadata } from "next";
import EventDetailLayout, { EVENT_TAGLINE } from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("bitcoin-christmas-meetup-zurich");

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    "Douglas Bakkum, Co-founder and CEO of Shift Cryptosecurity, gave us some exciting insights into the industry's cat and mouse game of securing private keys.",
};

export default function BitcoinChristmasMeetupZurichPage() {
  return (
    <EventDetailLayout
      event={event}
      tagline={EVENT_TAGLINE}
      backLink={{ href: "/most-recent-events", label: "Back to All Events" }}
    >
      <p>
        Bitcoin Association Switzerland invited for a Christmas Special Bitcoin Meetup Zurich.
      </p>
      <p>
        Douglas Bakkum, Co-founder and CEO of Shift Cryptosecurity gave us some exciting insights into the industry&apos;s cat and mouse game of securing private keys
      </p>
      <p className="text-[13px] text-gray-500">
        Source:{" "}
        <a
          href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/266780356/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline break-all"
        >
          https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/266780356/
        </a>
      </p>
    </EventDetailLayout>
  );
}
