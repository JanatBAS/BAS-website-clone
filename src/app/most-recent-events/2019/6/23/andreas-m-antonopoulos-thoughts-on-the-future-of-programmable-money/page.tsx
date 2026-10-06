import type { Metadata } from "next";
import EventDetailLayout, { EVENT_TAGLINE } from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("andreas-m-antonopoulos-thoughts-on-the-future-of-programmable-money");

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    "With over 1'500 signups, Andreas M. Antonopoulos's talk on the future of programmable money was the biggest Bitcoin meetup event ever in Europe.",
};

export default function AndreasAntonopoulosEventPage() {
  return (
    <EventDetailLayout
      event={event}
      tagline={EVENT_TAGLINE}
      backLink={{ href: "/most-recent-events", label: "Back to All Events" }}
    >
      <p>
        With over 1&apos;500 signup this was the{" "}
        <strong>biggest Bitcoin meetup event ever in Europe</strong>.
      </p>

      <p className="text-gray-600 italic">Talks:</p>

      <p>
        Thoughts on The Future of Programmable Money - Andreas M. Antonopoulos
      </p>

      <p>
        An enlightening speech about the future of programmable money ending with a standing ovation!
      </p>

      <p>
        A video of the speech can be found{" "}
        <a
          href="https://www.youtube.com/watch?v=kqsmCUo3xEQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
        >
          on YouTube
        </a>
        .
      </p>

      <p className="pt-2">
        Cryptoasset Inheritance Planning - Pamela Morgan
      </p>

      <p>
        Will your loved ones be able to access your bitcoin, ether, or other cryptoassets if something happens to you? For most cryptoasset owners, the answer is no. Attend this talk and learn how to start building a cryptoasset inheritance plan for your loved ones, without relying on a single third party, and without giving them your keys now.
      </p>

      <p className="text-[13px] text-gray-500">
        Source:{" "}
        <a
          href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/260442996/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline break-all"
        >
          https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/260442996/
        </a>
      </p>
    </EventDetailLayout>
  );
}
