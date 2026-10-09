import type { Metadata } from "next";
import EventDetailLayout from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("bas-roadshow-lausanne");

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    "The Bitcoin Association Switzerland is launching its official Roadshow 2025, and the next stop will take place in the vibrant city of Lausanne!",
};

export default function BASRoadshowLausannePage() {
  return (
    <EventDetailLayout
      event={event}
      backLink={{ href: "/roadshow-2025", label: "Back to All Events" }}
      timeStyle="responsive"
      share
    >
      <p>
        <strong>
          The Bitcoin Association Switzerland invites you: Roadshow in Lausanne on February
          21, 2025
        </strong>
      </p>
      <p>
        The Bitcoin Association Switzerland is launching its official Roadshow 2025, and
        the next stop will take place in the vibrant city of Lausanne!
      </p>
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
      <p>
        <strong>Best regards,</strong>
        <br />
        The BAS Board
      </p>
    </EventDetailLayout>
  );
}
