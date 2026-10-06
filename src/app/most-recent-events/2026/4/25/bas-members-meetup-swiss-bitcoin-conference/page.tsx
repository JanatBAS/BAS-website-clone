import type { Metadata } from "next";
import EventDetailLayout, { EVENT_TAGLINE } from "@/components/events/EventDetailLayout";
import { getEvent, getPageTitle } from "@/data/events";

const event = getEvent("bas-members-meetup-swiss-bitcoin-conference");
const conferenceUrl = "https://swiss-bitcoin-conference.com/";

export const metadata: Metadata = {
  title: getPageTitle(event),
  description:
    "An informal get-together for BAS members at the Swiss Bitcoin Conference in Kreuzlingen to connect with fellow members and exchange ideas.",
};

export default function BASMembersMeetupSwissBitcoinConferencePage() {
  return (
    <EventDetailLayout
      event={event}
      tagline={EVENT_TAGLINE}
      backLink={{ href: "/events", label: "Back to Events" }}
      registrationLink
    >
      <p>
        <strong>Dear BAS members,</strong>
      </p>
      <p>
        We have decided resp. voted to host a series of member meetups
        alongside selected Bitcoin conferences this year.
      </p>
      <p>
        Our first stop will be at the Swiss Bitcoin Conference in
        Kreuzlingen. We would like to invite you to a simple member
        get-together with fellow BAS members attending the conference.
      </p>
      <p>
        This will be an informal meetup to connect with fellow
        members, exchange ideas, and spend some time together during
        the conference. The exact spot at the venue will be shared
        separately.
      </p>
      <p>
        Registration is required for catering planning. You can sign
        up on{" "}
        <a
          href={event.signupLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
        >
          Meetup
        </a>
        .
      </p>
      <p>
        Conference details are available on the{" "}
        <a
          href={conferenceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c75b4a] hover:underline"
        >
          Swiss Bitcoin Conference website
        </a>
        .
      </p>
      <p>Looking forward to seeing many of you there.</p>
      <p>
        Lisa
        <br />
        on behalf of the BAS Board
      </p>
    </EventDetailLayout>
  );
}
