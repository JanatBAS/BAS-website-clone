import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Latest Regulatory Threat - Bitcoin Association Switzerland",
  description:
    "The Swiss government has proposed a law that inadvertently threatens Switzerland's excellent position in the international race for becoming the preferred jurisdiction for crypto startups.",
};

export default function TheLatestRegulatoryThreatPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          {/* Background Image */}
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1520018401057-PP4IGOKSSYDZZHRO7R8O/threat.jpg?format=2500w"
            alt="The Latest Regulatory Threat"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#2a8a8a]/80" />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-sm md:text-base uppercase tracking-[0.3em] font-light mb-6 max-w-4xl">
              A BRIGHT NEW DAWN FOR DIGITAL TRANSFERS: SOUND MONEY AND PERSONAL FREEDOM.
            </h1>
            <p className="text-white text-sm mb-2">3 March 2018</p>
            <p className="text-white text-xs uppercase tracking-wider">
              THE LATEST REGULATORY THREAT
            </p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Author and Date Header */}
          <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider mb-2">
            <Link
              href="/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31"
              className="hover:text-[#c75b4a]"
            >
              Luzius Meisser
            </Link>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <Link
              href="/bitcoin-association-switzerland/2018/3/2/the-latest-regulatory-threat"
              className="hover:text-[#c75b4a]"
            >
              3 March 2018
            </Link>
            <span>|</span>
            <Link
              href="/bitcoin-association-switzerland/category/Opinion"
              className="hover:text-[#c75b4a]"
            >
              Opinion
            </Link>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-8 leading-tight">
            The Latest Regulatory Threat
          </h2>

          {/* Second Author/Date Block */}
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
            <Link
              href="/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31"
              className="hover:text-[#c75b4a]"
            >
              Luzius Meisser
            </Link>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link
              href="/bitcoin-association-switzerland/2018/3/2/the-latest-regulatory-threat"
              className="hover:text-[#c75b4a]"
            >
              3 March 2018
            </Link>
            <span>|</span>
            <Link
              href="/bitcoin-association-switzerland/category/Opinion"
              className="hover:text-[#c75b4a]"
            >
              Opinion
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              The Swiss government has{" "}
              <a
                href="https://www.admin.ch/gov/en/start/documentation/media-releases.msg-id-69518.html"
                className="text-[#c75b4a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                proposed a law
              </a>{" "}
              that inadvertently threatens Switzerland&apos;s excellent position in the
              international race for becoming the preferred jurisdiction for crypto
              startups. In particular, the federal council drafted legislation to
              comply with the latest recommendations of the &quot;Global Forum for
              Transparency and Taxation&quot; of the OECD. In order to increase
              transparency regarding the beneficiary owners of Swiss companies, the
              draft proposes (among other things) to make bank accounts mandatory for
              all legal persons! This law threatens our very existence. If enacted,
              Bitcoin Association Switzerland would not be allowed to exist any longer
              as it is unlikely that we would find a Swiss bank that provides us with
              an account. Getting a bank account sounds simple, but for crypto startups
              it is not. Most Swiss banks refuse to enter into a business relationship
              with any entity that has &quot;Bitcoin&quot; in its name or is otherwise
              related to crypto currencies or blockchain technology. This is not unlike
              the situation in Israel, where bank Leumi tried to close the bank
              accounts of a local exchange, but was fortunately{" "}
              <a
                href="https://www.coindesk.com/israeli-supreme-court-rules-for-bitcoin-broker-in-bank-dispute/"
                className="text-[#c75b4a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                stopped by the supreme court
              </a>
              .
            </p>

            <p>
              However, there is no need to panic as this stage. The proposed law is
              just that: an early proposal. It currently is in the stage of public
              review. At this stage, anyone can send their comments about the law to
              the department of finance, who reviews them and may or may not adjust
              the proposal in response to these comments. We greatly appreciate this
              opportunity and{" "}
              <a
                href="https://github.com/meisserecon/www/raw/gh-pages/drafts/StellungnahmeGlobalForum.pdf"
                className="text-[#c75b4a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                have formally handed in an according comment today
              </a>
              . It points at a much lighter, less invasive variant that would not give
              banks a new supervisory role and still satisfy the demands of the global
              forum. However, our preferred resolution would be to discard the proposal
              entirely, as already today the cost of regulation in the financial sector
              greatly outweighs its benefits. Interestingly, the accompanying comment
              by the federal council does not even try to argue that the proposed law
              is a good idea in itself, the only argument they bring forward in favor
              of the law is that it would reduce international pressure to provide more
              Swiss corporate data to foreign governments. Maybe I&apos;m naive, but I
              think this is a pitiful reason to create a law. Laws should be created
              because one is convinced that they are good and sensible measures to
              improve the legal framework of a country, and not because of
              international peer pressure. Also, I do not believe that this is a
              sustainable way to reduce international pressure. Committees like the
              &quot;global forum&quot; would lose their raison d&apos;etre if they ever
              came to the conclusion that there is enough transparency, so they come up
              with new and stricter regulation at every round of reviews. Fortunately,
              some of the major parties (the SVP and the CVP) have previously{" "}
              <a
                href="https://www.newsd.admin.ch/newsd/message/attachments/51080.pdf"
                className="text-[#c75b4a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                commented critically on a similar proposal
              </a>
              , so there is a good chance it will be watered down on its way through
              the parliament (if it even gets that far).
            </p>

            <p>
              <strong>Update 25/11/2018</strong>: Great news! After having reviewed all
              comments,{" "}
              <a
                href="https://www.newsd.admin.ch/newsd/message/attachments/54721.pdf"
                className="text-[#c75b4a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                the federal council has decided
              </a>{" "}
              to drop compulsory bank accounts (art. 958g) from the proposal. We thank
              everyone who filed similar comments as we did, thereby helping to avert
              this potential problem.
            </p>
          </div>

          {/* Like and Share */}
          <div className="flex items-center gap-4 text-xs text-gray-500 py-6 border-t border-gray-200 mt-8">
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
              20 Likes
            </span>
            <button className="flex items-center gap-1 hover:text-[#c75b4a]">
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
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>

          {/* Comments Section */}
          <div className="py-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Comments (3)</h3>

            <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
              <span>Newest First</span>
            </div>

            <p className="text-xs text-gray-500 mb-6">Preview</p>
            <p className="text-xs text-gray-400 mb-6">Comments Restricted</p>

            {/* Comment 1 */}
            <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                <Image
                  src="https://assets.squarespace.com/universal/images-v6/default-avatar.png"
                  alt="charona"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-900">charona</span>
                  <span className="text-xs text-gray-500">8 years ago</span>
                  <span className="text-xs text-gray-400">Pending</span>
                  <span className="text-xs text-gray-400">Awaiting Moderation</span>
                  <span className="text-xs text-gray-500">0 Likes</span>
                </div>
                <p className="text-sm text-gray-700">
                  Well we could try Bank Frick in Liechtenstein, Swissquote, which is a
                  bank that allows crypto trading, or even Julius Bar: the CEO&apos;s name
                  is Hodler :) I agree that the proposed law doesn&apos;t make any sense
                  though.
                </p>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                <a
                  href="https://davidgerard.co.uk/blockchain/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://assets.squarespace.com/universal/images-v6/default-avatar.png"
                    alt="David Gerard"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <a
                    href="https://davidgerard.co.uk/blockchain/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-900 hover:text-[#c75b4a]"
                  >
                    David Gerard
                  </a>
                  <span className="text-xs text-gray-500">8 years ago</span>
                  <span className="text-xs text-gray-400">Pending</span>
                  <span className="text-xs text-gray-400">Awaiting Moderation</span>
                  <span className="text-xs text-gray-500">0 Likes</span>
                </div>
                <p className="text-sm text-gray-700">
                  Isn&apos;t that from over two years ago? &quot;Last modification
                  05.01.2016&quot;
                </p>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                <a
                  href="http://bolt-now.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://assets.squarespace.com/universal/images-v6/default-avatar.png"
                    alt="Urs"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <a
                    href="http://bolt-now.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-900 hover:text-[#c75b4a]"
                  >
                    Urs
                  </a>
                  <span className="text-xs text-gray-500">8 years ago</span>
                  <span className="text-xs text-gray-400">Pending</span>
                  <span className="text-xs text-gray-400">Awaiting Moderation</span>
                  <span className="text-xs text-gray-500">0 Likes</span>
                </div>
                <p className="text-sm text-gray-700">
                  Thanks for your observations, Luzius. As you, I try not fall into a
                  conspiracy trap, but I believe that the the financial sector
                  implicitly agrees that a decentralised money system is a threat.
                  Their lobby tries to suppress by pushing for new regulations.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  It&apos;s the empire striking back.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between py-8 border-t border-gray-200 text-xs">
            <div>
              <span className="text-gray-400 uppercase tracking-wider">Newer Post</span>
              <Link
                href="/bitcoin-association-switzerland/2018/4/19/better-legal-protection-for-clients-of-bitcoin-firms-coming"
                className="block text-[#c75b4a] hover:underline mt-1"
              >
                Better legal protection for clients of Bitcoin firms coming?
              </Link>
            </div>
            <div className="text-right">
              <span className="text-gray-400 uppercase tracking-wider">Older Post</span>
              <Link
                href="/bitcoin-association-switzerland/2017/10/30/bitcoin-gold-do-we-need-it-and-if-yes-how-many-s7kaj"
                className="block text-[#c75b4a] hover:underline mt-1"
              >
                Bitcoin Gold - Do we need it and if yes, how many?
              </Link>
            </div>
          </div>
        </article>
      </main>
      <FooterSimple />
    </>
  );
}
