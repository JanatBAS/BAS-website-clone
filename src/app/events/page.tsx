import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { GraduationCapIcon, MapIcon, ExternalLinkIcon } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "@/components/calendar";
import { allEvents } from "@/data/events";
import { getAllEventsWithAdmin } from "@/lib/merge-data";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Meetups & Events | Bitcoin Association Switzerland",
  description:
    "Join our Bitcoin community events across Switzerland. View our calendar, conferences, educational talks, and regional meetups in Zurich, Geneva, Luzern, and more.",
};

const moreEventsCards = [
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


export default async function EventsPage() {
  const events = await getAllEventsWithAdmin(allEvents);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageHero
          title="Meetups & Events"
          description="Since 2013, we have organised talks and social gatherings where people discuss and learn about Bitcoin. With more than 9'000 members, we are one of the biggest local Bitcoin communities in the world."
        />

        {/* Calendar Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Calendar events={events} />
          </div>
        </section>

        {/* Regional Meetups Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader>Regional Meetups</SectionHeader>
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
            <SectionHeader>World-Class Speakers</SectionHeader>
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

        {/* Roadshow & Education */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader className="mb-8">More to Explore</SectionHeader>
            <div className="grid sm:grid-cols-2 gap-6">
              {moreEventsCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group block p-6 bg-white rounded-lg hover:bg-gray-100 transition-colors border border-gray-100 hover:border-gray-200"
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
      </main>
      <Footer />
    </>
  );
}
