import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const participateNavItems = [
  { label: "Meetups & Events", href: "/meetups-events", active: true },
];

export default function MeetupsEventsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Sidebar Navigation */}
            <aside className="md:w-48 flex-shrink-0">
              <h2 className="text-[#8b7355] text-lg font-light mb-4 font-serif italic">
                Participate
              </h2>
              <nav className="space-y-2">
                {participateNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block text-xs uppercase tracking-wider transition-colors ${
                      item.active
                        ? "text-gray-900 font-semibold"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-2xl">
              {/* Meetups & Events Heading */}
              <section className="mb-8">
                <h1 className="text-2xl md:text-3xl font-normal text-gray-900 mb-6">
                  Meetups & Events
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Since 2013, we have organised talks and social gatherings where
                  people discuss and learn about Bitcoin, technology and economics.
                  With more than 9&apos;000 members, we are one of the biggest local
                  Bitcoin communities in the world, hosting events with 30 up to
                  1&apos;000 attendees.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you are new to Bitcoin or an early adopter, everyone is
                  welcome to join us.
                </p>
              </section>

              {/* Regular Meetups Section */}
              <section className="mb-8">
                <h2 className="text-sm uppercase tracking-wider text-gray-800 font-semibold mb-4">
                  Regular Meetups
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  There are regular social events (called Bitcoin meetups) happening
                  in Zurich, Geneva, and other cities in Switzerland. The meetups
                  occur in a local Cafe, are free to attend and usually don&apos;t
                  feature a speaker. They are the backbone of our grassroots
                  community and the perfect starting point to learn more about
                  Bitcoin and why people are so interested in it.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If you&apos;d like to attend a regular meetup, please sign up on{" "}
                  <a
                    href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    meetup.com
                  </a>{" "}
                  and check the &apos;Events&apos; links in the menu of this page.
                </p>
              </section>

              {/* Events Section */}
              <section className="mb-8">
                <h2 className="text-sm uppercase tracking-wider text-gray-800 font-semibold mb-4">
                  Events
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  One of our primary tasks is organizing educational events about
                  Bitcoin. Our events feature high-profile speakers from all over
                  the world, covering many areas within and around Bitcoin.
                </p>

                {/* Event Image */}
                <figure className="mb-4">
                  <div className="relative w-full aspect-[3/2] overflow-hidden">
                    <Image
                      src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1509367420387-9GBUFUZ0Q7X0ICXBY0L3/andreas.jpeg"
                      alt="Technologist, serial entrepreneur and author Andreas M. Antonopoulos speaking in Zurich."
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-gray-500 text-xs mt-3 italic">
                    Technologist, serial entrepreneur and author Andreas M.
                    Antonopoulos speaking in Zurich.
                  </figcaption>
                </figure>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
