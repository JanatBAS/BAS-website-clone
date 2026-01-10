import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to participate in the local Bitcoin community - Bitcoin Association Switzerland",
  description:
    "Learn how to get involved with the Bitcoin community in Switzerland through meetups, Telegram, Twitter, membership, and donations.",
};

export default function HowToJoinTheCommunityPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-2">
            <Link
              href="/bitcoin-association-switzerland/2017/5/10/how-to-join-the-community"
              className="hover:underline"
            >
              10 June 2017
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            How to participate in the local Bitcoin community
          </h1>

          {/* Author */}
          <div className="text-sm text-[#c75b4a] mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=54edd73ae4b04709779918e4"
              className="hover:underline"
            >
              Roger Darin
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
            <ul className="list-disc pl-6 space-y-4">
              <li>
                Get to know the community members in person by attending one of our regular meetups in Zurich or Geneva:{" "}
                <a
                  href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  https://www.meetup.com/Bitcoin-Meetup-Switzerland
                </a>
              </li>
              <li>
                Join our Telegram chat group with 180+ members to always be up-to-date about the latest things happening in Switzerland and Bitcoin. If you&apos;d like to join ask{" "}
                <a
                  href="https://web.telegram.org/#/im?p=@rogerdarin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  @rogerdarin
                </a>{" "}
                on Telegram to invite you.
              </li>
              <li>
                Follow us on{" "}
                <a
                  href="https://twitter.com/bitcoin_ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <Link
                  href="/join"
                  className="text-[#c75b4a] hover:underline"
                >
                  Join
                </Link>{" "}
                the Bitcoin Association as a member
              </li>
              <li>
                Support the Bitcoin Association Switzerland with a donation to our Bitcoin address:{" "}
                <a
                  href="bitcoin:32kpHBZCHDUsC1xDCFMB6kAGHcgPaU9bkm?label=Bitcoin+Association+Switzerland+Donation"
                  className="text-[#c75b4a] hover:underline break-all"
                >
                  32kpHBZCHDUsC1xDCFMB6kAGHcgPaU9bkm
                </a>
              </li>
            </ul>
          </div>

          {/* Quote */}
          <div className="my-12 text-center">
            <div className="text-[#c75b4a] text-4xl mb-4">&ldquo;</div>
            <blockquote className="text-gray-600 italic text-base leading-relaxed max-w-xl mx-auto">
              The Bitcoin Association Switzerland is an important pillar of the global Bitcoin ecosystem.
            </blockquote>
            <div className="mt-4 text-sm text-[#c75b4a]">
              &mdash; Satoshi Nakamoto
            </div>
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
            <ShareButton title="How to participate in the local Bitcoin community" />
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-start">
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Newer Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2017/7/14/proof-of-work-not-proof-of-stake"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Op Ed: Proof of Work, not Proof of Stake
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2017/5/7/stellungnahme-der-bitcoin-association-switzerland-zur-neuen-fintech-regulierung"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Our Regulatory Comment on the new Fintech-Regulation
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
