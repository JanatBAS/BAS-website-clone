import type { Metadata } from "next";
import EventDetailLayout, { EVENT_TAGLINE } from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("sidechains-on-btc-drivechain-and-blind-merged-mining-paul-sztorc");

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    "Drivechain is a proposed soft fork of Bitcoin that allows BTC to travel to and from any other piece of software.",
};

export default function SidechainsDrivechainEventPage() {
  return (
    <EventDetailLayout event={event} tagline={EVENT_TAGLINE} share>
      <p>
        Drivechain is a proposed soft fork of Bitcoin that allows BTC to travel to and from any
        other piece of software. How does it work? Does it have any detrimental effects? Do we
        *want* some sidechains to fail (and why)?
      </p>
      <p className="text-[13px] text-gray-500">
        Source:{" "}
        <a
          href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/259929435/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline break-all"
        >
          https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/259929435/
        </a>
      </p>
    </EventDetailLayout>
  );
}
