import type { Metadata } from "next";
import EventDetailLayout from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("bas-roadshow-lake-zurich");

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    "The Bitcoin Association Switzerland invites you to the next BAS Roadshow – this time on a boat in Rapperswil on March 21, 2025, starting at 6:30 PM.",
};

export default function BASRoadshowLakeZurichPage() {
  return (
    <EventDetailLayout event={event} timeStyle="en-dash" linkSeparator="-">
      <p className="text-lg font-semibold">
        The Roadshow is coming to Lake Zurich!
      </p>

      <p>
        The <strong>Bitcoin Association Switzerland</strong> invites you to the next{" "}
        <strong>BAS Roadshow</strong> – this time on a{" "}
        <strong>boat in Rapperswil on March 21, 2025</strong>, starting at{" "}
        <strong>6:30 PM</strong>.
      </p>

      <p>
        {event.signupText}{" "}
        <a
          href={event.signupLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
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
