import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";

const membershipNavItems = [
  { label: "Private", href: "/private", active: false },
  { label: "Corporate", href: "/corporate", active: true },
  { label: "Our Corporate Members", href: "/our-corporate-members", active: false },
];

export default function CorporatePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Sidebar Navigation */}
            <aside className="md:w-48 flex-shrink-0">
              <h2 className="text-[#8b7355] text-lg font-light mb-4 font-serif italic">
                membership
              </h2>
              <nav className="space-y-2">
                {membershipNavItems.map((item) => (
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
              {/* Corporate Member Title */}
              <h1 className="text-[#8b7355] text-3xl md:text-4xl font-light font-serif mb-8">
                Corporate Member
              </h1>

              {/* How do I become a member? */}
              <section className="mb-6">
                <h2 className="text-gray-700 font-semibold text-sm mb-2">
                  How do I become a member?
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  To apply for membership, please send us a short email with your logo to{" "}
                  <a
                    href="mailto:info@bitcoinassociation.ch"
                    className="text-[#8b7355] hover:underline"
                  >
                    info@bitcoinassociation.ch
                  </a>{" "}
                  about your motivation, the company name and address.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Anyone is allowed to join. However, only members who reside in Switzerland are eligible to vote.
                </p>
              </section>

              {/* What's the membership fee? */}
              <section className="mb-6">
                <h2 className="text-gray-700 font-semibold text-sm mb-2">
                  What&apos;s the membership fee?
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The membership fee is 380 CHF in Bitcoin per calendar year.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  Payment of membership fees shall be made to Bitcoin Association Switzerland&apos;s wallet:
                </p>
                <p className="text-gray-700 font-semibold text-sm mt-2 break-all">
                  bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
                </p>
              </section>

              {/* What are the benefits of being a member? */}
              <section className="mb-8">
                <h2 className="text-gray-700 font-semibold text-sm mb-4">
                  What are the benefits of being a member?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">&#8226;</span>
                    <span className="text-gray-600 text-sm">Featured on our website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">&#8226;</span>
                    <span className="text-gray-600 text-sm">
                      Allowed to share some company-related news with our community in our Telegram chat groups
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">&#8226;</span>
                    <span className="text-gray-600 text-sm">Allowed to put our logo on your website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">&#8226;</span>
                    <span className="text-gray-600 text-sm">
                      Support the Bitcoin adoption, education and development
                    </span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
