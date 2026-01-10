import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bitcoin in 10vor10 - Bitcoin Association Switzerland",
  description:
    "A long 10vor10 segment about Bitcoin. Well done.",
};

export default function BitcoinIn10vor10Page() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-2">
            9 December 2025
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            Bitcoin in 10vor10
          </h1>

          {/* Author and Category */}
          <div className="text-sm text-gray-500 mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=59025f1030454480d862303f"
              className="text-[#c75b4a] hover:underline"
            >
              kronrod
            </Link>
            <span className="mx-2">-</span>
            <Link
              href="/bitcoin-association-switzerland/category/Uncategorized"
              className="text-[#c75b4a] hover:underline"
            >
              Uncategorized
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              <a
                href="http://www.srf.ch/player/tv/10vor10/video/virtuelle-waehrung?id=2e9a3771-5c6e-484d-9568-449a432cac18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Bitcoin in 10vor10
              </a>
            </p>
            <p>
              A long 10vor10 segment about Bitcoin. Well done.
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
              <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Comments (1)</h3>
              <span className="text-sm text-[#c75b4a]">Newest First</span>
            </div>

            {/* Comment Form */}
            <div className="border border-gray-200 rounded mb-8">
              <textarea
                className="w-full p-4 text-sm resize-none focus:outline-none min-h-[120px]"
                placeholder=""
              />
              <div className="flex justify-end items-center gap-4 p-3 border-t border-gray-200 bg-gray-50">
                <span className="text-xs text-gray-500">Preview</span>
                <button className="bg-[#40c3b6] text-white px-4 py-2 text-xs font-medium tracking-wider hover:bg-[#36a99e] transition-colors">
                  POST COMMENT...
                </button>
              </div>
            </div>

            {/* Existing Comment */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="https://assets.squarespace.com/universal/images-v6/default-avatar.png"
                  alt="Alexander Perry"
                  width={40}
                  height={40}
                  className="rounded-full"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <a
                    href="https://www.drain-service.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 hover:underline"
                  >
                    Alexander Perry
                  </a>
                  <span className="text-sm text-[#c75b4a]">2 years ago</span>
                  <span className="text-sm text-[#c75b4a]">- 0 Likes</span>
                </div>
                <p className="text-sm text-gray-700">This is grreat</p>
              </div>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-end items-start">
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2014/06/04/marc-faber-points-readers-to-bitcoin"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Marc Faber points readers to Bitcoin
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
