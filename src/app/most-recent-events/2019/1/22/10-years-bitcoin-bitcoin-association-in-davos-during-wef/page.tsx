import type { Metadata } from "next";
import EventDetailLayout, { EVENT_TAGLINE } from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("10-years-bitcoin-bitcoin-association-in-davos-during-wef");

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    "The Bitcoin Association Switzerland hosted a 1 hour session in Davos, talking about Bitcoin, the past 10 years and its future.",
};

export default function TenYearsBitcoinDavosPage() {
  return (
    <EventDetailLayout
      event={event}
      tagline={EVENT_TAGLINE}
      backLink={{ href: "/most-recent-events", label: "Back to All Events" }}
    >
      <p>
        The Bitcoin Association Switzerland hosted a 1 hour session in Davos, talking about Bitcoin, the past 10 years and its future.
      </p>
      <p className="text-[13px] text-gray-500">
        Source:{" "}
        <a
          href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/258157269/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline break-all"
        >
          https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/258157269/
        </a>
      </p>
    </EventDetailLayout>
  );
}
