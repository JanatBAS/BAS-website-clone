import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-made - Bitcoin Association Switzerland",
  description:
    "Lakeside Partners joins the Bitcoin Association Switzerland by mining their own Bitcoin to pay membership fees.",
};

export default function LakesidePartnersJoinsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-2">
            <Link
              href="/bitcoin-association-switzerland/2017/8/8/lakeside-partners-joins-the-bitcoin-association-switzerland"
              className="hover:underline"
            >
              9 August 2017
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            Self-made
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
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Some people take pride in being self-made, though it can mean different things to different people.{" "}
              <a
                href="https://www.youtube.com/watch?v=hSH9aVGIsWo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Building a company from scratch
              </a>
              ,{" "}
              <a
                href="http://www.thesimpledollar.com/a-walkthrough-and-cost-breakdown-of-brewing-your-own-beer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                brewing your own beer
              </a>{" "}
              at home or{" "}
              <a
                href="http://www.mackcollier.com/so-you-want-to-write-a-book-heres-10-things-you-need-to-know-to-get-published/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                writing and publishing a book
              </a>
              .
            </p>

            <p>
              But it&apos;s rarer to find someone who not only has earned their fortune by the sweat of their brow, but who has also produced the money in that fortune. With the advent of cryptocurrencies, the entire idea of &quot;making money&quot; has been turned on its head, as has the idea of money itself.
            </p>

            <p>And as Dostoyevsky said, &quot;Money is coined freedom&quot;.</p>

            <p>
              So if you come up against a situation where you need to pay for something – like the membership fee to the Bitcoin Association of Switzerland, for instance – and you are loathe to &quot;pull the money&quot; out of your own pocket, you could always &quot;make your own&quot; i.e. mine it and pay with it.
            </p>

            <p>
              Yes, it might sound funny, but why not? After all, there is no better way get to the bottom of something than to &quot;get your hands dirty&quot; and learn first-hand.
            </p>

            <p>
              This was the approach that{" "}
              <a
                href="http://lakeside.partners/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Lakeside Partners
              </a>{" "}
              decided to take. After making the decision to get into the blockchain and crypto space, the obvious next step was to set up a mining operation in-house. Nothing extreme, mind you – but enough to get a handle on how things work and pay the annual membership fee for the Bitcoin Association Switzerland (we famously only accept Bitcoin for{" "}
              <a
                href="https://www.bitcoinassociation.ch/join/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                membership
              </a>{" "}
              fees).
            </p>

            <p>
              Admittedly, this wasn&apos;t Lakeside Partners first foray into cryptocurrencies: earlier this year, their sister company{" "}
              <a
                href="http://inacta.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                inacta AG
              </a>{" "}
              assisted in{" "}
              <a
                href="http://www.luzernerzeitung.ch/nachrichten/wirtschaft/weinhaendler-akzeptiert-bitcoin;art9642,1056053"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                bringing Bitcoin payments
              </a>{" "}
              to one of the most popular specialty shops in Zug -{" "}
              <a
                href="http://www.houseofwines.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                House of Wines
              </a>
              . Lakeside Partners is also the company behing Europe&apos;s largest{" "}
              <a
                href="http://www.blockchaincompetition.ch/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                blockchain startup contest
              </a>
              .
            </p>

            <p>
              Let&apos;s close this blog post with a quote from Ralf Glabschnig, one of the partners at the firm: &quot;When we do something, we want to do it whole-heartedly. We see great potential in the blockchain and crypto space here in Switzerland - and if you want to be a part of that, you have to get involved, see first-hand how it works. And of course, joining the Bitcoin Association is part of that.&quot;
            </p>

            <p>
              Naturally, the Bitcoin Assocation Switzerland is happy about every new member joining our ranks, whether you&apos;ve mined the coins all by yourself, or bought them in exchange for crypto or old fashioned currency. Just as Ralf said above: &quot;if you want to be a part of that, you have to get involved&quot;.
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
              2 Likes
            </button>
            <ShareButton title="Self-made" />
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-start">
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Newer Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2017/9/13/tone-vays-meetup-in-zurich-september-2017"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Tone Vays Meetup in Zurich September 2017
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2017/7/14/proof-of-work-not-proof-of-stake"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Op Ed: Proof of Work, not Proof of Stake
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
