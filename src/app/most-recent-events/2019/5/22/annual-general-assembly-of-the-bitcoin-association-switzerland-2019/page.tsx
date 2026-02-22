import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import Image from "next/image";

export default function AnnualGeneralAssembly2019EventPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Banner */}
        <section className="relative w-full h-[200px] bg-[#1a1a1a]">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/branding/logo-with-name-big.png"
              alt="BAS General Assembly background"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-sm md:text-base uppercase tracking-[0.3em] text-center px-4 font-light">
              A bright new dawn for digital transfers, sound money and personal freedom.
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Event Image and Details */}
            <div className="md:w-1/3">
              {/* Event Image */}
              <div className="relative w-full aspect-[4/3] mb-6">
                <Image
                  src="/images/branding/logo-with-name-big.png"
                  alt="Annual General Assembly of the Bitcoin Association Switzerland - 2019"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Event Title */}
              <h1 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                Annual General Assembly of the Bitcoin Association Switzerland - 2019
              </h1>

              {/* Event Meta */}
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>Wednesday 22 May 2019</li>
                <li>19:00 - 20:00</li>
                <li>
                  Volkshaus{" "}
                  <a
                    href="http://maps.google.com/?q=Volkshaus"
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
                  href="http://www.google.com/calendar/event?action=TEMPLATE&text=Annual%20General%20Assembly%20of%20the%20Bitcoin%20Association%20Switzerland%20-%202019&dates=20190522T170000Z/20190522T180000Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  Google Calendar
                </a>
                <span className="text-gray-400 mx-2">-</span>
                <a
                  href="/most-recent-events/2019/5/22/annual-general-assembly-of-the-bitcoin-association-switzerland-2019?format=ical"
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
                  The members of the Bitcoin Association Switzerland came together to discuss and decide
                  on various things.
                </p>

                <p className="mb-6">
                  Source::{" "}
                  <a
                    href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/260365590/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/260365590/
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
            
            <button className="flex items-center gap-1.5 hover:text-gray-700 transition-colors">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
              </svg>
              Share
            </button>
          </div>

          {/* Earlier/Later Event Navigation */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {/* Earlier Event */}
              <div className="md:w-1/2">
                <p className="text-xs text-gray-500 mb-1">Earlier Event: 25 January</p>
                <Link
                  href="/most-recent-events/2019/1/25/on-chain-defense-in-depth-dr-bob-mcelrath"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  On-Chain Defense in Depth - Dr. Bob McElrath
                </Link>
              </div>

              {/* Later Event */}
              <div className="md:w-1/2 md:text-right">
                <p className="text-xs text-gray-500 mb-1">Later Event: 6 June</p>
                <Link
                  href="/most-recent-events/2019/6/6/sidechains-on-btc-drivechain-and-blind-merged-mining-paul-sztorc"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Sidechains on BTC -- Drivechain and Blind Merged Mining - Paul Sztorc
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
