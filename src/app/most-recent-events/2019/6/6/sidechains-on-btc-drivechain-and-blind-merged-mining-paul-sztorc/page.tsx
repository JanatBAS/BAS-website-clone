import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import Image from "next/image";

export default function SidechainsDrivechainEventPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1559826412982-8ZXXRM08LMVLQ48XLHMT/banner.jpg?format=2500w"
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
            {/* Left Column - Event Image and Details */}
            <div className="md:w-1/3">
              {/* Event Image */}
              <div className="relative w-full aspect-[4/3] mb-6">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563353920029-FNNDW3H0SC8JXSK4953P/paul.jpg?format=500w"
                  alt="Sidechains on BTC -- Drivechain and Blind Merged Mining - Paul Sztorc"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Event Title */}
              <h1 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                Sidechains on BTC -- Drivechain and Blind Merged Mining - Paul Sztorc
              </h1>

              {/* Event Meta */}
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>Thursday 6 June 2019</li>
                <li>19:00 - 20:00</li>
                <li>
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
                  href="http://www.google.com/calendar/event?action=TEMPLATE&text=Sidechains%20on%20BTC%20--%20Drivechain%20and%20Blind%20Merged%20Mining%20-%20Paul%20Sztorc&dates=20190606T170000Z/20190606T180000Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  Google Calendar
                </a>
                <span className="text-gray-400 mx-2">|</span>
                <a
                  href="/most-recent-events/2019/6/6/sidechains-on-btc-drivechain-and-blind-merged-mining-paul-sztorc?format=ical"
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
                  Drivechain is a proposed soft fork of Bitcoin that allows BTC to travel to and from any
                  other piece of software. How does it work? Does it have any detrimental effects? Do we
                  *want* some sidechains to fail (and why)?
                </p>

                <p className="mb-6">
                  Source:{" "}
                  <a
                    href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/259929435/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/259929435/
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Likes and Share */}
          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              1 Likes
            </span>
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
                <p className="text-xs text-gray-500 mb-1">Earlier Event: 22 May</p>
                <Link
                  href="/most-recent-events/2019/5/22/annual-general-assembly-of-the-bitcoin-association-switzerland-2019"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Annual General Assembly of the Bitcoin Association Switzerland - 2019
                </Link>
              </div>

              {/* Later Event */}
              <div className="md:w-1/2 md:text-right">
                <p className="text-xs text-gray-500 mb-1">Later Event: 23 June</p>
                <Link
                  href="/most-recent-events/2019/6/23/andreas-m-antonopoulos-thoughts-on-the-future-of-programmable-money"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Andreas M. Antonopoulos: Thoughts on The Future of Programmable Money.
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
