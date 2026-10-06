import type { Metadata } from "next";
import EventDetailLayout, { EVENT_TAGLINE } from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("regular-meetups");

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    "Every second Wednesday we meet in Zurich and every fourth Wednesday in Geneva, with Bitcoin meetups in other cities on a less regular schedule.",
};

export default function RegularMeetupsPage() {
  return (
    <EventDetailLayout
      event={event}
      tagline={EVENT_TAGLINE}
      backLink={{ href: "/most-recent-events", label: "Back to All Events" }}
    >
      <p>
        Every second Wednesday we meet in Zurich and every fourth Wednesday in Geneva. There
        are also Bitcoin meetups in other cities on a less regular schedule. Please contact us if you
        plan to start a meetup in your city and we will help you as good as we can!
      </p>
      <p>
        Besides our regular beer & Bitcoin meetups, we organize various events. You can find an
        overview of our past events for this year below.
      </p>
      <p>
        Join us at{" "}
        <a
          href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
        >
          meetup.com
        </a>{" "}
        to sign up for our events!
      </p>
    </EventDetailLayout>
  );
}
