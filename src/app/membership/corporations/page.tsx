import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import PageSidebar, { type SidebarItem } from "@/components/PageSidebar";
import Link from "next/link";

const membershipNavItems: SidebarItem[] = [
  { label: "Private Individuals", href: "/membership/private-individuals" },
  { label: "Corporations", href: "/membership/corporations", active: true },
  { label: "Our Corporate Members", href: "/our-corporate-members" },
];

export default function CorporationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <PageSidebar
              title="membership"
              titleHref="/membership/private-individuals"
              items={membershipNavItems}
              titleClassName="text-[#2a9d8f]"
            />

            {/* Main Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-light text-[#1a1a1a] font-serif mb-8">
                Corporations
              </h1>

              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                A corporate membership positions your organisation at the heart of Switzerland&apos;s
                Bitcoin ecosystem. Gain visibility, access top talent, and build strategic
                relationships with investors, peers, and the wider Bitcoin community.
              </p>

              {/* BENEFITS */}
              <section className="mb-10">
                <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-6">
                  Member Benefits
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Company Visibility
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Your company logo and link are featured on the BAS website under{" "}
                      <Link href="/our-corporate-members" className="text-[#2a9d8f] hover:underline">
                        Our Corporate Members
                      </Link>
                      . Share news, announcements, and job openings directly within the BAS
                      community channels and display the BAS logo on your own website and
                      marketing materials.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Meet Your Next Hire
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Access a pool of skilled professionals and passionate individuals from
                      across Switzerland&apos;s Bitcoin community. Post openings directly to an
                      engaged audience actively looking to work in the industry.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Meet Investors
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Connect with investors active in the Bitcoin industry through BAS events
                      and the broader membership network. Build relationships with the people
                      funding the next wave of Bitcoin companies in Switzerland.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Meet Industry Peers
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Connect with fellow companies and organisations operating in the Bitcoin
                      space. Exchange experiences, explore partnerships, and stay close to what
                      others in the industry are building.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Sponsor Events
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Increase your brand&apos;s reach by sponsoring BAS events and meetups. Put
                      your company in front of a targeted audience of Bitcoin professionals,
                      investors, and enthusiasts across Switzerland.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Training for Your Team
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Give your staff access to BAS educational resources, courses, and
                      workshops covering Bitcoin technology, regulatory developments, and
                      industry best practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Showcase Your Products
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Leverage the BAS platform and community to present your products and
                      services to an engaged, knowledgeable audience. Demonstrate your
                      solutions at events and through BAS communication channels.
                    </p>
                  </div>
                </div>
              </section>

              {/* MEMBERSHIP FEE */}
              <section className="mb-10 border-t border-gray-100 pt-8">
                <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-4">
                  Annual Fee
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-1">
                  Corporate membership: <span className="font-semibold text-[#1a1a1a]">CHF 380 / year</span>
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Payable in CHF or Bitcoin.
                </p>
              </section>

              {/* CTA */}
              <section>
                <Link
                  href="/membership/corporations/register/"
                  className="inline-block bg-[#2a9d8f] text-white text-sm font-semibold px-6 py-3 hover:bg-[#218275] transition-colors"
                >
                  Join as a Corporate Member
                </Link>
              </section>
            </div>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
