import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivateMembershipPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar Navigation */}
            <aside className="md:w-56 flex-shrink-0">
              <nav>
                <h2 className="text-[#c75b4a] text-base mb-4 font-normal">
                  <Link href="/private" className="hover:underline">
                    membership
                  </Link>
                </h2>
                <ul className="space-y-2">
                  <li>
                    <span className="text-[#1a1a1a] text-xs font-semibold uppercase tracking-wider">
                      PRIVATE
                    </span>
                  </li>
                  <li>
                    <Link
                      href="/corporate"
                      className="text-gray-500 text-xs uppercase tracking-wider hover:text-[#c75b4a] transition-colors"
                    >
                      CORPORATE
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-corporate-members"
                      className="text-gray-500 text-xs uppercase tracking-wider hover:text-[#c75b4a] transition-colors"
                    >
                      OUR CORPORATE MEMBERS
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-2xl">
              <article className="prose prose-gray max-w-none">
                <h1 className="text-3xl md:text-4xl font-normal text-[#1a1a1a] mb-8">
                  New/Renew Membership (2024 - 2025 edition)
                </h1>

                <p className="text-[#666] leading-relaxed">
                  <strong className="text-[#1a1a1a]">How do I renew my membership?</strong>
                  <br />
                  Pay your membership fee to the Bitcoin Association Switzerland&apos;s wallet address:
                </p>

                <p className="text-[#1a1a1a] font-semibold break-all">
                  bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
                </p>

                <p className="text-[#666] leading-relaxed">
                  Once payment is confirmed on-chain, go to the membership form submission page:
                </p>

                <p>
                  <Link
                    href="/membership-form"
                    className="text-[#c75b4a] font-semibold hover:underline"
                  >
                    https://www.bitcoinassociation.ch/membership-form
                  </Link>
                </p>

                <p className="text-[#666] leading-relaxed">
                  Fill out the form in its entirety, entering your Transaction ID and, optionally, your Telegram handle to be added to the BAS members group. If possible, specify how many years of membership (minimum 1) you have paid for. The number of years of membership will be automatically calculated based on the amount of BTC paid.
                </p>

                <p className="text-[#666] leading-relaxed">
                  Within 7 days, we will send you a confirmation that your membership status has been confirmed, or - if we have any doubts - we may ask you to provide additional information.
                </p>

                <p className="text-[#1a1a1a] font-semibold">
                  No membership fees are returned if you fail to provide sufficient information.
                </p>

                <p className="text-[#1a1a1a] font-semibold mt-6">
                  What&apos;s the membership fee?
                </p>

                <p className="text-[#666] leading-relaxed">
                  The annual membership fee is CHF 21, payable in bitcoin on-chain (with secondary layer payment solutions coming soon).
                </p>

                <p className="text-[#1a1a1a] font-semibold mt-6">
                  What if I haven&apos;t been a member before?
                </p>

                <p className="text-[#666] leading-relaxed">
                  That&apos;s ok, we don&apos;t judge :-) you can follow the same process as outlined above. If we don&apos;t know you, chances are a little higher we ask for additional information.
                </p>

                <p className="text-[#1a1a1a] font-semibold mt-6">
                  What about corporate members?
                </p>

                <p className="text-[#666] leading-relaxed">
                  If you already are a corporate member (with your logo{" "}
                  <Link href="/our-corporate-members" className="text-[#c75b4a] hover:underline">
                    here
                  </Link>
                  ) and your membership is expired, you can complete the renewal payment and send us an email application with all the information indicated (Name, TransactionID, number of years paid etc.) at{" "}
                  <a
                    href="mailto:info@bitcoinassociation.ch"
                    className="text-[#c75b4a] hover:underline"
                  >
                    info@bitcoinassociation.ch
                  </a>
                  , the corporate membership fee is CHF 380.
                </p>

                <p className="text-[#666] leading-relaxed">
                  If you are not a corporate member yet, you can send an application to{" "}
                  <a
                    href="mailto:info@bitcoinassociation.ch"
                    className="text-[#c75b4a] hover:underline"
                  >
                    info@bitcoinassociation.ch
                  </a>{" "}
                  where you introduce your company and explain how you are connected to the Swiss ecosystem.
                </p>

                <p className="text-[#666] leading-relaxed">
                  You will hear back within 14 days whether you&apos;ve been accepted or not. Once you have received confirmation that you have been accepted, you will need to send the equivalent of at least CHF 380 to the Bitcoin Association Switzerland&apos;s wallet:
                </p>

                <p className="text-[#1a1a1a] font-semibold break-all">
                  bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
                </p>

                <p className="text-[#666] leading-relaxed">
                  followed by an email to the two addresses mentioned stating your Transaction ID.
                </p>

                <p className="text-[#666] leading-relaxed">
                  Once we confirm receipt of the funds, you can send us the logo to be added to the website.
                </p>

                <p className="text-[#666] leading-relaxed">
                  The process is also outlined{" "}
                  <Link href="/corporate" className="text-[#c75b4a] hover:underline">
                    here
                  </Link>
                  .
                </p>
              </article>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
