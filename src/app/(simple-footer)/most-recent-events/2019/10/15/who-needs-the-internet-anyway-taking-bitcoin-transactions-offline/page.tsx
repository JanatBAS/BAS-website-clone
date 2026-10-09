import type { Metadata } from "next";
import EventDetailLayout, { EVENT_TAGLINE } from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("who-needs-the-internet-anyway-taking-bitcoin-transactions-offline");

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    "Neil takes a look at the technologies being built to keep Bitcoin running regardless of network disruptions, including Blockstream Satellite and goTenna mesh networks.",
};

export default function WhoNeedsInternetEventPage() {
  return (
    <EventDetailLayout
      event={event}
      tagline={EVENT_TAGLINE}
      backLink={{ href: "/most-recent-events", label: "Back to All Events" }}
    >
      <p>
        Bitcoin is considered to be currency of the internet. But what happens if someone has a poor internet connection, or loses it entirely? Neil takes a look at the technologies being built to keep Bitcoin running regardless of network disruptions, including Blockstream Satellite and goTenna mesh networks.
      </p>
      <p className="text-[13px] text-gray-500">
        Source:{" "}
        <a
          href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/264984176/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline break-all"
        >
          https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/264984176/
        </a>
      </p>
    </EventDetailLayout>
  );
}
