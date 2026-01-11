import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bitcoin in Echo der Zeit - Bitcoin Association Switzerland",
  description:
    "One of the most relevant news segments on Swiss national radio - Echo der Zeit - reported about Bitcoin and talked to Luzius Meisser.",
};

export default function BitcoinInEchoDerZeitPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-xs text-gray-500 mb-4">4 December 2013</div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            Bitcoin in Echo der Zeit
          </h1>

          {/* Author and Category */}
          <div className="text-xs text-gray-500 mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=59025f1030454480d862303f"
              className="hover:underline"
            >
              kronrod
            </Link>
            <span className="mx-2">/</span>
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
              <a
                href="http://www.srf.ch/sendungen/echo-der-zeit/keine-visa-erleichterungen-mehr-fuer-syrienfluechtlinge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Bitcoin in Echo der Zeit
              </a>
            </p>

            <p>
              One of the most relevant news segments on Swiss national radio - Echo der Zeit - reported about Bitcoin and talked to Luzius Meisser.
            </p>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <ShareButton title="Bitcoin in Echo der Zeit" />
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wider">Comments (0)</h3>
            </div>

            {/* Comment Input */}
            <div className="mb-8">
              <textarea
                placeholder="Post Comment..."
                className="w-full border border-gray-300 rounded p-3 text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:border-gray-400"
                rows={4}
              ></textarea>
              <div className="flex justify-end gap-2 mt-2">
                <button className="px-4 py-2 text-xs text-gray-500 hover:text-gray-700 transition-colors">
                  Preview
                </button>
                <button className="px-4 py-2 text-xs uppercase tracking-wider bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                  Post Comment...
                </button>
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
                  href="/bitcoin-association-switzerland/2014/02/17/general-assembly-2014"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  General Assembly 2014
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
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
