import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";

export const metadata = {
  title: 'Our Comment on "Designing a prudential treatment for cryptoassets" of the Basel Committee on Banking Supervision - Bitcoin Association Switzerland',
  description: "Bitcoin Association Switzerland's comment on the Basel Committee on Banking Supervision's discussion paper on the design of a prudential treatment for crypto-assets.",
};

export default function BaselCommitteeCommentPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Banner with City Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1584017859238-JP46VXGK5XY26VO0H5X2/basel.jpg?format=2500w"
            alt="Our Comment on Designing a prudential treatment for cryptoassets of the Basel Committee on Banking Supervision"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-2 text-[#c75b4a] font-semibold">
              A BRIGHT NEW DAWN FOR DIGITAL TRANSFERS, SOUND MONEY AND PERSONAL FREEDOM.
            </p>
            <p className="text-xs md:text-sm text-gray-300 mb-4">13 March 2020</p>
            <h1 className="text-lg md:text-xl lg:text-2xl font-medium tracking-wide uppercase max-w-4xl">
              OUR COMMENT ON &quot;DESIGNING A PRUDENTIAL TREATMENT FOR CRYPTOASSETS&quot; OF THE BASEL COMMITTEE
            </h1>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Author and Date */}
          <div className="text-center text-xs text-gray-500 uppercase tracking-wider mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31"
              className="hover:text-[#c75b4a]"
            >
              Luzius Meisser
            </Link>
          </div>

          {/* Article Body */}
          <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-700">
            <p className="mb-6">
              In December 2019 the{" "}
              <a
                href="https://www.bis.org/bcbs/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Basel Committee on Banking Supervision
              </a>{" "}
              published a{" "}
              <a
                href="https://www.bis.org/bcbs/publ/d490.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                discussion paper on the design of a prudential treatment for crypto-assets
              </a>{" "}
              and welcomed comments on its analyses and ideas. The comment submitted by the Bitcoin Association Switzerland is as following:
            </p>

            <p className="mb-6 font-medium">Dear Basel Committee</p>

            <p className="mb-6">
              Bitcoin Association Switzerland appreciates this opportunity to take part in your discussion of the prudential treatment of crypto assets. There is a worrying trend of our laws being increasingly shaped by international bodies without immediate democratic legitimacy. The invitation to take part in your decision-taking is a step towards countering this trend and we encourage you to further involve the public in the future.
            </p>

            <p className="mb-6">
              The capital requirements contemplated on page 11 of the discussion paper are absurdly restrictive. If such measures were actually implemented, we would take this as a strong hint that your organization has fallen victim to regulatory capture and that you are no longer acting in the best interest of the people. In their contemplated extent, these measures might even violate the Swiss constitutional principle of economic freedom, as they would essentially prohibit banking with Bitcoin. If you want to have some control over the risks associated with crypto currencies, a more sensible strategy would be to make it as attractive as possible for users to store their Bitcoins with banks. There, they could be subjected to all kinds of prudential measures and regulatory scrutiny.
            </p>

            <p className="mb-6">
              To illustrate the absurdity of the contemplated requirements, take the example of a bank accepting a deposit of a Bitcoin worth 5&apos;000$ from a client. Even if the bank stores that Bitcoin securely in its own crypto vault, it would have to raise an additional 5000$ of equity that sits idly in a bank account to preserve its capital ratio, despite there being no relevant risk. If the bank has one Bitcoin and owes one Bitcoin, there is no market risk, no liquidity risk, and no counterparty risk. The remaining risk of theft or accidental loss is not what you are tasked with regulating and thus not relevant in this context. Thus, there are no economic grounds to demand any additional capital at all in this use case, but instead your &quot;illustrative example&quot; proposes to apply the most strict requirements conceivable!
            </p>

            <p className="mb-6">
              Similarly, it makes no sense to disallow banks from accepting Bitcoin as a collateral. A more sensible treatment would be to actually follow your own principle of &quot;same risk, same rules&quot; and to simply apply the existing rules of similarly volatile assets. If - for example - Tesla shares and Bitcoin have about the same volatility, then they both should face the same requirements when used as a collateral. Any deviation from your own stated principle of &quot;same risks, same rules&quot; in this matter should again be seen as a strong hint that you are not acting in our best interest.
            </p>

            <p className="mb-6">
              We suggest you assist our banking system in embracing crypto-currencies instead of trying to slow down adoption out of false fears. That would make it much more likely that we end up in an equilibrium where this promising technology is used for the good and the benefit of everyone. Pushing crypto into the dark does not help anyone.
            </p>

            <p className="mb-6">
              For detailed answers to your questions, we refer to the more extensive and excellent comment filed by Blockchain Federation Switzerland. In the meantime, we will continue to advance the vision of free and open finance driven by blockchain technology. As Swiss columnist Constantin Seibt recently noted:
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-gray-300 pl-6 my-8 italic text-gray-600">
              <p className="mb-2">&quot;In times of chaos, good work is the truly subversive act.&quot;</p>
              <footer className="text-sm not-italic">— Constantin Seibt</footer>
            </blockquote>
          </article>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Tagged:{" "}
              <Link
                href="/bitcoin-association-switzerland/tag/Regulation"
                className="text-[#c75b4a] hover:underline"
              >
                Regulation
              </Link>
            </p>
          </div>

          {/* Share */}
          <div className="flex items-center gap-6 mt-6 text-xs text-gray-500">
            <ShareButton title="Our Comment on Designing a Prudential Treatment for Cryptoassets of the Basel Committee" />
          </div>

          {/* Newer/Older Posts Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-start text-xs">
            <div className="max-w-[45%]">
              <p className="text-gray-500 uppercase tracking-wider mb-1">Newer Post</p>
              <Link
                href="/bitcoin-association-switzerland/2020/4/9/our-comment-on-gwv-finma-adjustment-for-finsa-finia"
                className="text-[#c75b4a] hover:underline"
              >
                Our Comment on GWV-FINMA adjustment for FinSA / FinIA
              </Link>
            </div>
            <div className="max-w-[45%] text-right">
              <p className="text-gray-500 uppercase tracking-wider mb-1">Older Post</p>
              <Link
                href="/bitcoin-association-switzerland/2019/12/3/crypto-valley-association-issues-questionable-recommendations"
                className="text-[#c75b4a] hover:underline"
              >
                Crypto Valley Association Issues Questionable Recommendations
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
