import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Assembly 2014 - Bitcoin Association Switzerland",
  description:
    "Our general assembly will take place on 2014-02-23 at Colab Zurich. Highlights include an intro to Ethereum and membership application form.",
};

export default function GeneralAssembly2014Page() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-xs text-gray-500 mb-4">17 February 2014</div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            General Assembly 2014
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
              As announced, our general assembly will take place on 2014-02-23 at Colab Zurich (Zentralstrasse 37, colab-zurich.ch). The doors open at 14:00 and the assembly formally starts at 14:15. You can find the agenda and comment on it{" "}
              <a
                href="https://docs.google.com/document/d/1a2a2I4fADwAtdO-43l1SRqXQhskJ297w_eNRrGwnI90/edit#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                here
              </a>
              . In particular, I&apos;d like to point you to traktandum 7 (as we Swiss call agenda items) &quot;Where to spend your Bitcoins?&quot;. Send me an image/screenshot of your favorite underappreciated Bitcoin service and we&apos;ll present it at the assembly. You may also use this opportunity to advertise own stuff for sale (e.g. your car).
            </p>

            <p>
              Further highlights are an intro to Ethereum by the founders themselves and a quick presentation of Veeting, a Swiss secure video conference software accepting Bitcoin. Also, we have an ATM project getting more concrete and consider launching a Bureaucracy Relief Fund.
            </p>

            <p>
              Then, most importantly, we finally have our membership application form online on{" "}
              <a
                href="http://bitcoinassociation.ch/join.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                our join page
              </a>
              . Fill it in to formally become a member!
            </p>

            <p>
              We also would like to thank colab zurich for providing this excellent event location!
            </p>

            {/* Colab Zurich Logo */}
            <div className="my-8 flex justify-center">
              <a
                href="http://colab-zurich.ch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="http://static1.squarespace.com/static/5895d62d2994ca86b0cd9807/59025f1030454480d862303c/59025f1430454480d8623078/1493327636432/colab_zurich_logo.png?format=original"
                  alt="Colab Zurich Logo"
                  width={300}
                  height={150}
                  className="object-contain"
                />
              </a>
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
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wider">Comments (0)</h3>
              <select className="text-xs text-gray-500 border border-gray-300 rounded px-2 py-1 bg-white">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Most Liked</option>
                <option>Least Liked</option>
              </select>
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
                  href="/bitcoin-association-switzerland/2014/02/25/the-mtgox-debacle-would-not-have-happened-in-a-free-market"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  The MtGox debacle would not have happened in a free market
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2013/12/04/bitcoin-in-echo-der-zeit"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Bitcoin in Echo der Zeit
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
