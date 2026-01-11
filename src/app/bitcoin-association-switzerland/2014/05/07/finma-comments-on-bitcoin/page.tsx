import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finma comments on Bitcoin - Bitcoin Association Switzerland",
  description:
    "In a recently published guide titled 'how consumers can protect themselves from financial market actors that operate without permit', the Swiss financial market authorities commented on Bitcoin.",
};

export default function FinmaCommentsOnBitcoinPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-[#8b7355] mb-4">
            <Link
              href="/bitcoin-association-switzerland/2014/05/07/finma-comments-on-bitcoin"
              className="hover:underline"
            >
              7 May 2014
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            Finma comments on Bitcoin
          </h1>

          {/* Author and Category */}
          <div className="text-sm text-[#8b7355] mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=59025f1030454480d862303f"
              className="hover:underline"
            >
              kronrod
            </Link>
            <span className="mx-2">·</span>
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
              <Link
                href="http://www.finma.ch/d/privatpersonen/Documents/kundenschutz-d.pdf"
                className="text-[#c75b4a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Finma comments on Bitcoin
              </Link>{" "}
              In a recently published guide titled &quot;how consumers can protect
              themselves from financial market actors that operate without
              permit&quot;, the Swiss financial market authorities commented on
              Bitcoin. Generally, it does not contain any surprises. They see
              risks for consumers in its irreversibility, anonymity and
              volatility - which are valid concerns. They also note that money
              laundering laws and banking laws might apply when running a
              business such as a Bitcoin exchange. This is in line with our view
              that Bitcoin should be treated like other currencies.
            </p>

            <p>
              One could criticize their focus on risks alone - neglecting
              potential advantages of the mentioned properties and Bitcoin in
              general. But that&apos;s their mission. Regulatory agencies are created
              to mitigate risks - and not to identify opportunities.
            </p>
          </div>

          {/* Share */}
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
            <ShareButton title="Finma comments on Bitcoin" />
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                Comments (0)
              </h3>
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
                  href="/bitcoin-association-switzerland/2014/06/15/miners-luck-smoothing-excuse-does-not-hold-up-to-scrutiny"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Miner&apos;s &quot;luck smoothing&quot; excuse does not hold up to scrutiny
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2014/02/25/the-mtgox-debacle-would-not-have-happened-in-a-free-market"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  The MtGox debacle would not have happened in a free market
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
