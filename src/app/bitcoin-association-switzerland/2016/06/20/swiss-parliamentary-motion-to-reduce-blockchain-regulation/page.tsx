import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swiss Move to Reduce Blockchain Regulation - Bitcoin Association Switzerland",
  description:
    "Together with 23 co-signatories from all major parties, Swiss member of parliament Franz Gruter filed a parliamentary motion to reduce regulatory burdens of blockchain startups by restricting the legal definition of client deposit.",
};

export default function SwissMoveToReduceBlockchainRegulationPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-4">
            <Link
              href="/bitcoin-association-switzerland/2016/06/20/swiss-parliamentary-motion-to-reduce-blockchain-regulation"
              className="hover:underline"
            >
              20 June 2016
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            Swiss Move to Reduce Blockchain Regulation
          </h1>

          {/* Author and Category */}
          <div className="text-sm text-[#c75b4a] mb-8 flex items-center gap-2">
            <Link
              href="/bitcoin-association-switzerland?author=59025f1030454480d862303f"
              className="hover:underline"
            >
              kronrod
            </Link>
            <span className="text-gray-400">—</span>
            <Link
              href="/bitcoin-association-switzerland/category/Uncategorized"
              className="hover:underline"
            >
              Uncategorized
            </Link>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="/images/blog/parliament.jpg"
              alt="Swiss parliament"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Together with 23 co-signatories from all major parties, Swiss member of parliament Franz Gruter filed a{" "}
              <a
                href="https://www.parlament.ch/de/ratsbetrieb/suche-curia-vista/geschaeft?AffairId=20163472"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                parliamentary motion
              </a>{" "}
              to reduce regulatory burdens of blockchain startups by restricting the legal definition of &quot;client deposit&quot;. Today, firms that handle client money - regardless of whether in Swiss Francs, Bitcoin, or any other currency - get very quickly classified as banks, even if their risk profile fundamentally differs from that of typical banks. Being classified as a bank comes with regulatory and capital requirements that are practically impossible to fulfill for startups. That might be the primary reason why there is not a single operationally active cryptocurrency exchange in the style of bitstamp or bitfinex in Switzerland despite having an otherwise{" "}
              <a
                href="http://www.nzz.ch/schweiz/internet-unternehmer-unterwegs-im-crypto-valley-ld.89840"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                lively ecosystem of crypto startups
              </a>
              . Luzius Meisser, founder of Bitcoin Association Switzerland comments: &quot;This motion is a strong signal to blockchain startups all around the world that the Swiss parliament wants Switzerland to be at the forefront of fintech innovation.&quot;
            </p>

            <p>
              The main part of the motion states (translation): &quot;The federal council shall be instructed to define the term &quot;client deposit&quot; from{" "}
              <a
                href="https://www.admin.ch/opc/de/classified-compilation/19340083/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                banking bill
              </a>{" "}
              art.1 and the{" "}
              <a
                href="https://www.admin.ch/opc/de/classified-compilation/20131795/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                banking act
              </a>{" "}
              art. 2 more narrowly, to the extent risk allows. The current broad interpretation by financial regulator Finma obstructs innovative blockchain startups whose business models get qualified as banking even in cases where the intention behind the law - namely depositor protection - would not require such a qualification.&quot; The full version (in German) can be found on the Website of the{" "}
              <a
                href="http://www.digitale-nachhaltigkeit.ch/2016/06/blockchain-motion/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                parliamentary group for digital sustainability
              </a>
              .
            </p>

            <p>
              Franz Gruter comments in{" "}
              <a
                href="http://www.nzzmediasolutions.ch/titel/zentralschweiz-sonntag-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Zentralschweiz am Sonntag
              </a>{" "}
              that he wants to prevent Finma from trampling the seedlings of a promising new ecosystem with the boots of bureaucracy. Andreas Glarner from law firm{" "}
              <a
                href="http://www.mme.ch/de/team/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                MME
              </a>{" "}
              emphasizes the importance of creating a free, yet carefully regulated, environment in order to continue attracting blockchain startups from all over the world. Switzerland is already well positioned with initiatives like the{" "}
              <a
                href="http://cryptovalleyzug.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Cryptovalley in Zug
              </a>
              , a city that recently made international headlines by deciding to accept Bitcoin payments.
            </p>

            <p>
              As a next step, the parliament will vote on the motion. However, the vote has not been scheduled yet and can happen in the autumn session the earliest. Having a citizen legislature, the Swiss parliament meets less often than that of other countries. (As a nice side-effect, it also tends to make fewer and more concise laws.) If passed, it would be up to the federal council to take concrete measures, some of which might again be voted on in parliament. In practice, the motion might already have am indirect positive impact today by sending a strong signal to the Swiss financial markets regulator Finma - which is explicitely mentioned in the motion - to interpret the existing rules less restrictively.
            </p>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <ShareButton title="Swiss Move to Reduce Blockchain Regulation" />
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-800">Comments (1)</h3>
            </div>

            {/* Existing Comment */}
            <div className="border-t border-gray-100 pt-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/misc/default-avatar.png"
                    alt="Karla G avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <a
                      href="https://www.karlagarrison.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-800 hover:underline"
                    >
                      Karla G
                    </a>
                    <span className="text-xs text-gray-400">2 years ago</span>
                    <span className="text-xs text-gray-400 italic">Pending</span>
                    <span className="text-xs text-gray-400">Awaiting Moderation</span>
                    <span className="text-xs text-gray-400">0 Likes</span>
                  </div>
                  <p className="text-sm text-gray-700">Intereesting thoughts</p>
                  <div className="mt-2 flex gap-2">
                    <button className="text-xs text-gray-400 hover:text-gray-600">Preview</button>
                    <button className="text-xs text-gray-400 hover:text-gray-600">Post Reply</button>
                  </div>
                </div>
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
                  href="/bitcoin-association-switzerland/2016/08/05/fintech-made-in-switzerland"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  FinTech Made in Switzerland
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2014/12/05/talk-at-sipug-day"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Talk at SIPUG day
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
