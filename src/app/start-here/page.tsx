import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function StartHerePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-3xl md:text-4xl font-light text-[#1a1a1a] font-serif mb-4">
            Start Here
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-12">
            New to Bitcoin? This is the right place. Work through the sections below at your
            own pace — from the basics to safely storing your first Bitcoin.
          </p>

          {/* WHAT IS BITCOIN */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-4">
              What Is Bitcoin?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Bitcoin is a decentralised digital currency — the first of its kind. Created in
              2009 by the pseudonymous Satoshi Nakamoto, it operates without any central
              authority: no government, no bank, no company controls it.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Transactions are verified by a global network of computers and recorded
              permanently on a public ledger called the blockchain. The rules of the network
              are enforced by software, not by people.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              There will only ever be 21 million Bitcoin — a fixed supply hardcoded into the
              protocol. This scarcity is one of Bitcoin's most important properties.
            </p>
          </section>

          {/* WHY IT MATTERS */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-4">
              Why It Matters
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Sound Money
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Traditional currencies lose purchasing power over time as more money is
                  printed. Bitcoin's fixed supply makes inflation impossible by design —
                  no authority can devalue it.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Financial Sovereignty
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With Bitcoin, you can hold and transfer value globally without needing a
                  bank account or permission from any institution. You are the sole custodian
                  of your own money.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Censorship Resistance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No one can freeze your Bitcoin or block a transaction. The network is
                  open to anyone and has operated continuously since 2009.
                </p>
              </div>
            </div>
          </section>

          {/* COMMON PITFALLS & MISCONCEPTIONS */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-4">
              Common Pitfalls &amp; Misconceptions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  &ldquo;Bitcoin is just one of thousands of cryptos&rdquo;
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bitcoin is fundamentally different from other cryptocurrencies. It has the
                  longest track record, the most decentralised network, and the only credible
                  claim to being digital sound money. Most other projects are unrelated
                  speculative assets.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Leaving Bitcoin on an exchange
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If you don't control your private keys, you don't own your Bitcoin. Exchanges
                  can be hacked, go bankrupt, or freeze withdrawals. Always move meaningful
                  amounts to your own wallet.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Trying to time the market
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Most beginners lose money trying to trade in and out. A simple strategy of
                  regular purchases over time (dollar-cost averaging) has historically
                  outperformed active trading for most people.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  &ldquo;I missed it&rdquo;
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This has been said at every price level throughout Bitcoin's history. Bitcoin
                  adoption is still in early stages globally — the opportunity is not over.
                </p>
              </div>
            </div>
          </section>

          {/* HOW IT ACTUALLY WORKS */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-4">
              How It Actually Works
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  The Blockchain
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bitcoin transactions are grouped into blocks and added to a chain, one after
                  another. Each block references the one before it, making the history
                  tamper-proof. This ledger is replicated across thousands of nodes worldwide.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Mining &amp; Proof of Work
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  New transactions are validated by miners — computers competing to solve a
                  mathematical puzzle. The winner adds the next block and earns newly issued
                  Bitcoin as a reward. This process, called Proof of Work, secures the network
                  and controls how new Bitcoin enters circulation.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Public &amp; Private Keys
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your Bitcoin is locked to a public address (like an account number) and can
                  only be spent with the corresponding private key (like a password). Whoever
                  holds the private key controls the Bitcoin — guard it accordingly.
                </p>
              </div>
            </div>
          </section>

          {/* HOW TO STORE IT SAFELY */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-4">
              How to Store It Safely
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Software Wallets
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A good starting point for small amounts. Apps like{" "}
                  <a href="https://relai.app/" target="_blank" rel="noopener noreferrer" className="text-[#2a9d8f] hover:underline">Relai</a>{" "}
                  or{" "}
                  <a href="https://pocketbitcoin.com/" target="_blank" rel="noopener noreferrer" className="text-[#2a9d8f] hover:underline">Pocket Bitcoin</a>{" "}
                  give you full control of your keys on your phone.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Hardware Wallets
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  For larger amounts, a hardware wallet stores your private keys offline and
                  away from hackers. BAS corporate member{" "}
                  <a href="https://shiftcrypto.ch/" target="_blank" rel="noopener noreferrer" className="text-[#2a9d8f] hover:underline">BitBox</a>{" "}
                  makes a trusted Swiss-designed hardware wallet purpose-built for Bitcoin.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Your Seed Phrase
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  When you set up a wallet, you'll receive a 12 or 24-word seed phrase. This
                  is the master backup for your Bitcoin. Write it down on paper and store it
                  somewhere safe and private — never take a screenshot or store it digitally.
                  Anyone with your seed phrase can access your funds.
                </p>
              </div>
            </div>
          </section>

          {/* BITCOIN IN SWITZERLAND */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-4">
              Bitcoin in Switzerland: Tax &amp; Legal
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Switzerland has one of the most developed regulatory environments for Bitcoin
              in the world. Here are the key points for Swiss residents:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Taxation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  In Switzerland, Bitcoin held by private individuals is generally treated as
                  a movable asset. Capital gains from private trading are typically tax-free
                  for most individuals, but Bitcoin holdings must be declared as wealth on
                  your annual tax return. Rules vary by canton — always consult a tax advisor
                  for your specific situation.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Legal Status
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bitcoin is fully legal in Switzerland. The Swiss Financial Market
                  Supervisory Authority (FINMA) provides guidelines on crypto assets, and
                  Switzerland's "Crypto Valley" in Zug is home to many of the world's
                  leading Bitcoin and blockchain companies.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Further Reading
                </h3>
                <ul className="text-gray-600 text-sm leading-relaxed space-y-1">
                  <li>
                    <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2a9d8f] hover:underline">
                      Bitcoin Whitepaper
                    </a>{" "}
                    — the original 9-page paper by Satoshi Nakamoto
                  </li>
                  <li>
                    <a href="https://www.estv.admin.ch/" target="_blank" rel="noopener noreferrer" className="text-[#2a9d8f] hover:underline">
                      Swiss Federal Tax Administration (ESTV)
                    </a>{" "}
                    — official guidance on crypto taxation
                  </li>
                  <li>
                    <a href="https://www.finma.ch/en/" target="_blank" rel="noopener noreferrer" className="text-[#2a9d8f] hover:underline">
                      FINMA
                    </a>{" "}
                    — Swiss financial regulator's position on crypto assets
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* LOCAL COMMUNITIES */}
          <section className="mb-12">
            <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-4">
              Swiss Bitcoin Communities
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Switzerland has an active and welcoming Bitcoin community. Here's where to
              connect with people in person and online:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Bitcoin Association Switzerland
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  That's us. We organise regular meetups across Switzerland, run working
                  groups, and connect individuals and companies around Bitcoin. Check our{" "}
                  <Link href="/meetups-events" className="text-[#2a9d8f] hover:underline">
                    events page
                  </Link>{" "}
                  for upcoming gatherings.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wide mb-1">
                  Partner Organisations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The BAS works alongside other Swiss organisations dedicated to Bitcoin and
                  sound money. See the full list on our{" "}
                  <Link href="/our-corporate-members" className="text-[#2a9d8f] hover:underline">
                    members page
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/meetups-events"
              className="inline-block bg-[#2a9d8f] text-white text-sm font-semibold px-6 py-3 hover:bg-[#218275] transition-colors"
            >
              Attend a Meetup
            </Link>
            <Link
              href="/membership/private-individuals"
              className="inline-block border border-[#2a9d8f] text-[#2a9d8f] text-sm font-semibold px-6 py-3 hover:bg-[#2a9d8f] hover:text-white transition-colors"
            >
              Become a Member
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
