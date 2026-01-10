import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marc Faber points readers to Bitcoin - Bitcoin Association Switzerland",
  description:
    "Swiss investment guru Marc Faber publishes a monthly market commentary. Along with the June commentary, he sent his subscribers a report on Bitcoin.",
};

export default function MarcFaberPointsReadersToBitcoinPage() {
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
            Marc Faber points readers to Bitcoin
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

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="http://static4.businessinsider.com/image/4d40343ccadcbb1d1a010000/marc-faber-moral-decay-among-the-elites-proves-america-is-a-failed-state.jpg"
              alt="Marc Faber"
              width={600}
              height={400}
              className="max-w-full h-auto"
              unoptimized
            />
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Swiss investment guru{" "}
              <a
                href="http://en.wikipedia.org/wiki/Marc_Faber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Marc Faber
              </a>{" "}
              publishes a monthly market commentary. Along with the June commentary, he sent his subscribers a report on Bitcoin, titled &quot;Dispelling the Myths of Bitcoin&quot; and written by{" "}
              <a
                href="http://www.altanawealth.com/our-team/lee-robinson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Lee Robinson
              </a>{" "}
              from Atlana wealth. I already was in contact with Faber last autumn suggesting that he should send{" "}
              <a
                href="http://bitcoinassociation.ch/Bitcoin-A_Promise_of_Freedom.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                my report on Bitcoin
              </a>{" "}
              to his readers - which he unfortunately did not even though he indicated interest. The report he finally attached is an interesting read, containing an excellent collection of quotes (e.g. &quot;Every informed person needs to know about Bitcoin because it might be one of the world&apos;s most important developments.&quot; by Nobel price winner Leon Louw) and showing various charts copied from the internet (e.g. this{" "}
              <a
                href="https://bitcointalk.org/index.php?topic=292068.0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Bitcoin Ecosystem Snapshot
              </a>
              ). It lists three scenarios and attaches long-term values between 5&apos;714 USD and 119&apos;000 USD per Bitcoin. For the latter, the author randomly assumes that Bitcoin can capture 1% of the global money supply - not a very profound analysis. Nevertheless, I find it notable that Marc Faber finally decided to inform his readers about Bitcoin (without endorsing it). It is a symptom of raising awareness among investors and a good sign for the future.
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
            <ShareButton title="Marc Faber points readers to Bitcoin" />
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Comments (0)</h3>
              <span className="text-sm text-[#c75b4a]">Newest First</span>
            </div>

            {/* Comment Form */}
            <div className="border border-gray-200 rounded">
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
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-start">
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Newer Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2014/01/14/bitcoin-in-10vor10"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Bitcoin in 10vor10
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2025/12/8/statement-on-12-point-program"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Statement on the 12-Point Program for a Forward-Looking Digital Financial Center
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
