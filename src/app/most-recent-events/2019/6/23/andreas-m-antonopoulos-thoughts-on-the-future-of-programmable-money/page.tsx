import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Image from "next/image";
import Link from "next/link";

export default function AndreasAntonopoulosEventPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="w-full bg-[#1a1a1a] pt-20">
        {/* Tagline Banner */}
        <div className="bg-[#1a1a1a] py-4 px-4 text-center">
          <p className="text-white text-xs uppercase tracking-[0.2em]">
            A bright new dawn for digital transfers, sound money and personal freedom.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back to All Events Link */}
          <Link
            href="/most-recent-events"
            className="text-[13px] text-gray-500 hover:text-[#c75b4a] transition-colors mb-8 inline-block"
          >
            &larr; Back to All Events
          </Link>

          {/* Event Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 mt-6">
            {/* Left Column - Title and Meta */}
            <div>
              <h1 className="text-xl font-semibold text-gray-900 mb-6 leading-snug">
                Andreas M. Antonopoulos: Thoughts on The Future of Programmable Money.
              </h1>

              {/* Event Meta */}
              <ul className="text-[13px] text-gray-600 space-y-1 mb-6">
                <li>Sunday 23 June 2019</li>
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
                <li className="pt-2">
                  <a
                    href="http://www.google.com/calendar/event?action=TEMPLATE&text=Andreas%20M.%20Antonopoulos%3A%20Thoughts%20on%20The%20Future%20of%20Programmable%20Money.&dates=20190623T170000Z/20190623T180000Z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    Google Calendar
                  </a>
                  <span className="text-gray-400 mx-2">|</span>
                  <a
                    href="/most-recent-events/2019/6/23/andreas-m-antonopoulos-thoughts-on-the-future-of-programmable-money?format=ical"
                    className="text-[#c75b4a] hover:underline"
                  >
                    ICS
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column - Image and Description */}
            <div>
              {/* Event Image */}
              <div className="mb-6">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354131936-O9QJ0IL9KE0GRA33IFGE/1.jpg?format=1500w"
                  alt="Andreas M. Antonopoulos: Thoughts on The Future of Programmable Money"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* Event Description */}
              <div className="text-[14px] text-gray-700 leading-relaxed space-y-4">
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

                <p className="pt-2 text-[13px] text-gray-500">
                  Source:{" "}
                  <a
                    href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/260442996/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/260442996/
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <hr className="my-10 border-gray-200" />

          {/* Previous/Next Navigation */}
          <div className="flex justify-between items-start text-[13px]">
            {/* Previous Event */}
            <div className="flex-1">
              <div className="text-gray-500 mb-1">Earlier Event: 6 June</div>
              <Link
                href="/most-recent-events/2019/6/6/sidechains-on-btc-drivechain-and-blind-merged-mining-paul-sztorc"
                className="text-[#c75b4a] hover:underline"
              >
                Sidechains on BTC -- Drivechain and Blind Merged Mining - Paul Sztorc
              </Link>
            </div>

            {/* Next Event */}
            <div className="flex-1 text-right">
              <div className="text-gray-500 mb-1">Later Event: 15 October</div>
              <Link
                href="/most-recent-events/2019/10/15/who-needs-the-internet-anyway-taking-bitcoin-transactions-offline"
                className="text-[#c75b4a] hover:underline"
              >
                Who Needs the Internet Anyway: Taking Bitcoin Transactions Offline
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </div>
  );
}
