import type { Metadata } from "next";
import EventDetailLayout from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("bas-roadshow-basel");

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    "The Bitcoin Association Switzerland is launching its official Roadshow 2025, and the next stop will take place in the great city of Basel!",
};

export default function BASRoadshowBaselPage() {
  return (
    <EventDetailLayout event={event} timeStyle="en-dash">
      <p className="text-brand font-semibold">
        The Bitcoin Association Switzerland invites you: Roadshow in Basel on September, 21, 2025
      </p>

      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Time: 18:00 22:30</li>
        <li>
          Location:{" "}
          <a
            href="http://maps.google.com/?q=%20Lausanne"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            (map)
          </a>
        </li>
      </ul>

      <p>
        The Bitcoin Association Switzerland is launching its official Roadshow 2025, and the next stop will take place in the great city of Basel!
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
