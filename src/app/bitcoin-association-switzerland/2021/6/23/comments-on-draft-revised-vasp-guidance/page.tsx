import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance - Bitcoin Association Switzerland",
  description:
    "The Financial Action Task Force has recently published a revised draft for VASP guidance. Once finalised, this guidance will likely become de-facto law in numerous countries, so it is very important to get the guidance right.",
};

export default function VASPGuidanceCommentsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1625317027225-0V2QI222IZBXZV25EUYN/april.jpg?format=2500w"
            alt="Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-white/90">
                A Swiss non-profit association for digital capital, sound money and personal freedom
              </p>
              <p className="text-sm md:text-base mb-2">20 April 2021</p>
              <p className="text-sm md:text-base">
                <Link
                  href="/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31"
                  className="hover:underline"
                >
                  Luzius Meisser
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 tracking-wide uppercase text-center">
            Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance
          </h1>

          {/* Author and Date */}
          <div className="text-center text-xs text-gray-500 uppercase tracking-wider mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31"
              className="hover:text-[#c75b4a]"
            >
              Luzius Meisser
            </Link>
            <span className="mx-2">|</span>
            <Link
              href="/bitcoin-association-switzerland/2021/6/23/comments-on-draft-revised-vasp-guidance"
              className="hover:text-[#c75b4a]"
            >
              20 April 2021
            </Link>
          </div>

          {/* Article Body */}
          <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-700">
            <p className="mb-6 italic">
              The Financial Action Task Force has recently published a{" "}
              <a
                href="http://www.fatf-gafi.org/publications/fatfrecommendations/documents/public-consultation-guidance-vasp.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                revised draft for VASP guidance
              </a>
              . Once finalised, this &quot;guidance&quot; will likely become de-facto law in numerous countries, so it is very important to get the guidance right. The Bitcoin Association Switzerland is hence providing constructive feedback and suggests seven simple principles, the FATF&apos;s guidance could adhere to, benefitting society and innovation while keeping negative side effects to a minimum. The{" "}
              <a
                href="https://github.com/meisserecon/www/raw/gh-pages/2021-04-20%20FATF%20VASP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                original response can be found here
              </a>{" "}
              and is worth a read for its footnotes alone (which are not part of this blog post).
            </p>

            <p className="mb-6 font-semibold">
              Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance
            </p>

            <p className="mb-6">Dear Financial Action Task Force</p>

            <p className="mb-6">
              We greatly appreciate the opportunity to comment on the draft guidance on virtual assets. So far, the Financial Action Task Force&apos;s (FATF) responses to crypto finance appeared to be somewhat rushed, starting with an ambiguous definition of &quot;virtual assets&quot; and culminating with the latest ideas to stretch the scope of the term &quot;Virtual Asset Service Providers&quot; (VASP) beyond financial intermediation. We hope that we can help to move the discussion towards a more effective and actually risk-based approach towards money laundering and terrorist financing in Decentralized Finance (DeFi). We propose a number of principles and alternative ideas that are designed to leverage blockchain technology instead of eroding the benefits of disintermediation. Finally, we also have some important inputs to the application of the travel rule.
            </p>

            <p className="mb-6 font-semibold">Proportionality and Technology Neutrality</p>

            <p className="mb-6">
              Regulations in financial markets, whether directly applicable or indirectly stated for further implementation in national laws must comply with the general principles of proportionality and technology neutrality. (i) Proportionality means that the proposed regulations are suitable to achieve the envisaged objectives, that the degree of intervention into private businesses does not go further than required for the realization of the objectives, and that the burden imposed by the regulatory intervention stands in a reasonable proportion to the prevented damage. (ii) Technology neutrality attempts at implementing the released regulations in a way being not dependent upon the actual technology but applicable for all comparable business models irrespective of the chosen technology (no. 41). Partly, reference is also made to the notion of functional approach (nos. 22 lit. c and 48).
            </p>

            <p className="mb-6">
              While money laundering is a crime of general application in many, if not most, jurisdictions, anti money laundering (AML) regulations imposing administrative and organizational obligations apply only to professional financial sector entities. They have been extended to non-financial sector actors solely with great reluctance and solely if it was proven that that sector was particularly exposed to money laundering. The reasons for this reluctance are obvious: enforcing administrative due diligence duties and obligations outside of a sector which already is subject to, and familiar with, regulations is nearly impossible. Furthermore, expanding the scope of AML regulations threatens to overload supervisory authorities and to adversely deflect regulatory resources.
            </p>

            <p className="mb-6">
              So far, AML regulations were to be complied with by those financial intermediaries that had the actual and legally relevant control of and power over certain assets owned by third persons. This control or power is important since thereupon the assets can be transferred to other beneficial owners. In the introduction of the latest FATF update, acting &quot;on behalf&quot; of someone is still a defining criterion for VASPs, but later ignored in an attempt to squeeze operators of DApps and other tangentially involved parties into the definition of &quot;VASP&quot;.
            </p>

            <p className="mb-6">
              The fundamental problem the FATF faces is that blockchain-technology enables disintermediation, but its so-called recommendations rest on the assumption that most financial transactions are done through financial intermediaries. Therefore, the FATF&apos;s initial reaction of trying to expand the scope of its AML recommendations beyond financial institutions is comprehensible, but misguided. Rather the scope of application should coincide with financial markets regulations.
            </p>

            <p className="mb-6 font-semibold">Open DApps only pose minimal risks</p>

            <p className="mb-6">
              The most prominently featured piece of evidence the FATF provides for the necessity of its intentionally &quot;expansive&quot; regulation is the wannacry ransomware attack. According to United States sources, this attack originated in North Korea and caused billions of dollars in damage. While the motivation behind the authors might not have been financial, they nonetheless succeeded in collecting Bitcoins worth 86,000 USD in ransom. However, as the FATF indicates, their attempt at layering the crypto assets failed. This is owed to a defining characteristic of transactions on public blockchains: their transactions are anonymous, but can be publicly tracked. By definition, they are ill-suited to laundering money, at least vis-a-vis a competent observer.
            </p>

            <p className="mb-6">
              The most economically successful example of a DApp that would be adversely affected by the proposed recommendations might be Uniswap, a decentralized exchange that currently enjoys considerable trading volume (a few billions per day) and fee revenues (about a billion per year). Imposing the contemplated rules on the team behind the project would likely destroy Uniswap and the whole ecosystem around it. It thrives on openness and accessibility. Anyone, including other DApps, can create new trading pairs, provide liquidity, and trade on it. The FATF&apos;s implicit assumption that DApps like Uniswap can somehow be transformed into a financial intermediary without destroying their business model is a misjudgment.
            </p>

            <p className="mb-6">
              Due to Uniswap being based on a public blockchain, all transactions are public and every trade can be tracked. For example, consider transaction 0x22e7...d120. Here, the owner of address 0xf5e2...b2dc swapped 5000 units of the dollar-pegged stablecoin DAI into 2.9 Ether. This transaction does not obfuscate any source of funds. All it does is convert a balance denominated in DAI into a balance denominated in ETH sitting on the same address. Any competent intermediary that receives these Ether can identify their source and can use that information to verify the plausibility of the &quot;source of funds&quot; declaration of its client. That&apos;s why decentralized exchanges like Uniswap and other DApps will not be of much help to criminals like the author of wannacry. If any regulatory action is necessary at this point in time (which is doubtful), it should be aimed at preserving the openness and transparency of blockchain technology.
            </p>

            <p className="mb-6 font-semibold">Seven Principles</p>

            <p className="mb-6">
              We suggest that the FATF includes some guidance on how the unintended side-effects of its recommendations can be mitigated. In particular, the following principles might prove helpful in guiding national regulators:
            </p>

            <p className="mb-4 italic">
              1. Regulation must refrain from imposing obligations on persons that cannot fulfill these obligations.
            </p>

            <p className="mb-6">
              As a corollary, regulation should not force entities that do not engage in financial intermediation to become financial intermediaries. Forcing DApps such as Uniswap or DAI to become financial intermediaries by definition destroys the foundations of their and any other business model built on the benefits of disintermediation. The FATF unconvincingly assumes that the purpose of giving up control in disintermediated setups is to circumvent regulation, when in fact disintermediation greatly increases the security and dependability of financial services.
            </p>

            <p className="mb-4 italic">
              2. Regulation imposed on a business should be related to its business model.
            </p>

            <p className="mb-6">
              For example, a business that processes transaction data without having access to any client funds might be subjected to data retention rules, but it should not have any obligations to freeze or otherwise interfere with client assets if it cannot technically do so. This principle is already applied to operators of network nodes and deserves expansion. Such a rule could greatly increase legal certainty and thereby reduce the legal risks of testing new business models.
            </p>

            <p className="mb-4 italic">
              3. The issuance of securities is not intermediation.
            </p>

            <p className="mb-6">
              Box 3 in the FATF draft states that the act of issuing virtual assets makes a business a VASP. In the case of crypto assets representing securities, this is inconsistent with traditional FATF rules. The FATF should clarify that equally to the issuance of traditional securities such as bonds or shares, the issuance of virtual assets that serve an investment purpose (and not a payment purpose) does not constitute financial intermediation per se. However, third parties supporting the issuance process might qualify as financial intermediaries or VASPs, just like in case of traditional financial instruments.
            </p>

            <p className="mb-4 italic">
              4. Regulation should not introduce analog steps into otherwise digital processes.
            </p>

            <p className="mb-6">
              For example, an exclusively digitally acting financial intermediary should be allowed to entirely rely on digital data in its know-your-customer (KYC) processes.
            </p>

            <p className="mb-4 italic">
              5. Regulation should not introduce manual steps into otherwise automated processes.
            </p>

            <p className="mb-6">
              The introduction of manual verification steps into otherwise fully automated processes destroys the scalability of otherwise scalable business models, thereby harming economic growth.
            </p>

            <p className="mb-4 italic">
              6. Allow financial intermediaries to collaborate when identifying clients.
            </p>

            <p className="mb-6">
              In Switzerland and other countries, the law requires every financial intermediary to repeat the whole KYC process for every client, even when other financial intermediaries have identified the same client immediately before that. So in a setup as described in Box 4 of the updated FATF draft, a user would have to complete all KYC forms multiple times as the setup involves multiple VASPs. This puts decentralized setups at an unjustifiable disadvantage compared to centralized service providers. In order to avoid this consequence, FATF should encourage national regulators to allow financial intermediaries to share client information data and to rely on third party identity proofs instead of having each intermediary repeating the same steps again for the same client.
            </p>

            <p className="mb-4 italic">
              7. Regulation should recognize the reduced risk of public transactions and therefore aim at keeping DApp transactions easily traceable.
            </p>

            <p className="mb-6">
              The FATF claims to be strongly committed to a &quot;risk-based approach&quot;, even putting it into the title of its draft guidance. Recognizing that publicly visible transactions pose a much lower money-laundering risk than private transactions, the FATF should refrain from applying the same regulation to both types of transactions. Recognizing that public transactions are less suited for money laundering and that transparency and accountability are desirable public goods, regulators should embrace open and transparent systems instead of pushing them into traditional, opaque setups.
            </p>

            <p className="mb-6">
              Based on these seven guiding principles, one can also answer the FATF&apos;s questions on how peer-to-peer transactions should be handled: namely by recommending that technical facilitators of financial transactions should ensure that the transactions they facilitate can be traced back when the transacted funds finally arrive at a financial intermediary. Depending on the involved parties and systems along the way, this could imply data retention obligations and legal foundations to allow better sharing of collected data among and with financial intermediaries. For initiators of DApps and other decentralized systems, this could mean that they should provide financial intermediaries and regulators with the documentation, data, and tools necessary to monitor and trace the relevant transactions.
            </p>

            <p className="mb-6 font-semibold">Travel Rule</p>

            <p className="mb-6">
              With regards to the travel rule, the recommended approach of the FATF to apply it in a technology-neutral way is the right way forward. Also, the idea of letting the client provide the missing information in case of payments from and to non-custodial wallets seems reasonable and fit for purpose. However, it would be helpful to clearly indicate the bounds of the travel rule. The travel rule has been designed for payment instructions, and not for trade instructions and other types of instructions where the payment is not the primary purpose.
            </p>

            <p className="mb-6">
              For example, when executing a Bitcoin transaction, there is always also a small payment flow in the form of a transaction fee and it should be made clear that the beneficial owner of the transaction fee does not need to be identified. The deeper reason for why this makes sense is that the client cannot choose the recipient of the transaction fee, making it ill-suited for money laundering or terrorist financing even if it was large. While the risk of regulators mistakenly applying the travel rule to transaction fees appears to be marginal, there are other types of transactions where that risk is higher, in particular swaps on decentralized exchanges.
            </p>

            <p className="mb-6">
              Just like traditional banks are not required to identify the beneficial owner on the other side of a trade when a client buys some IBM shares on the stock market, virtual asset service providers must not be required to identify the counterparty of a trade when they swap crypto assets through a decentralized exchange on behalf of a client. In both cases, with traditional stock markets and with decentralized exchanges, there is neither a need nor a legal basis to apply the travel rule. In both cases, the transactions are not suited for money laundering or terrorist financing as the counterparty of the trade is unknown to the client and there is no net transfer of value, only a change in denomination.
            </p>

            <p className="mb-6">
              It should be made clear by the FATF that the travel rule is only to be applied for transactions that serve the purpose of transferring value to a specific beneficiary known by the client. Transactions, for which the client cannot specify the beneficiary ex ante, are by definition not suitable to funnel illicit funds to a specific counterparty. Therefore, there is no necessity to identify the counterparty for the purpose of combating money laundering or terrorist financing. This principle applies to the transaction fees of crypto assets, to swaps through decentralized exchanges, and to many other transactions facilitated by DApps.
            </p>

            <p className="mb-6">
              The SBF is open to support the FATF in adopting and further refining the recommendations presented herein. We strongly believe that blockchain technology can be an enabler for building a more open, more free, and more transparent financial system: an &quot;Internet of Finance&quot;. The influence of the FATF on how fast such a vision can be realized and what such an Internet of Finance could finally look like cannot be understated. With great power comes great responsibility; therefore, we kindly ask you to carefully reevaluate your draft with regards to the issues we raised.
            </p>

            <p className="mb-4">Best regards</p>

            <p className="mb-2">Bitcoin Association Switzerland</p>

            <p className="mb-2">Lucas Betschart</p>

            <p className="mb-2">Roger Darin</p>

            <p className="mb-6">Luzius Meisser</p>
          </article>

          {/* Likes and Share */}
          <div className="flex items-center gap-6 mt-8 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              0 Likes
            </span>
            <ShareButton title="Comments of Bitcoin Association Switzerland on the draft revised VASP Guidance" />
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Comments (1)</h3>

            {/* Comment */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                  <Image
                    src="https://assets.squarespace.com/universal/images-v6/default-avatar.png"
                    alt="Michael Bruggler"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900 text-sm">Michael Bruggler</span>
                    <span className="text-xs text-gray-500">4 years ago</span>
                    <span className="text-xs text-gray-400">Pending</span>
                    <span className="text-xs text-gray-400">Awaiting Moderation</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Thanks for your explications. Makes sense. Regarding Swiss Regulation it might make sense to have a closer look at Art. 11 &amp; 12 of GwV-FINMA outlining exceptions or reduced due diligence requirement when it comes down to buy goods &amp; services.
                  </p>
                  <p className="text-sm text-gray-700 mb-2">Kind regards</p>
                  <p className="text-sm text-gray-700 mb-2">Michael</p>
                  <p className="text-sm text-gray-700">
                    <a
                      href="https://www.FinTechWerkstatt.ch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c75b4a] hover:underline"
                    >
                      www.FinTechWerkstatt.ch
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newer/Older Posts Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center text-xs">
            <Link
              href="/bitcoin-association-switzerland/2021/7/3/comments-of-bitcoin-association-switzerland-on-the-draft-revised-vasp-guidance"
              className="text-gray-600 hover:text-[#c75b4a] uppercase tracking-wider"
            >
              Newer Post{" "}
              <span className="font-normal normal-case block mt-1">
                Prudential Treatment of Cryptoasset Exposures
              </span>
            </Link>
            <Link
              href="/bitcoin-association-switzerland/on-the-risk-assessment-for-global-stablecoins-of-the-g20s-financial-stability-board"
              className="text-gray-600 hover:text-[#c75b4a] uppercase tracking-wider text-right"
            >
              Older Post{" "}
              <span className="font-normal normal-case block mt-1">
                Our Comment on the risk assessment for global Stablecoins of the G20&apos;s Financial Stability Board
              </span>
            </Link>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
