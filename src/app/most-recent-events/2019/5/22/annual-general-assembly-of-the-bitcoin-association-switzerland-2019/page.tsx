import type { Metadata } from "next";
import EventDetailLayout, { EVENT_TAGLINE } from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("annual-general-assembly-of-the-bitcoin-association-switzerland-2019");

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    "The members of the Bitcoin Association Switzerland came together to discuss and decide on various things.",
};

export default function AnnualGeneralAssembly2019EventPage() {
  return (
    <EventDetailLayout event={event} tagline={EVENT_TAGLINE} linkSeparator="-" share>
      <p>
        The members of the Bitcoin Association Switzerland came together to discuss and decide
        on various things.
      </p>
      <p className="text-[13px] text-gray-500">
        Source::{" "}
        <a
          href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/260365590/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline break-all"
        >
          https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/260365590/
        </a>
      </p>
    </EventDetailLayout>
  );
}
