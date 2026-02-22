import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Image from "next/image";
import Link from "next/link";

export default function LightningMeetupElizabethStarkPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="relative w-full h-[200px] mt-20 bg-[#1a1a1a]">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/events/meetup-z.jpeg"
            alt="Lightning Meetup background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-sm md:text-base uppercase tracking-[0.3em] text-center px-4 font-light">
            A bright new dawn for digital transfers, sound money and personal freedom.
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back to All Events Link */}
          <div className="mb-6">
            <Link
              href="/most-recent-events"
              className="text-[13px] text-gray-500 hover:text-[#c75b4a] transition-colors"
            >
              &larr; Back to All Events
            </Link>
          </div>

          {/* Event Content Grid */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Event Image */}
            <div className="flex-shrink-0 w-full md:w-[300px]">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/events/meetup-z.jpeg"
                  alt="Lightning Meetup with Elizabeth Stark"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Event Title */}
              <h1 className="text-xl font-semibold text-gray-900 mt-6 mb-4 leading-snug">
                Lightning Meetup with Elizabeth Stark (CEO Lightning Labs)
              </h1>

              {/* Event Meta */}
              <ul className="text-[13px] text-gray-500 space-y-1 mb-4">
                <li>Monday 13 January 2020</li>
                <li>19:00 - 20:00</li>
                <li>
                  Langstrasse 136{" "}
                  <a
                    href="http://maps.google.com/?q=Langstrasse%20136"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    (map)
                  </a>
                </li>
                <li className="flex items-center gap-1 pt-1">
                  <a
                    href="http://www.google.com/calendar/event?action=TEMPLATE&text=Lightning%20Meetup%20with%20Elizabeth%20Stark%20%28CEO%20Lightning%20Labs%29&dates=20200113T180000Z/20200113T190000Z&location=Langstrasse%20136"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    Google Calendar
                  </a>
                  <span className="text-gray-300 mx-1">|</span>
                  <a
                    href="/most-recent-events/2020/1/13/lightning-meetup-with-elizabeth-stark-ceo-lightning-labs?format=ical"
                    className="text-[#c75b4a] hover:underline"
                  >
                    ICS
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column - Event Description */}
            <div className="flex-1">
              <div className="text-[14px] text-gray-600 leading-relaxed">
                <p className="mb-4">
                  At this &quot;Industry Insights&quot; meetup, Elizabeth will give us some interesting insights into the Lightning Network. Short talk, no slides, q&amp;a, causal get-together.
                </p>
                <p className="mb-4">
                  Source:{" "}
                  <a
                    href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/sdlqmrybccbrb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline break-all"
                  >
                    https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/sdlqmrybccbrb/
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Event Navigation */}
          <div className="flex justify-between items-start mt-12 pt-8 border-t border-gray-200">
            {/* Earlier Event */}
            <div className="text-left">
              <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">
                Earlier Event: 18 December
              </div>
              <Link
                href="/most-recent-events/2020/2/4/bitcoin-christmas-meetup-zurich"
                className="text-[13px] text-[#c75b4a] hover:underline"
              >
                Bitcoin Christmas Meetup Zurich
              </Link>
            </div>

            {/* Later Event */}
            <div className="text-right">
              <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">
                Later Event: 1 April
              </div>
              <Link
                href="/most-recent-events/2022/4/1/regular-meetups"
                className="text-[13px] text-[#c75b4a] hover:underline"
              >
                Regular Meetups
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </div>
  );
}
