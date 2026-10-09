import type { Metadata } from "next";
import EventDetailLayout, { EVENT_TAGLINE } from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("lightning-meetup-with-elizabeth-stark-ceo-lightning-labs");

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    'At this "Industry Insights" meetup, Elizabeth will give us some interesting insights into the Lightning Network.',
};

export default function LightningMeetupElizabethStarkPage() {
  return (
    <EventDetailLayout
      event={event}
      tagline={EVENT_TAGLINE}
      backLink={{ href: "/most-recent-events", label: "Back to All Events" }}
    >
      <p>
        At this &quot;Industry Insights&quot; meetup, Elizabeth will give us some interesting insights into the Lightning Network. Short talk, no slides, q&amp;a, causal get-together.
      </p>
      <p className="text-[13px] text-gray-500">
        Source:{" "}
        <a
          href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/sdlqmrybccbrb/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline break-all"
        >
          https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/sdlqmrybccbrb/
        </a>
      </p>
    </EventDetailLayout>
  );
}
