import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import PageSidebar, { type SidebarItem } from "@/components/PageSidebar";

const membershipNavItems: SidebarItem[] = [
  { label: "Private", href: "/private" },
  { label: "Corporate", href: "/corporate", active: true },
  { label: "Our Corporate Members", href: "/our-corporate-members" },
];

export default function CorporatePage() {
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
                Corporate Member
              </h1>

              {/* BENEFITS OF CORPORATE MEMBERSHIP */}
              <section className="mb-10">
                <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-4">
                  Benefits of Corporate Membership
                </h2>
                <ul className="list-disc list-inside text-gray-600 text-sm leading-relaxed space-y-2 ml-2">
                  <li>Featured on the BAS website</li>
                  <li>Permission to share company-related news within our community (Telegram groups)</li>
                  <li>Permission to display the BAS logo on your website</li>
                  <li>Active support of Bitcoin adoption, education and development in Switzerland</li>
                </ul>
              </section>

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
                  Complete the corporate registration form:
                </p>
                <p className="mb-3">
                  <a
                    href="https://bas.webling.ch/forms/memberform/60a5c713fd0ec8a3d243"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2a9d8f] text-sm hover:underline break-all"
                  >
                    https://bas.webling.ch/forms/memberform/60a5c713fd0ec8a3d243
                  </a>
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  Please complete all required company and billing details carefully to ensure proper invoicing.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  You may optionally provide a Telegram username for inclusion in the BAS members group.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  We will review your application and confirm your membership by email.
                </p>

                {/* STEP 2 */}
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-3">
                  Step 2 &ndash; Receive Invoice
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  After confirmation, you will receive your annual corporate membership invoice.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  The annual fee is CHF 380, payable in CHF or BTC.
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
                  If paying in Bitcoin, please transfer the equivalent of CHF 380 on-chain to:
                </p>
                <p className="text-[#1a1a1a] text-sm font-semibold break-all mb-3">
                  bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  After confirmation on-chain:
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
                  <li>Update the TxID field in your organisation profile.</li>
                </ol>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  We will validate the transaction and confirm your membership activation.
                </p>

                {/* Payment in CHF */}
                <h4 className="text-sm font-bold text-[#1a1a1a] mb-2">
                  Payment in CHF
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Simply pay the issued QR-invoice.
                </p>
                <p className="text-[#1a1a1a] text-sm font-bold">
                  Membership fees are non-refundable once processed.
                </p>
              </section>

              {/* RENEW MEMBERSHIP */}
              <section>
                <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-4">
                  Renew Membership
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  To renew:
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
                    Settle your annual invoice:
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>BTC: Transfer the amount and update the TxID field in your profile.</li>
                      <li>CHF: Pay the QR-invoice.</li>
                    </ul>
                  </li>
                </ol>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your membership will be extended once payment has been validated.
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
