import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Image from "next/image";
import Link from "next/link";

export default function TenYearsBitcoinDavosPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="relative w-full h-[200px] mt-20 bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1555097945124-YDELNBEU4JT5QNJP0Z1F/davos.jpg?format=2500w"
            alt="10 Years Bitcoin - Davos"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-xs md:text-sm uppercase tracking-[0.2em] text-center px-4 font-light">
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
            {/* Left Column - Event Details */}
            <div className="flex-shrink-0 w-full md:w-[280px]">
              {/* Event Title */}
              <h1 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                10 Years Bitcoin - Bitcoin Association in Davos (during WEF)
              </h1>

              {/* Event Meta */}
              <ul className="text-[13px] text-gray-600 space-y-1 mb-4">
                <li>Tuesday 22 January 2019</li>
                <li>14:00 - 15:00</li>
                <li>
                  Davos{" "}
                  <a
                    href="http://maps.google.com/?q=Davos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    (map)
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="http://www.google.com/calendar/event?action=TEMPLATE&text=10%20Years%20Bitcoin%20-%20Bitcoin%20Association%20in%20Davos%20%28during%20WEF%29&dates=20190122T130000Z/20190122T140000Z&location=Davos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    Google Calendar
                  </a>
                  <span className="text-gray-400 mx-2">|</span>
                  <a
                    href="/most-recent-events/2019/1/22/10-years-bitcoin-bitcoin-association-in-davos-during-wef?format=ical"
                    className="text-[#c75b4a] hover:underline"
                  >
                    ICS
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column - Event Description */}
            <div className="flex-1">
              <div className="text-[14px] text-gray-700 leading-relaxed">
                <p className="mb-4">
                  The Bitcoin Association Switzerland hosted a 1 hour session in Davos, talking about Bitcoin, the past 10 years and its future.
                </p>
                <p className="text-[13px] text-gray-500">
                  Source:{" "}
                  <a
                    href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/258157269/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline break-all"
                  >
                    https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/258157269/
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Event Navigation */}
          <div className="flex justify-end items-start mt-12 pt-8 border-t border-gray-200">
            {/* Later Event */}
            <div className="text-right">
              <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">
                Later Event: 25 January
              </div>
              <Link
                href="/most-recent-events/2019/1/25/on-chain-defense-in-depth-dr-bob-mcelrath"
                className="text-[13px] text-[#c75b4a] hover:underline"
              >
                On-Chain Defense in Depth - Dr. Bob McElrath
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </div>
  );
}
