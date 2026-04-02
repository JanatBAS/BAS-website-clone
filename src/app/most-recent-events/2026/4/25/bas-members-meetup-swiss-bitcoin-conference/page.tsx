import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Image from "next/image";
import Link from "next/link";

const meetupUrl =
  "https://www.meetup.com/de-de/bitcoin-meetup-switzerland/events/314034144/";
const conferenceUrl = "https://swiss-bitcoin-conference.com/";
const googleCalendarUrl =
  "https://www.google.com/calendar/event?action=TEMPLATE&text=BAS%20Members%20Meetup%20at%20the%20Swiss%20Bitcoin%20Conference&dates=20260425T170000/20260425T190000&ctz=Europe/Zurich&location=Kreuzlingen%20%28conference%20venue%2C%20exact%20spot%20to%20be%20shared%29&details=Registration%20required%3A%20https%3A%2F%2Fwww.meetup.com%2Fde-de%2Fbitcoin-meetup-switzerland%2Fevents%2F314034144%2F%0AConference%20info%3A%20https%3A%2F%2Fswiss-bitcoin-conference.com%2F";

export default function BASMembersMeetupSwissBitcoinConferencePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="relative w-full h-[300px] mt-20">
        <Image
          src="/images/branding/bas-people.jpg"
          alt="BAS community members gathering together"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xs md:text-sm tracking-[0.25em] uppercase text-center px-4">
            A bright new dawn for digital transfers, sound money and personal freedom.
          </p>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/events"
            className="inline-block text-[13px] text-gray-500 hover:text-[#c75b4a] mb-8 transition-colors"
          >
            &larr; Back to Events
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12">
            <div>
              <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 leading-tight">
                BAS Members Meetup at the Swiss Bitcoin Conference
              </h1>

              <ul className="text-[13px] text-gray-500 space-y-1 mb-4">
                <li>Saturday 25 April 2026</li>
                <li>From 17:00</li>
                <li>Kreuzlingen, conference venue</li>
              </ul>

              <div className="text-[13px] flex flex-wrap items-center gap-2">
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  Google Calendar
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href={meetupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  Registration
                </a>
              </div>
            </div>

            <div>
              <div className="text-[15px] text-gray-700 leading-relaxed space-y-4">
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
                    href={meetupUrl}
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
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </div>
  );
}
