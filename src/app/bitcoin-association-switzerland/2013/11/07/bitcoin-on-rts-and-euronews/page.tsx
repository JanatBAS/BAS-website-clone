import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bitcoin on RTS and Euronews - Bitcoin Association Switzerland",
  description:
    "Luzius Meisser had a quick appearance on French-speaking Swiss TV RTS as well as on euronews.",
};

export default function BitcoinOnRtsAndEuronewsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-4">
            <Link
              href="/bitcoin-association-switzerland/2013/11/07/bitcoin-on-rts-and-euronews"
              className="hover:underline"
            >
              7 November 2013
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            Bitcoin on RTS and Euronews
          </h1>

          {/* Author and Category */}
          <div className="text-sm text-[#c75b4a] mb-8 flex items-center gap-2">
            <Link
              href="/bitcoin-association-switzerland?author=59025f1030454480d862303f"
              className="hover:underline"
            >
              kronrod
            </Link>
            <span className="text-gray-400">-</span>
            <Link
              href="/bitcoin-association-switzerland/category/Uncategorized"
              className="hover:underline"
            >
              Uncategorized
            </Link>
          </div>

          {/* Featured Image with Caption */}
          <div className="mb-6">
            <a
              href="http://fr.euronews.com/2013/05/28/bitcoin-la-monnaie-virtuelle-au-fonctionnement-opaque/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/59025f1030454480d862303c/59025f1230454480d8623057/1493327634184/euronews.jpg?format=original"
                alt="Luzius Meisser on euronews"
                width={400}
                height={300}
                className="w-auto h-auto max-w-full"
              />
            </a>
            <span className="text-sm text-gray-600 ml-1">Luzius Meisser on euronews</span>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
            <p>
              I had a quick appearance on French-speaking Swiss TV{" "}
              <a
                href="http://www.rts.ch/video/emissions/ttc/4899012-le-bitcoin-la-nouvelle-monnaie-virtuelle.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                RTS
              </a>{" "}
              as well as on{" "}
              <a
                href="http://fr.euronews.com/2013/05/28/bitcoin-la-monnaie-virtuelle-au-fonctionnement-opaque/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
                title="Euronews"
              >
                euronews
              </a>
              .
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
              0 Likes
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

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wider">Comments (0)</h3>
              <select className="text-xs text-gray-500 border-0 bg-transparent">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Most Liked</option>
                <option>Least Liked</option>
              </select>
            </div>

            {/* Comment Form */}
            <div className="mb-8">
              <textarea
                placeholder=""
                className="w-full p-3 border border-gray-200 rounded text-sm resize-none h-24 focus:outline-none focus:border-gray-400"
              />
              <div className="flex justify-end mt-2 gap-2">
                <button className="px-4 py-2 text-xs text-gray-500 hover:text-gray-700 transition-colors">
                  Preview
                </button>
                <button className="px-4 py-2 text-xs bg-gray-800 text-white tracking-wider hover:bg-gray-700 transition-colors">
                  POST COMMENT...
                </button>
              </div>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-start">
              <div className="text-left">
                <div className="text-xs text-gray-500 mb-1">
                  Newer Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2013/11/08/general-discussion-meetup"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  General Discussion Meetup
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
