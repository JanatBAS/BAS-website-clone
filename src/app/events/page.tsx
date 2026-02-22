import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meetups & Events | Bitcoin Association Switzerland",
  description:
    "Join our Bitcoin community events across Switzerland. View our calendar, roadshow dates, educational talks, and regional meetups in Zurich, Geneva, Luzern, and more.",
};

const quickNavCards = [
  {
    title: "Calendar",
    description: "View all upcoming events and meetups",
    href: "/calendar",
    icon: CalendarIcon,
  },
  {
    title: "Roadshow 2025",
    description: "Our nationwide Bitcoin education tour",
    href: "/roadshow-2025",
    icon: MapIcon,
  },
  {
    title: "Education",
    description: "Watch recorded talks and lectures",
    href: "/education",
    icon: GraduationCapIcon,
  },
];

const regionalMeetups = [
  {
    city: "Zurich",
    href: "https://www.meetup.com/bitcoin-meetup-switzerland/",
  },
  {
    city: "Geneva",
    href: "https://www.meetup.com/bitcoin-meetup-geneva/",
  },
  {
    city: "Luzern",
    href: "https://www.meetup.com/bitcoin-meetup-luzern/",
  },
  {
    city: "Neuchatel",
    href: "https://www.meetup.com/bitcoin-meetup-neuchatel/",
  },
  {
    city: "Basel",
    href: "https://www.meetup.com/bitcoin-meetup-basel/",
  },
];

function CalendarIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
      />
    </svg>
  );
}

function GraduationCapIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15v3.75m10.5-3.75v3.75"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className="w-4 h-4 ml-1 inline"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
              Meetups & Events
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Since 2013, we have organised talks and social gatherings where
              people discuss and learn about Bitcoin. With more than 9&apos;000
              members, we are one of the biggest local Bitcoin communities in
              the world.
            </p>
          </div>
        </section>

        {/* Quick Navigation Cards */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#8b7355] text-lg font-light mb-8 font-serif italic">
              Explore Our Events
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {quickNavCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-100 hover:border-gray-200"
                >
                  <div className="text-[#c75b4a] mb-3 group-hover:text-[#b54a3a] transition-colors">
                    <card.icon />
                  </div>
                  <h3 className="text-gray-900 font-medium text-sm mb-1">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{card.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Meetups Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#8b7355] text-lg font-light mb-4 font-serif italic">
              Regional Meetups
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-2xl">
              There are regular social events happening in cities across
              Switzerland. These meetups occur in local cafes, are free to
              attend, and usually don&apos;t feature a speaker. They are the
              backbone of our grassroots community and the perfect starting
              point to learn more about Bitcoin.
            </p>
            <div className="flex flex-wrap gap-3">
              {regionalMeetups.map((meetup) => (
                <a
                  key={meetup.city}
                  href={meetup.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm text-gray-700 hover:text-[#c75b4a] border border-gray-200 hover:border-[#c75b4a] transition-colors"
                >
                  Bitcoin Meetup {meetup.city}
                  <ExternalLinkIcon />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Image Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[#8b7355] text-lg font-light mb-4 font-serif italic">
              World-Class Speakers
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-2xl mx-auto">
              Our events feature high-profile speakers from all over the world,
              covering many areas within and around Bitcoin. Whether you are new
              to Bitcoin or an early adopter, everyone is welcome to join us.
            </p>
            <figure className="flex flex-col items-center">
              <div className="relative w-full max-w-2xl aspect-[3/2] overflow-hidden rounded-lg">
                <Image
                  src="/images/blog/andreas.jpeg"
                  alt="Technologist, serial entrepreneur and author Andreas M. Antonopoulos speaking in Zurich."
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-gray-500 text-xs mt-3 italic max-w-2xl">
                Technologist, serial entrepreneur and author Andreas M.
                Antonopoulos speaking in Zurich.
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
