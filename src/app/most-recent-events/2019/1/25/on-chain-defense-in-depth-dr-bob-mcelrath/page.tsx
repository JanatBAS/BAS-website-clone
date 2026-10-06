import type { Metadata } from "next";
import EventDetailLayout, { EVENT_TAGLINE } from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("on-chain-defense-in-depth-dr-bob-mcelrath");

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    'In this tech-talk we examined all current and proposed mechanisms for creating a "Bitcoin Vault".',
};

export default function OnChainDefenseInDepthEventPage() {
  return (
    <EventDetailLayout event={event} tagline={EVENT_TAGLINE.toUpperCase()} linkSeparator="-">
      <p>
        In this tech-talk we examined all current and proposed mechanisms for creating a &quot;Bitcoin Vault&quot;.
      </p>
      <p className="text-[13px] text-gray-500">
        Source::{" "}
        <a
          href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/256522390/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline break-all"
        >
          https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/256522390/
        </a>
      </p>
    </EventDetailLayout>
  );
}
