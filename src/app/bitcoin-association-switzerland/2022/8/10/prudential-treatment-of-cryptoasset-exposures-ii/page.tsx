import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Prudential Treatment of Cryptoasset Exposures II - Bitcoin Association Switzerland",
  description: "While the Bank for International Settlement / Basel Committee on Banking Supervision continues to propose regulation, they also have developed a habit of not addressing legitimate concerns from the community.",
};

export default function PrudentialTreatmentCryptoassetExposuresII() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] mt-20">
        <Image
          src="/images/events/event-default-header.jpg"
          alt="Prudential Treatment of Cryptoasset Exposures II"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-sm uppercase tracking-widest mb-2 text-[#c75b4a] font-semibold">
            A BRIGHT NEW DAWN FOR DIGITAL TRANSFERS, SOUND MONEY AND PERSONAL FREEDOM.
          </p>
          <p className="text-sm text-gray-300 mb-4">10 August 2022</p>
          <h1 className="text-2xl md:text-3xl font-medium tracking-wide">
            PRUDENTIAL TREATMENT OF CRYPTOASSET EXPOSURES II
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Author Info */}
          <div className="text-gray-500 text-sm mb-8">
            <Link href="/bitcoin-association-switzerland?author=54edd73ae4b04709779918e4" className="hover:text-[#c75b4a]">
              Roger Darin
            </Link>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              While the Bank for International Settlement / Basel Committee on Banking Supervision continues to propose regulation, they also have developed a habit of not addressing legitimate concerns from the community. That is highly regrettable, but no reason to throw in the towel. So the Bitcoin Association Switzerland continues to provide constructive feedback and - so we think - well argued suggestions on how to improve on the longterm goals of the BIS to make the space safer and allow for more innovation.
            </p>

            <p className="mb-8">
              The{" "}
              <a
                href="https://www.bitcoinassociation.ch/s/2022-08-07-BAS-comment-on-BIS-final.pdf"
                className="text-[#c75b4a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                letter
              </a>{" "}
              we sent out this week is continuing this tradition.
            </p>

            {/* Letter Content */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-right text-gray-600 mb-8">Zurich, 2022-08-07</p>

              <p className="mb-2">To:</p>
              <p className="mb-2">Bank for International Settlements (BIS)</p>
              <p className="mb-8">Basel Committee on Banking Supervision</p>

              <p className="mb-6">Dear Members of the Basel Committee on Banking Supervision,</p>

              <p className="mb-6">
                We would like to express our disagreement{" "}
                <a
                  href="https://www.bis.org/bcbs/publ/d533.htm"
                  className="text-[#c75b4a] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  with your latest proposal
                </a>{" "}
                on the prudential treatment of crypto assets in the strongest possible terms. Observing your hostile stance towards crypto currencies and the absence of a dialog in previous consultations, it is questionable whether it is worthwhile to take part in this consultation at all. Nonetheless, we would like to point out the three most misguided elements in your thinking:
              </p>

              <p className="mb-6">
                In an open departure from the principle of technological neutrality, you propose an &quot;Infrastructure risk add-on&quot; that punishes the use of blockchain technology for the storage, transfer and settlement of traditional financial assets. This destroys the efficiency gains that blockchain technology promises and ignores that well-designed blockchain-based systems can be significantly more secure than the traditional market infrastructure. In such cases, the principle &quot;same risk, same rules&quot; would call for the opposite, namely an &quot;infrastructure bonus&quot;.
              </p>

              <p className="mb-6">
                As we already argued in the previous consultation, small short-term deviations from a peg are a poor measure for the stability of stablecoins. Instead, stablecoins should be considered stable if they are backed by substantial value - similar to how the solvency of banks is evaluated. Narrow spreads are primarily a measure for how well developed the respective markets are and not for how stable the value of the traded assets is.
              </p>

              <p className="mb-6">
                Limiting a bank&apos;s exposure to Bitcoin and related crypto currencies to 1% of their tier 1 capital would effectively prohibit banks from engaging meaningfully with crypto currencies and would destroy the possibility of starting and running crypto banks in a useful way. All the US banks together have USD 2,000 billion of tier 1 capital, so your proposal would limit the crypto exposure of the US banking system to mere USD 20 billion.
              </p>

              <p className="mb-8">
                It seems your intent is to prohibit banks from meaningfully engaging in crypto markets. However, since you lack the authority to openly do that, you do it indirectly through absurd capital requirements. This is dishonest. Furthermore, such a far-reaching decision should be left to the legislative in any democratic system with a clean separation of powers. Your approach is eroding the trust people have in the established institutions. If enacted, your rules would also foster further cynicism about the usefulness of financial regulation in general. That is how wrong the proposal at hand is. It reveals that you care more about protecting old power structures than about doing what is right.
              </p>

              {/* Signatures */}
              <div className="mt-8 space-y-1">
                <p>Lucas Betschart</p>
                <p>Roger Darin</p>
                <p>Luzius Meisser</p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Tagged:{" "}
                <Link href="/bitcoin-association-switzerland/tag/Regulation" className="text-[#c75b4a] hover:underline">
                  Regulation
                </Link>
              </p>
            </div>

            {/* Share */}
            <div className="mt-6 flex items-center gap-6 text-gray-500 text-sm">
              <button className="flex items-center gap-1 hover:text-[#c75b4a]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                </svg>
                Share
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Comments (3)</h3>

            {/* Comment 1 */}
            <div className="mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-800">Ruckli</span>
                    <span className="text-gray-400 text-sm">3 years ago</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Vielen Dank fur Info.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    Der BIZ geht es hauptsachlich darum ihre Pfrunde sowie total veraltete Strukturen zu bewahren. Glucklicherweise interessieren sich 80 % der Studienabganger im Finanzbereich fur Cryptos! Es gibt viel zu tun und die Moglichkeiten sind unendlich. Das ist vergleichbar, wie wenn man vor 8 Jahren in Tesla, Amazon, MSFT, Alibaba, etc. investiert hatte. Unverstandlich dass man eine, vor dem abgrundstehende Industrie (Banks), nicht mehr in diesem Bereich unterstutzt. Sie sollten an die Zukunft glauben und das Potential erkennen. Sicher ist es nicht einfach sich mit einer neuen Technologie auseinanderzusetzen. Erkennen Sie den Nutzen fur die ganze Welt und wie damit demokratisches Denken gefordert werden konnte. Cryptos kommen sowieso. Die Frage ist nur wie lange Sie es noch aufhalten konnen.
                  </p>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-800">Ruckli</span>
                    <span className="text-gray-400 text-sm">3 years ago</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Vielen Dank fur Info.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    Der BIZ geht hauptsachlich darum Ihre Pfunde sowie total veraltete Strukturen zu schutzen bis es einfach nicht mehr geht. Glucklicherweise interessieren sich 80 % der Studienabganger im Finanzbereich fur Cryptos. Es gibt so viel zu tun und die Moglichkeiten sind unendlich. Das ist vergleichbar wie wenn man vor 8 Jahren in Tesla, Amazon, MSFT, Alibaba, etc. investiert hatte. Unverstandlich, dass man einer vor dem abgrundstehende Industrie (Banks) nicht unterstutzt und motiviert in diesen Bereich zu investieren. Sie sollten an die Zukunft glauben und das Potential sehen. Ja, es wahrscheinlich zu kompliziert sich auf etwas Neues einzustellen.
                  </p>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-800">Bjorn Bjercke</span>
                    <span className="text-gray-400 text-sm">3 years ago</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Thank you for this.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <nav className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Newer Post</p>
              <Link
                href="/bitcoin-association-switzerland/2025/12/8/announcement-from-the-board-of-the-bitcoin-association-switzerland"
                className="text-[#c75b4a] hover:underline text-sm"
              >
                Announcement from the Board of the Bitcoin Association Switzerland
              </Link>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-1">Older Post</p>
              <Link
                href="/bitcoin-association-switzerland/2021/7/3/comments-of-bitcoin-association-switzerland-on-the-draft-revised-vasp-guidance"
                className="text-[#c75b4a] hover:underline text-sm"
              >
                Prudential Treatment of Cryptoasset Exposures
              </Link>
            </div>
          </nav>
        </article>
      </main>

      <Footer />
    </div>
  );
}
