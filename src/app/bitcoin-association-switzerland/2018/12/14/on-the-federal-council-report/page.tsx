import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "On the Federal Council Report - Bitcoin Association Switzerland",
  description:
    "The federal council published its 170-page report on the legal foundations of the blockchain in Switzerland. It incorporates the findings of the consultation that took place in September and to which the Bitcoin Association also provided some inputs.",
};

export default function OnTheFederalCouncilReportPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-4">
            <Link
              href="/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report"
              className="hover:underline"
            >
              14 December 2018
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            On the Federal Council Report
          </h1>

          {/* Author */}
          <div className="text-sm text-[#c75b4a] mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31"
              className="hover:underline"
            >
              Luzius Meisser
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              The federal council published its 170-page report on the legal
              foundations of the blockchain in Switzerland. It incorporates the
              findings of the consultation that took place in September and to
              which the Bitcoin Association also provided some inputs. All in all,
              it is great that the Swiss government not only recognizes the
              potential of the blockchain, but also applies the right strategy for
              allowing the blockchain-ecosystem to flourish.
            </p>

            <p>
              In particular, the report focuses on removing barriers and
              establishing legal certainty in various legal areas except taxes,
              which are planned to be looked at in 2019. It does not propose a
              specific &quot;blockchain law&quot; like Liechtenstein and it does
              not try to pro-actively steer the development into a specific
              direction. This is the right approach and in the Swiss tradition of
              a principles-based legal system that ensures freedom of innovation
              and a sound foundation for economic prosperity.
            </p>

            <p>
              A particularly interesting idea is the proposal to create a new
              exchange category for crypto exchanges that list security tokens.
              Before 2016, Finma could have allowed such exchanges at its own
              discretion. But then, the Financial Market Infrastructure Act was
              introduced in order to make the Swiss regulatory environment
              compatible with that of the European Union. It mandated that
              exchanges must be one of three specific types (stock exchange,
              mutual trading facility, or organized trading system). Unfortunately,
              none of these types fits the needs of crypto exchanges very well,
              making it necessary to create a new type in order to allow such
              exchanges to exist in Switzerland. This shows once again how the
              traditional Swiss approach of having principle-based laws that give
              a lot of discretion to citizens and regulatory agencies are much
              more innovation-friendly than overly detailed European-style laws.
            </p>

            <p>
              Another interesting question that we{" "}
              <Link
                href="/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank"
                className="text-[#c75b4a] hover:underline"
              >
                discussed before in this blog
              </Link>{" "}
              is the storage of crypto assets for clients and what happens to them
              in the case of a default. Here, the report is not as optimistic as
              it could be regarding the current legal situation, but we welcome
              its conclusion that a legal clarification is desired and that
              clients should get their assets back when the custodian defaults,
              assuming the assets can be clearly identified as belonging to the
              clients.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 text-sm text-gray-600">
            Tagged:{" "}
            <Link
              href="/bitcoin-association-switzerland/tag/Regulation"
              className="text-[#c75b4a] hover:underline"
            >
              Regulation
            </Link>
          </div>

          {/* Like and Share */}
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
            <button className="flex items-center gap-2 hover:text-[#c75b4a] transition-colors">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              8 Likes
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
                  href="/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Our Comment on the Swiss Blockchain Law
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2018/9/24/is-the-ethereum-system-a-legal-subject"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Is the Ethereum system a legal subject?
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
