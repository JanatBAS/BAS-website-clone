import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcoming new board members - Bitcoin Association Switzerland",
  description:
    "At the annual general assembly of the Bitcoin Association Switzerland on the 28th of March 2017, our members appointed two new board members.",
};

export default function WelcomingNewBoardMembersPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-xs text-gray-500 mb-4">13 May 2017</div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            Welcoming new board members
          </h1>

          {/* Author */}
          <div className="text-xs text-gray-500 mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=5895fa2e725e2525b0696fd4"
              className="hover:underline"
            >
              Lucas Betschart
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              At the{" "}
              <a
                href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/events/237929042/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                annual general assembly
              </a>{" "}
              of the Bitcoin Association Switzerland on the 28th of March 2017, our members appointed two new board members who both both stand out through their contributions to the local Swiss Bitcoin and Fintech ecosystem and community.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4 uppercase tracking-wide">
              Roger Darin as Community Manager
            </h2>

            <p>
              <a
                href="https://www.linkedin.com/in/rogerdarin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Roger
              </a>{" "}
              has been helping us since January 2016 with co-organizing events and putting endless hours of work in editing the videos for our YouTube Channel{" "}
              <a
                href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                bitcoinlectures.tv
              </a>
              . Since early 2017 he is also managing the social media presence of the BAS on{" "}
              <a
                href="https://twitter.com/bitcoin_ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Twitter
              </a>{" "}
              and LinkedIn.
            </p>

            {/* Roger Darin Image */}
            <div className="my-8">
              <Image
                src="/images/blog/roger-darin.jpeg"
                alt="BAS Community Manager Roger Darin"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <p className="text-xs text-gray-500 mt-2 italic">
                BAS Community Manager Roger Darin
              </p>
            </div>

            <p>
              Roger is also connecting our association with the wider Swiss finance and technology scene through his involvement in{" "}
              <a
                href="http://www.sictic.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                SICTIC
              </a>{" "}
              and the{" "}
              <a
                href="https://swissfinte.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                SFTA
              </a>
              . As the probably best connected person in the local Fintech scene, we&apos;re very honoured to have him on our board.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4 uppercase tracking-wide">
              Isabella Brom as Treasurer
            </h2>

            <p>
              <a
                href="https://www.linkedin.com/in/isabella-brom-9a363a4a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Isabella
              </a>{" "}
              works as IT advisor at Ernst & Young, where she is the driving force behind EY&apos;s Blockchain and Bitcoin projects. Most prominently, she lead the launch of a EY-branded Bitcoin wallet application in combination with placing a Bitcoin ATM in the Zurich EY offices and enabling her firm to accept Bitcoin as payment for their services.
            </p>

            {/* Isabella Brom Image */}
            <div className="my-8">
              <Image
                src="/images/branding/blog-default.png"
                alt="Isabella demonstrating the EY Bitcoin ATM in Zurich"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <p className="text-xs text-gray-500 mt-2 italic">
                Isabella demonstrating the EY Bitcoin ATM in Zurich
              </p>
            </div>

            <p>
              Isabella&apos;s engagement in the Digital Switzerland initiative connects us further with the broader Swiss ecosystem and enables us to bring Bitcoin to the corporate world.
            </p>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <ShareButton title="Welcoming new board members" />
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-start">
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Newer Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2017/5/5/alexis-roussel-warns-about-centralized-money-advertised-as-crypto-currency-on-swiss-tv"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Alexis Roussel, CEO of Bity SA, warns about centralized money advertised as Crypto Currency on Swiss TV
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2016/08/05/fintech-made-in-switzerland"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  FinTech Made in Switzerland
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
