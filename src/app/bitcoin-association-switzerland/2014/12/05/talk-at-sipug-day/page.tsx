import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk at SIPUG day - Bitcoin Association Switzerland",
  description:
    "The Bitcoin Association is invited to hold a talk about Bitcoin about twice per month at average. Here is a picture of one of the more notable events with 300 registered participants.",
};

export default function TalkAtSipugDayPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-4">
            <Link
              href="/bitcoin-association-switzerland/2014/12/05/talk-at-sipug-day"
              className="hover:underline"
            >
              5 December 2014
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            Talk at SIPUG day
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

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              The Bitcoin Assocation is invited to hold a talk about Bitcoin about twice per month at average. Here is a picture of one of the more notable events with 300 registered participants.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mt-6 mb-8">
            <a
              href="http://www.sipug.ch/de/sipugday/sipug-day-archiv/103-sipug-day-2014-fotos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/59025f1030454480d862303c/59025f1930454480d86230be/1493327641772/sipug.jpg?format=original"
                alt="SIPUG day presentation"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </a>
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
            <ShareButton title="Talk at SIPUG day" />
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-start">
              <div className="text-left">
                <div className="text-xs text-gray-500 mb-1">
                  Newer Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2016/06/20/swiss-parliamentary-motion-to-reduce-blockchain-regulation"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Swiss Move to Reduce Blockchain Regulation
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2014/06/25/federal-council-report-no-special-regulation-needed"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Federal Council report: No special regulation needed
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
