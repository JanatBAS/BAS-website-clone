import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import Image from "next/image";

export default function BlogPostPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative h-[250px] md:h-[300px] overflow-hidden">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1590915938137-1C75QPLGN3SQ2KRXW0UQ/2020-04-07%2BBitcoin%2BAssociation%2BSwitzerland%2B-%2BFinma%2BComment.jpg?format=2500w"
            alt="Our Comment on GWV-FINMA adjustment for FinSA / FinIA"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <p className="text-xs uppercase tracking-widest mb-2 text-white/80">
                A bright new dawn for digital transfers, sound money and personal freedom.
              </p>
              <p className="text-sm italic mb-3">9 April 2020</p>
              <h1 className="text-xl md:text-2xl font-normal uppercase tracking-wider">
                Our Comment on GWV-FINMA adjustment for FinSA / FinIA
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Author */}
          <div className="mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31"
              className="text-[#87a4ad] hover:opacity-80 text-sm"
            >
              Luzius Meisser
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
            <p className="mb-6">
              On the 8th of April 2020 we sent the{" "}
              <Link
                href="#"
                className="text-[#87a4ad] hover:opacity-80"
              >
                following comment to FINMA regarding the new money laundering ordinance
              </Link>
              :
            </p>

            <p className="mb-6">
              On February 7th 2020, FINMA has published an ordinance project as well as several partial
              ordinance revision projects including the{" "}
              <Link
                href="#"
                className="text-[#87a4ad] hover:opacity-80"
              >
                Geldwaschereiverordnung-FINMA (GWV-FINMA)
              </Link>
              . We greatly appreciate this opportunity to take part in the public consultation and want to
              point out a specific detail that affects crypto currencies.
            </p>

            <p className="mb-6">
              The proposed article 51a GvW-FINMA would{" "}
              <strong className="text-gray-900">
                create a legal difference between virtual currencies and traditional currencies
              </strong>
              , imposing different limits to the exception of identifying the parties in an exchange
              transaction. This goes against the principle of technological neutrality FINMA usually
              adheres to. Furthermore, it is unclear whether &quot;virtual currency&quot; refers to the technical
              form (so it would for example also apply to a blockchain-based dollar, but not to the
              transfer of a contractual claim denominated in Bitcoin) or to the denomination (so it
              would apply to the claim in Bitcoin, but not to the blockchain-based dollar).
            </p>

            <p className="mb-6">
              We recommend FINMA to <strong className="text-gray-900">remove article 51a</strong> or to{" "}
              <strong className="text-gray-900">change article 51</strong> to set the new threshold of
              CHF 1&apos;000 to all currencies in order to preserve{" "}
              <Link
                href="#"
                className="text-[#87a4ad] hover:opacity-80"
              >
                technical neutrality
              </Link>{" "}
              and to avoid unnecessary{" "}
              <Link
                href="#"
                className="text-[#87a4ad] hover:opacity-80"
              >
                uncertainty
              </Link>
              .
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 text-sm text-gray-500">
            Tagged:{" "}
            <Link
              href="/bitcoin-association-switzerland/tag/Regulation"
              className="text-[#87a4ad] hover:opacity-80"
            >
              Regulation
            </Link>
          </div>

          {/* Likes and Share */}
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-[#c7a857]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              4 Likes
            </span>
            <button className="flex items-center gap-1 hover:text-[#87a4ad]">
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
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Comments (1)
              </h2>
              <select className="text-sm text-gray-500 bg-transparent border-none focus:outline-none cursor-pointer">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Most Liked</option>
                <option>Least Liked</option>
              </select>
            </div>

            {/* Comment */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-800">Pocket</span>
                  <span className="text-xs text-gray-500">6 years ago</span>
                  <span className="text-xs text-gray-400">0 Likes</span>
                </div>
                <p className="text-sm text-[#87a4ad] leading-relaxed">
                  Thank you for taking a stance here. Seems unreasonable to think that reducing an
                  already low limit would reduce shady transactions. This change would only harm
                  responsible intermediaries and force genuine customers to foreign platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
            <div className="text-left">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Newer Post</p>
              <Link
                href="/bitcoin-association-switzerland/on-the-risk-assessment-for-global-stablecoins-of-the-g20s-financial-stability-board"
                className="text-sm text-[#87a4ad] hover:opacity-80 leading-tight"
              >
                Our Comment on the risk assessment for<br />
                global Stablecoins of the G20&apos;s Financial<br />
                Stability Board
              </Link>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Older Post</p>
              <Link
                href="/bitcoin-association-switzerland/our-comment-on-designing-a-prudential-treatment-for-cryptoassets-of-the-basel-committee-on-banking-supervision"
                className="text-sm text-[#87a4ad] hover:opacity-80 leading-tight"
              >
                Our Comment on &quot;Designing a prudential<br />
                treatment for cryptoassets&quot; of the Basel<br />
                Committee on Banking Supervision
              </Link>
            </div>
          </div>
        </article>
      </main>
      <FooterSimple />
    </>
  );
}
