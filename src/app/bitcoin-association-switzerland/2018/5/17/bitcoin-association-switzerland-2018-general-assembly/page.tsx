import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";

export default function GeneralAssembly2018Page() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
            17 May 2018
          </p>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-wide">
            Bitcoin Association Switzerland 2018: General Assembly
          </h1>

          {/* Author and Date */}
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=5895fa2e725e2525b0696fd4"
              className="hover:text-[#c75b4a]"
            >
              Lucas Betschart
            </Link>
          </div>

          {/* Article Body */}
          <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-700">
            <p className="mb-6">
              The Bitcoin scene in Switzerland has been strong since Mike Hearn, former Bitcoin developer and author of{" "}
              <a
                href="https://en.bitcoin.it/wiki/Bitcoinj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Bitcoinj
              </a>
              , organized the first local Bitcoin meetup in{" "}
              <a
                href="https://bitcointalk.org/index.php?topic=2716.0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                February 2011
              </a>
              . Over the years we have grown from a handful of people to over{" "}
              <a
                href="https://www.meetup.com/Bitcoin-Meetup-Switzerland/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                5&apos;500 Bitcoiners
              </a>
              , making Switzerland home to one of the biggest Bitcoin communities{" "}
              <a
                href="https://www.meetup.com/topics/bitcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                in the world
              </a>
              .
            </p>

            <p className="mb-6">
              To foster this development the not-for-profit{" "}
              <em>Bitcoin Association Switzerland</em> (BAS) was founded. Since 2013 we serve as a vehicle to talk to regulators and organize educational and networking events, making us one of the oldest Bitcoin Associations of the world.
            </p>

            <p className="mb-6">
              On May 16th 2018, the Bitcoin Association Switzerland held it&apos;s 6th Annual General Assembly. At the general assembly the most engaged members of our community come together to discuss the past years and future activities.
            </p>

            <p className="mb-6">
              The last year has been one of the most successful years for Bitcoin and the BAS. The number of Bitcoin Meetup Switzerland members grew more than 100% (2&apos;000 to 5&apos;500), the number of corporate members increased from 9 to 65 and the number of events we organize from 30 to 45. While we had constructive talks with Swiss regulators the Bitcoin price rose to 8&apos;263 CHF ;)
            </p>

            <p className="mb-6">
              The entire association and our endeavours is run on a volunteer-basis, by unpaid individuals driven by the idea behind Bitcoin.
            </p>

            {/* First Image */}
            <div className="my-8">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1526559785447-VANN62ME50U15REWFE3R/Voting+at+the+General+Assembly"
                  alt="The Swiss have a thing for voting, you say?"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 italic text-center">
                The Swiss have a thing for voting, you say?
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4 uppercase tracking-wide">
              Giacomo Zucco Joins the Board
            </h3>

            <p className="mb-6">
              Myself and the entire BAS board would like to thank our former board member{" "}
              <a
                href="https://twitter.com/MBuffenoir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Mathieu Buffenoir Gonzalez
              </a>{" "}
              for his work over the last years. Serving on the board since 2014, Mathieu represented the non-German speaking part of Switzerland and helped building up the Geneva Bitcoin community.
            </p>

            <p className="mb-6">
              I&apos;m very happy to welcome{" "}
              <a
                href="https://twitter.com/giacomozucco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Giacomo Zucco
              </a>{" "}
              on the BAS board. Giacomo is a perfect fit for the board of the Bitcoin Association because of his long-time involvement in the Bitcoin community and achievements in educating corporates as much as individuals. In 2015 Giacomo co-founded AssoB.it, the main Bitcoin Association in Italy as well as the Milan Bitcoin Meetup. In 2016 he founded the non-profit initiative BHB Network, aimed to help the development of Bitcoin open standards and R&D, as well as the consultancy company Blockchainlab Switzerland. He hosted the third Scaling Bitcoin Conference and participated as speaker in many major conference since 2017. With Giacomo&apos;s help we plan to grow the number of Bitcoiners in{" "}
              <a
                href="https://en.wikipedia.org/wiki/Canton_of_Ticino"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Ticino
              </a>{" "}
              as well as strengthen our collaboration with Milan and other international Bitcoin communities.
            </p>

            {/* Second Image */}
            <div className="my-8">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1526562983734-K8BWMPI2QAMNT4F0AKPT/giac.png"
                  alt="Giacomo Talking to our Members"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 italic text-center">
                Giacomo Talking to our Members
              </p>
            </div>

            <p className="mb-6">
              The General Assembly approved all board members. The new board for 2018 consist of{" "}
              <a
                href="https://twitter.com/__ella_b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Isabella Brom
              </a>
              ,{" "}
              <a
                href="https://twitter.com/RogerDarin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Roger Darin
              </a>
              ,{" "}
              <a
                href="https://twitter.com/Luzius"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Luzius Meisser
              </a>
              , Bernhard Muller Hug,{" "}
              <a
                href="https://twitter.com/giacomozucco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Giacomo Zucco
              </a>{" "}
              and{" "}
              <a
                href="https://twitter.com/lucas_lclc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                myself
              </a>
              . We are thankful for the trust our members have in the board and I&apos;d like thank my colleagues for their work and their commitment to promote Bitcoin in Switzerland for another year.
            </p>

            <p className="mb-6">
              If you&apos;d like to support our activities please consider becoming a member{" "}
              <a
                href="https://www.bitcoinassociation.ch/individual-membership"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                https://www.bitcoinassociation.ch/individual-membership
              </a>
              .
            </p>

            <p className="mb-6">
              I&apos;m looking forward to a successful 2018/2019 for Bitcoin and the Bitcoin Association Switzerland.
            </p>

            <p className="mb-6">To the moon.</p>

            <p className="mb-2">Lucas</p>
            <p className="mb-6">President</p>
          </article>

          {/* Likes and Share */}
          <div className="flex items-center gap-6 mt-8 text-xs text-gray-500">
            <span className="flex items-center gap-1">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              6 Likes
            </span>
            <ShareButton title="Bitcoin Association Switzerland 2018: General Assembly" />
          </div>

          {/* Newer/Older Posts Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-start text-xs">
            <div className="max-w-[45%]">
              <p className="text-gray-400 uppercase tracking-wider mb-1">Newer Post</p>
              <Link
                href="/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank"
                className="text-gray-600 hover:text-[#c75b4a]"
              >
                Why storing Bitcoins for clients does not make you a bank
              </Link>
            </div>
            <div className="max-w-[45%] text-right">
              <p className="text-gray-400 uppercase tracking-wider mb-1">Older Post</p>
              <Link
                href="/bitcoin-association-switzerland/2018/4/19/better-legal-protection-for-clients-of-bitcoin-firms-coming"
                className="text-gray-600 hover:text-[#c75b4a]"
              >
                Better legal protection for clients of Bitcoin firms coming?
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
