import type { Metadata } from "next";
import EventDetailLayout from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("bas-roadshow-bern");

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    "The Bitcoin Association Switzerland is launching its first official Roadshow 2025, and the first stop will take place in the capital - Bern!",
};

export default function BASRoadshowBernPage() {
  return (
    <EventDetailLayout event={event} timeStyle="en-dash">
      <p className="font-semibold">
        The Bitcoin Association Switzerland invites you: Roadshow in Bern on January, 21, 2025
      </p>

      <ul className="list-disc list-inside space-y-1 text-gray-500">
        <li>Sunday 21 September 2025</li>
        <li>18:00 23:00</li>
      </ul>

      <ul className="list-disc list-inside space-y-1 text-gray-500">
        <li>Time: 18:00 23:00</li>
        <li>
          Location:{" "}
          <a
            href={event.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c75b4a] hover:underline"
          >
            (map)
          </a>
        </li>
      </ul>

      <p>
        The Bitcoin Association Switzerland is launching its first official Roadshow 2025, and the first stop will take place in the capital - Bern!
      </p>

      <p>
        <strong>{event.signupText}</strong>{" "}
        <a
          href={event.signupLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline font-semibold"
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
