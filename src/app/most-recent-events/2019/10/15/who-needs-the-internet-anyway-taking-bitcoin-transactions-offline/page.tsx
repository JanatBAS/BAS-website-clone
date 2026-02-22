import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Image from "next/image";
import Link from "next/link";

export default function WhoNeedsInternetEventPage() {
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
                Who Needs the Internet Anyway: Taking Bitcoin Transactions Offline
              </h1>

              {/* Event Meta */}
              <ul className="text-[13px] text-gray-600 space-y-1 mb-6">
                <li>Tuesday 15 October 2019</li>
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
                <li className="pt-2">
                  <a
                    href="http://www.google.com/calendar/event?action=TEMPLATE&text=Who%20Needs%20the%20Internet%20Anyway%3A%20Taking%20Bitcoin%20Transactions%20Offline&dates=20191015T170000Z/20191015T180000Z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    Google Calendar
                  </a>
                  <span className="text-gray-400 mx-2">|</span>
                  <a
                    href="/most-recent-events/2019/10/15/who-needs-the-internet-anyway-taking-bitcoin-transactions-offline?format=ical"
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
                  src="/images/events/christmas-meetup.jpeg"
                  alt="Who Needs the Internet Anyway: Taking Bitcoin Transactions Offline"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* Event Description */}
              <div className="text-[14px] text-gray-700 leading-relaxed space-y-4">
                <p>
                  Bitcoin is considered to be currency of the internet. But what happens if someone has a poor internet connection, or loses it entirely? Neil takes a look at the technologies being built to keep Bitcoin running regardless of network disruptions, including Blockstream Satellite and goTenna mesh networks.
                </p>

                <p className="pt-2 text-[13px] text-gray-500">
                  Source:{" "}
                  <a
                    href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/264984176/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/264984176/
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
              <div className="text-gray-500 mb-1">Earlier Event: 23 June</div>
              <Link
                href="/most-recent-events/2019/6/23/andreas-m-antonopoulos-thoughts-on-the-future-of-programmable-money"
                className="text-[#c75b4a] hover:underline"
              >
                Andreas M. Antonopoulos: Thoughts on The Future of Programmable Money.
              </Link>
            </div>

            {/* Next Event */}
            <div className="flex-1 text-right">
              <div className="text-gray-500 mb-1">Later Event: 18 December</div>
              <Link
                href="/most-recent-events/2020/2/4/bitcoin-christmas-meetup-zurich"
                className="text-[#c75b4a] hover:underline"
              >
                Bitcoin Christmas Meetup Zürich
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </div>
  );
}
