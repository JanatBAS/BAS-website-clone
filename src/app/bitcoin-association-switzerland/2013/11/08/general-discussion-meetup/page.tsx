import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Discussion Meetup - Bitcoin Association Switzerland",
  description:
    "The November 20th meetup will be dedicated to discussing our association. If you want to help shaping its future, please join us on that evening.",
};

export default function GeneralDiscussionMeetupPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-xs text-gray-500 mb-4">8 November 2013</div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            General Discussion Meetup
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
                href="http://www.meetup.com/Bitcoin-Meetup-Switzerland/events/149566652/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                General Discussion Meetup
              </a>
            </p>

            <p>
              The November 20th meetup will be dedicated to discussing our association. If you want to help shaping its future, please join us on that evening. We also plan to stream the event on Google plus.
            </p>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <ShareButton title="General Discussion Meetup" />
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wider">Comments (1)</h3>
            </div>

            

            {/* Existing Comment */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <a
                    href="https://thelustforlifepunk.blogspot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-800 hover:underline"
                  >
                    The Lust For Live
                  </a>
                  <span className="text-xs text-gray-400">2 years ago</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="text-xs text-[#c75b4a]">0 Likes</span>
                </div>
                <p className="text-sm text-gray-700">Interesting readd</p>
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
                  href="/bitcoin-association-switzerland/2013/12/04/bitcoin-in-echo-der-zeit"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Bitcoin in Echo der Zeit
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2013/11/07/bitcoin-on-rts-and-euronews"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Bitcoin on RTS and Euronews
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
