import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import Image from "next/image";

export default function OnChainDefenseInDepthEventPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1555098023010-L99ESNM4E9YUE04P6595/dr.bob.jpeg?format=2500w"
            alt="A BRIGHT NEW DAWN FOR DIGITAL TRANSFERS, SOUND MONEY AND PERSONAL FREEDOM."
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/90 font-light">
                A BRIGHT NEW DAWN FOR DIGITAL TRANSFERS, SOUND MONEY AND PERSONAL FREEDOM.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Event Details */}
            <div className="md:w-1/3">
              {/* Event Title */}
              <h1 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                On-Chain Defense in Depth - Dr. Bob McElrath
              </h1>

              {/* Event Meta */}
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>Friday 25 January 2019</li>
                <li>19:00 - 20:00</li>
                <li className="pt-2">
                  Karl der Grosse{" "}
                  <a
                    href="http://maps.google.com/?q=Karl%20der%20Grosse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    (map)
                  </a>
                </li>
              </ul>

              {/* Calendar Links */}
              <div className="text-sm mb-6">
                <a
                  href="http://www.google.com/calendar/event?action=TEMPLATE&text=On-Chain%20Defense%20in%20Depth%20-%20Dr.%20Bob%20McElrath&dates=20190125T180000Z/20190125T190000Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  Google Calendar
                </a>
                <span className="text-gray-400 mx-2">-</span>
                <a
                  href="/most-recent-events/2019/1/25/on-chain-defense-in-depth-dr-bob-mcelrath?format=ical"
                  className="text-[#c75b4a] hover:underline"
                >
                  ICS
                </a>
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="md:w-2/3">
              <div className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-700">
                <p className="mb-6">
                  In this tech-talk we examined all current and proposed mechanisms for creating a &quot;Bitcoin Vault&quot;.
                </p>

                <p className="mb-6">
                  Source::{" "}
                  <a
                    href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/256522390/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/256522390/
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Earlier/Later Event Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {/* Earlier Event */}
              <div className="md:w-1/2">
                <p className="text-xs text-gray-500 mb-1">Earlier Event: 22 January</p>
                <Link
                  href="/most-recent-events/2019/1/22/10-years-bitcoin-bitcoin-association-in-davos-during-wef"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  10 Years Bitcoin - Bitcoin Association in Davos (during WEF)
                </Link>
              </div>

              {/* Later Event */}
              <div className="md:w-1/2 md:text-right">
                <p className="text-xs text-gray-500 mb-1">Later Event: 22 May</p>
                <Link
                  href="/most-recent-events/2019/5/22/annual-general-assembly-of-the-bitcoin-association-switzerland-2019"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Annual General Assembly of the Bitcoin Association Switzerland - 2019
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
