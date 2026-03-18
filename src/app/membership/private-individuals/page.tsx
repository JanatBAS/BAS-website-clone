import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import PageSidebar, { type SidebarItem } from "@/components/PageSidebar";
import Link from "next/link";

const membershipNavItems: SidebarItem[] = [
  { label: "Private Individuals", href: "/membership/private-individuals", active: true },
  { label: "Corporations", href: "/membership/corporations" },
  { label: "Our Corporate Members", href: "/our-corporate-members" },
];

export default function PrivateIndividualsPage() {
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
                Private Individuals
              </h1>

              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Joining the Bitcoin Association Switzerland as a private member connects you with
                Switzerland's most active Bitcoin community. Whether you are just getting started
                or a seasoned Bitcoiner, membership gives you the tools, connections, and knowledge
                to go further.
              </p>

              {/* BENEFITS */}
              <section className="mb-10">
                <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-6">
                  Member Benefits
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Find a Job in the Bitcoin Industry
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Connect directly with BAS corporate members and companies active in the
                      Bitcoin space. Membership opens doors to career opportunities across
                      Switzerland's growing Bitcoin ecosystem.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Connect with Fellow Bitcoiners
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Meet and network with professionals working in the Bitcoin industry across
                      Switzerland. Build lasting relationships with developers, entrepreneurs,
                      researchers, and advocates who share your passion for Bitcoin.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Membership Badge
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Display your BAS membership badge on your social media profiles and
                      personal website. Signal your commitment to Bitcoin and your membership
                      of Switzerland's leading Bitcoin organisation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Learn About Bitcoin
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Deepen your understanding of Bitcoin technology, real-world applications,
                      and the latest projects being built in the ecosystem. Access courses and
                      curated educational resources produced by the BAS and its network.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Stay Informed
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Keep up with the latest developments across regulatory, legal, and technical
                      topics relevant to Bitcoin in Switzerland and beyond. Members receive timely
                      updates and insights from experts in each area.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                      Join Working Groups
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Get actively involved by participating in BAS Working Groups. Contribute
                      to shaping Bitcoin policy, education initiatives, and community projects
                      alongside other engaged members.
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
                  Private membership: <span className="font-semibold text-[#1a1a1a]">CHF 21 / year</span>
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Payable in CHF or Bitcoin.
                </p>
              </section>

              {/* CTA */}
              <section>
                <Link
                  href="/membership/private-individuals/register/"
                  className="inline-block bg-[#2a9d8f] text-white text-sm font-semibold px-6 py-3 hover:bg-[#218275] transition-colors"
                >
                  Join as a Private Member
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
