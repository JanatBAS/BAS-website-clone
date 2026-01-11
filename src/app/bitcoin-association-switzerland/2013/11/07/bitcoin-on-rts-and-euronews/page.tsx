import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
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
                src="https://images.squarespace-cdn.com/content/5895d62d2994ca86b0cd9807/1493327692266-15IDXWZ20QV7CB8AULO1/euronews.jpg?content-type=image%2Fjpeg"
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

          {/* Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <ShareButton title="Bitcoin on RTS and Euronews" />
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wider">Comments (0)</h3>
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
