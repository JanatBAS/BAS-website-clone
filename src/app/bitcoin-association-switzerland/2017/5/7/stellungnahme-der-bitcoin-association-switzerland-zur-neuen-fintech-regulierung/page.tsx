import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Regulatory Comment on the new Fintech-Regulation - Bitcoin Association Switzerland",
  description:
    "The Bitcoin Association Switzerland comments on the latest proposal to improve regulation for fintech startups in Switzerland.",
};

export default function RegulatoryCommentFintechPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-4">
            <Link
              href="/bitcoin-association-switzerland/2017/5/7/stellungnahme-der-bitcoin-association-switzerland-zur-neuen-fintech-regulierung"
              className="hover:underline"
            >
              15 May 2017
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            Our Regulatory Comment on the new Fintech-Regulation
          </h1>

          {/* Author */}
          <div className="text-sm text-[#c75b4a] mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=5895fa2e725e2525b0696fd4"
              className="hover:underline"
            >
              Lucas Betschart
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              One of the main activities and major reasons for the founding of the Bitcoin Association Switzerland is building a positive regulatory environment for crypto currency startups in Switzerland. The State Secretariat for International Financial Matters invited us to comment on the latest proposal to improve regulation for fintech startups in Switzerland. The plan is to allow startups that previously would have required a full banking license to handle client funds under a more appropriate, light-weight regulation (known as &quot;banking license light&quot;). Luzius Meisser, founder and board member of the BAS, wrote a comment in the name of our association, with a lot of support by the Swiss Fintech community. You can access the comment (in German) here:
            </p>

            <h2 className="text-xl font-normal text-[#c75b4a] text-center my-8">
              <a
                href="https://www.bitcoinassociation.ch/s/StellungnahmeBitcoinAssociationSwitzerland.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                PDF zur Stellungnahme der Bitcoin Association
              </a>
            </h2>

            <p>
              In particular during the pioneer phase of a new technology, small regulatory differences can make an enormous long-term difference. Switzerland is in the pole position for becoming a major hub for blockchain technology, but there are still a few hurdles that stand in the way. Some of them will be removed by the proposed relaxation of the banking law, but there is still plenty of work to be done. Fortunately, the State Secretariat of Economic Affairs (SECO) has recognized this and{" "}
              <a
                href="https://www.seco.admin.ch/seco/de/home/wirtschaftslage---wirtschaftspolitik/wirschaftspolitik/digitalisierung.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                calls for comments
              </a>{" "}
              on what regulation stands in the way of digitalization in Switzerland. If you are aware of concrete laws that inhibits your business idea and that should be changed, let us now so we can coordinate on a common comment for SECO&apos;s &quot;digital test&quot;.
            </p>
          </div>

          {/* Like and Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <button className="flex items-center gap-2 hover:text-[#c75b4a] transition-colors">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              3 Likes
            </button>
            <button className="flex items-center gap-2 hover:text-[#c75b4a] transition-colors">
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

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-start">
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Newer Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2017/5/10/how-to-join-the-community"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  How to participate in the local Bitcoin community
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2017/5/5/alexis-roussel-warns-about-centralized-money-advertised-as-crypto-currency-on-swiss-tv"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Alexis Roussel, CEO of Bity SA, warns about centralized money advertised as Crypto Currency on Swiss TV
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
