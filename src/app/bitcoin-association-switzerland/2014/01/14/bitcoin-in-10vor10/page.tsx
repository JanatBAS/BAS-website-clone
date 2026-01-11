import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
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

          {/* Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <ShareButton title="Bitcoin in 10vor10" />
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
