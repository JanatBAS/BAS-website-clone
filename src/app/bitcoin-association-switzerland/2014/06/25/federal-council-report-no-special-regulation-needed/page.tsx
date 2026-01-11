import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Federal Council report: No special regulation needed - Bitcoin Association Switzerland",
  description:
    "In a report published today, the Swiss government answers questions raised in two parliamentary postulates. The report concludes that Bitcoin is covered by existing laws and that no new regulation is needed.",
};

export default function FederalCouncilReportPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-4">
            <Link
              href="/bitcoin-association-switzerland/2014/06/25/federal-council-report-no-special-regulation-needed"
              className="hover:underline"
            >
              25 June 2014
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            Federal Council report: No special regulation needed
          </h1>

          {/* Author and Category */}
          <div className="text-sm text-[#c75b4a] mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=59025f1030454480d862303f"
              className="hover:underline"
            >
              kronrod
            </Link>
            <span className="text-gray-400 mx-2">·</span>
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
              In a{" "}
              <a
                href="http://www.admin.ch/aktuell/00089/index.html?lang=en&msg-id=53513"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                report published today
              </a>
              , the Swiss government answers questions raised in two
              parliamentary postulates. The report concludes that Bitcoin is
              covered by existing laws and that no new regulation is needed.
              This is excellent news and in full accordance with our views.
              Furthermore, the report confirms that Bitcoins are neither a good
              nor a service - which is relevant when deciding whether VAT
              applies when selling Bitcoins (it should not). Furthermore, the
              report says that the only thing Bitcoin currently lacks to be
              money like other currencies is low volatility. As volatility is
              decreasing, is should thus only be a matter of time until Bitcoin
              officially gets the legal status of &quot;money&quot;.
            </p>

            <p>
              A side remark regarding miners: On question the report leaves
              unanswered is whether miners should be classified as financial
              intermediaries. Probably, the federal council sees this as a
              detail to be left to FINMA. In our view, miners do not require
              such a license because miners never take possession of the
              Bitcoins they process. So unlike with banks, there is no risk of
              embezzlement and thus no necessity to protect consumers from that.
              Also note that technically, most miners do not process
              transactions - it is the mining pool that does that for them.
              Instead, miners should be legally seen as someone selling
              computing power to a mining pool.
            </p>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <ShareButton title="Federal Council report: No special regulation needed" />
          </div>

          {/* Comments Section */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Comments (1)
              </h3>
            </div>

            {/* Comment */}
            <div className="flex gap-4 py-4 border-t border-gray-100">
              <div className="flex-shrink-0">
                <Image
                  src="https://assets.squarespace.com/universal/images-v6/default-avatar.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-sm"
                />
              </div>
              <div className="flex-1">
                <div className="mb-1">
                  <a
                    href="http://virtualmining.com/swiss-report-lays-foundation-for-bitcoin-to-become-legal-money/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline font-medium text-sm"
                  >
                    Virtual Mining Bitcoin News &raquo; Swiss Report Lays
                    Foundation for Bitcoin to Become Legal Money
                  </a>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  12 years ago · 0 Likes
                </div>
                <p className="text-sm text-gray-700">
                  [...] Bitcoin Association Switzerland (BAS), the local bitcoin
                  trade association, was similarly positive in its review of the
                  government&apos;s analysis, stating: [...]
                </p>
              </div>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-start">
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Newer Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2014/12/05/talk-at-sipug-day"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Talk at SIPUG day
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2014/06/15/miners-luck-smoothing-excuse-does-not-hold-up-to-scrutiny"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Miner&apos;s &quot;luck smoothing&quot; excuse does not hold
                  up to scrutiny
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
