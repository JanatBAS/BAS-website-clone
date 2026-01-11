import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinTech Made in Switzerland - Bitcoin Association Switzerland",
  description:
    "Manual Stagars is creating a Swiss FinTech documentary and talked to Luzius Meisser about the blockchain and opportunities for Switzerland.",
};

export default function FintechMadeInSwitzerlandPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-xs text-gray-500 mb-4">5 August 2016</div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            FinTech Made in Switzerland
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
              Manual Stagars is creating{" "}
              <a
                href="http://fintech-documentary.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                a Swiss FinTech documentary
              </a>{" "}
              and talked to Luzius Meisser about the blockchain and opportunities for Switzerland.
            </p>

            {/* YouTube Embed */}
            <div className="my-8">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/FyYcPhbNtyk"
                  title="&quot;FinTech Made in Switzerland&quot;: Interview Luzius Meisser, Bitcoin Association Switzerland"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <ShareButton title="FinTech Made in Switzerland" />
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-medium text-gray-800">Comments (0)</h3>
            </div>

            {/* Comment Input */}
            <div className="mb-8">
              <textarea
                placeholder="Post Comment..."
                className="w-full border border-gray-300 rounded p-3 text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:border-gray-400"
                rows={4}
              ></textarea>
              <div className="flex justify-end mt-2">
                <button className="px-4 py-2 text-xs uppercase tracking-wider border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
                  Post Comment
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
                  href="/bitcoin-association-switzerland/2017/4/27/welcoming-new-board-members"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Welcoming new board members
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2016/06/20/swiss-parliamentary-motion-to-reduce-blockchain-regulation"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Swiss Move to Reduce Blockchain Regulation
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
