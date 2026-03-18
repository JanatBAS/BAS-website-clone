import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import PageSidebar, { type SidebarItem } from "@/components/PageSidebar";

const membershipNavItems: SidebarItem[] = [
  { label: "Private Individuals", href: "/membership/private-individuals", active: true },
  { label: "Corporations", href: "/membership/corporations" },
  { label: "Our Corporate Members", href: "/our-corporate-members" },
];

export default function PrivateMembershipPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <PageSidebar
              title="membership"
              titleHref="/private"
              items={membershipNavItems}
              titleClassName="text-[#2a9d8f]"
            />

            {/* Main Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-light text-[#1a1a1a] font-serif mb-8">
                Private Member
              </h1>

              {/* NEW MEMBERSHIP */}
              <section className="mb-10">
                <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-4">
                  New Membership
                </h2>

                {/* STEP 1 */}
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-3">
                  Step 1 &ndash; Register
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-1">
                  Complete the online registration form:
                </p>
                <p className="mb-3">
                  <a
                    href="https://bas.webling.ch/forms/memberform/f498cc5816d258744c98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2a9d8f] text-sm hover:underline break-all"
                  >
                    https://bas.webling.ch/forms/memberform/f498cc5816d258744c98
                  </a>
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  Please fill in all required fields.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  If you would like to join the BAS members Telegram group, you may optionally provide your Telegram username.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  We will review your application and confirm your membership by email.
                </p>

                {/* STEP 2 */}
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-3">
                  Step 2 &ndash; Receive Invoice
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  After confirmation, you will receive your annual membership invoice via email.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  You may pay your membership fee in CHF or BTC.
                </p>

                {/* STEP 3 */}
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-3">
                  Step 3 &ndash; Payment
                </h3>

                {/* Payment in BTC */}
                <h4 className="text-sm font-bold text-[#1a1a1a] mb-2">
                  Payment in BTC
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  If you choose to pay in Bitcoin, please send the equivalent of CHF 21 (according to the invoice amount) on-chain to the official Bitcoin Association Switzerland wallet:
                </p>
                <p className="text-[#1a1a1a] text-sm font-semibold break-all mb-3">
                  bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  After your transaction has been confirmed on-chain:
                </p>
                <ol className="list-decimal list-inside text-gray-600 text-sm leading-relaxed mb-3 ml-4 space-y-1">
                  <li>
                    Log in to the member portal:{" "}
                    <a
                      href="https://bas.webling.ch/portal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2a9d8f] hover:underline"
                    >
                      https://bas.webling.ch/portal
                    </a>
                  </li>
                  <li>Update the TxID field in your profile with the transaction ID of your payment.</li>
                </ol>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  We will validate the transaction and confirm your membership activation.
                </p>

                {/* Payment in CHF */}
                <h4 className="text-sm font-bold text-[#1a1a1a] mb-2">
                  Payment in CHF
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  If paying in CHF, simply settle the invoice using the provided QR-invoice.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Please ensure that all required information is provided correctly. Membership fees cannot be refunded once processed.
                </p>
              </section>

              {/* RENEW MEMBERSHIP */}
              <section>
                <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-4">
                  Renew Membership
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  To renew your membership:
                </p>
                <ol className="list-decimal list-inside text-gray-600 text-sm leading-relaxed ml-4 space-y-2 mb-3">
                  <li>
                    Log in to the member portal:{" "}
                    <a
                      href="https://bas.webling.ch/portal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2a9d8f] hover:underline"
                    >
                      https://bas.webling.ch/portal
                    </a>
                  </li>
                  <li>
                    Pay your annual invoice:
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>BTC: Transfer the amount in BTC and update the TxID field in your profile.</li>
                      <li>CHF: Pay the issued QR-invoice.</li>
                    </ul>
                  </li>
                </ol>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Once payment is validated, your membership will be extended automatically.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
