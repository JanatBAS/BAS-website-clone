import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The MtGox debacle would not have happened in a free market - Bitcoin Association Switzerland",
  description:
    "As other places reported, MtGox failed spectacularly and ceased operations today. Some will blame this on a lack of regulation. Nothing could be further from the truth.",
};

export default function MtGoxDebacleFreemarketPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-4">25 February 2014</div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            The MtGox debacle would not have happened in a free market
          </h1>

          {/* Author and Category */}
          <div className="text-sm text-[#c75b4a] mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=59025f1030454480d862303f"
              className="hover:underline"
            >
              kronrod
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link
              href="/bitcoin-association-switzerland/category/Uncategorized"
              className="hover:underline"
            >
              Uncategorized
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              As{" "}
              <a
                href="http://blog.blockchain.info/2014/02/25/joint-statement/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                other places reported
              </a>
              , MtGox failed spectacularly and ceased operations today. Some will blame
              this on a lack of regulation. Nothing could be further from the truth.
              The main reason for this failure being so spectacular is a long history
              of lacking competition. Even though MtGox repeatedly faced problems like
              days of suspended trading, customers did not have many viable
              alternatives. In many countries, the legal costs of setting up a
              financial service website like a Bitcoin exchange are prohibitive. The
              Internet thrives on people being able to experiment - otherwise, sites
              like{" "}
              <a
                href="http://ebay.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                ebay.com
              </a>
              ,{" "}
              <a
                href="http://doodle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                doodle.com
              </a>{" "}
              or{" "}
              <a
                href="http://yahoo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                yahoo.com
              </a>{" "}
              would never habe been created. I personally have repeatedly met
              motivated enthusiasts who wanted to setup their own Bitcoin exchanges.
              Unfortunately, regulation is holding them back. Had they been able to
              create their exchange websites, MtGox would have seen much more
              competition much earlier - giving customers the opportunity to diversify
              and reducing their exposure to a single operator.
            </p>

            <p>
              However, in an ironic twist, the very regulation that seeks to protect
              customers potentiated their risks by preventing them from effectively
              diversifying. The financial services industry is in an ongoing vicious
              circle of market failures that make politicians enact more rigorous
              regulation, which stiffles competition, which again leads to more market
              failures and regulation.
            </p>

            <p>
              - Written by Luzius Meisser, President of Bitcoin Association
              Switzerland
            </p>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <ShareButton title="The MtGox debacle would not have happened in a free market" />
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wider">
                Comments (2)
              </h3>
            </div>

            

            {/* Comment 1 - Hans Loepfe */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-800">Hans Loepfe</span>
                    <span className="text-xs text-gray-400">12 years ago</span>
                    <span className="text-xs text-gray-400">· 0 Likes</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    A sad truth very well expressed.
                  </p>
                </div>
              </div>
            </div>

            {/* Comment 2 - Strässle Max */}
            <div className="mb-6 pb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-800">Strässle Max</span>
                    <span className="text-xs text-gray-400">12 years ago</span>
                    <span className="text-xs text-gray-400">· 0 Likes</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Gibt es keine derivative Produkte Futures/Options auf Bitcoin? Zu
                    Absicherungszwecken gäbe das grösseren Spielraum für
                    Institutionelle Anleger und höheren Open Interest was sich
                    wiederum stabilisierend auf den Preis auswirken sollte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-start">
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Newer Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2014/05/07/finma-comments-on-bitcoin"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Finma comments on Bitcoin
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2014/02/17/general-assembly-2014"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  General Assembly 2014
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <FooterSimple />
    </>
  );
}
