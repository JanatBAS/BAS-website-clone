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
