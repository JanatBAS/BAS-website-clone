import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Image from "next/image";
import Link from "next/link";

export default function RegularMeetupsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Image with Tagline Overlay */}
      <div className="relative w-full h-[300px] mt-20">
        <Image
          src="/images/events/regular-meetup.jpeg"
          alt="Regular Meetups"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Tagline */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xs md:text-sm tracking-[0.25em] uppercase text-center px-4">
            A bright new dawn for digital transfers, sound money and personal freedom.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back to All Events Link */}
          <Link
            href="/most-recent-events"
            className="inline-block text-[13px] text-gray-500 hover:text-[#c75b4a] mb-8 transition-colors"
          >
            &larr; Back to All Events
          </Link>

          {/* Event Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12">
            {/* Left Column - Title and Meta */}
            <div>
              <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 leading-tight">
                Regular Meetups
              </h1>

              {/* Meta Info */}
              <ul className="text-[13px] text-gray-500 space-y-1 mb-4">
                <li>Friday 1 April 2022</li>
                <li>19:00 - 20:00</li>
              </ul>

              {/* Calendar Links */}
              <div className="text-[13px] flex items-center gap-2">
                <a
                  href="http://www.google.com/calendar/event?action=TEMPLATE&text=Regular%20Meetups&dates=20220401T170000Z/20220401T180000Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  Google Calendar
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="/most-recent-events/2022/4/1/regular-meetups?format=ical"
                  className="text-[#c75b4a] hover:underline"
                >
                  ICS
                </a>
              </div>
            </div>

            {/* Right Column - Description */}
            <div>
              <div className="text-[15px] text-gray-700 leading-relaxed space-y-4">
                <p>
                  Every second Wednesday we meet in Zurich and every fourth Wednesday in Geneva. There
                  are also Bitcoin meetups in other cities on a less regular schedule. Please contact us if you
                  plan to start a meetup in your city and we will help you as good as we can!
                </p>
                <p>
                  Besides our regular beer & Bitcoin meetups, we organize various events. You can find an
                  overview of our past events for this year below.
                </p>
                <p>
                  Join us at{" "}
                  <a
                    href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    meetup.com
                  </a>{" "}
                  to sign up for our events!
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-10" />

          {/* Earlier Event Navigation */}
          <div className="text-[13px]">
            <div className="text-gray-500 mb-1">Earlier Event: 13 January</div>
            <Link
              href="/most-recent-events/2020/1/13/lightning-meetup-with-elizabeth-stark-ceo-lightning-labs"
              className="text-[#c75b4a] hover:underline"
            >
              Lightning Meetup with Elizabeth Stark (CEO Lightning Labs)
            </Link>
          </div>
        </div>
      </main>

      <FooterSimple />
    </div>
  );
}
