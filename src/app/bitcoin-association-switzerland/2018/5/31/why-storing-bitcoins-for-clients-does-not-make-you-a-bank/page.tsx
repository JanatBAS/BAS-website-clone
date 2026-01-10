import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import Image from "next/image";

export default function WhyStoringBitcoinsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1527748625110-S7D6CZO6B91C41JI82GK/ADWhiteReadingRoom%2C_CornellUniversity.jpg?format=2500w"
            alt="Why storing Bitcoins for clients does not make you a bank"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-white/90">
                A Swiss non-profit association for digital capital, sound money and personal freedom
              </p>
              <p className="text-sm md:text-base mb-2">1 June 2018</p>
              <p className="text-sm md:text-base">
                <Link
                  href="/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31"
                  className="hover:underline"
                >
                  Luzius Meisser
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 tracking-wide uppercase text-center">
            Why storing Bitcoins for clients does not make you a bank
          </h1>

          {/* Author and Date */}
          <div className="text-center text-xs text-gray-500 uppercase tracking-wider mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31"
              className="hover:text-[#c75b4a]"
            >
              Luzius Meisser
            </Link>
            <span className="mx-2">|</span>
            <Link
              href="/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank"
              className="hover:text-[#c75b4a]"
            >
              1 June 2018
            </Link>
          </div>

          {/* Article Body */}
          <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-4 uppercase tracking-wide">
              Three legal papers in one week
            </h2>

            <p className="mb-6">
              Last week, three interesting legal papers have been published that might turn out to be helpful for Crypto Nation Switzerland. First, our own regulatory working group has published an article titled{" "}
              <a
                href="https://jusletter-it.weblaw.ch/issues/2018/24-Mai-2018/verfugungsmacht-und-_7cab5fad5c.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                &quot;Verfugungsmacht und Verfugungsrecht von Bitcoins im Konkurs&quot;
              </a>{" "}
              <a
                href="https://github.com/meisserecon/www/raw/gh-pages/2018-05-24%20Meisser%20Meisser%20und%20Kogens%20-%20Jusletter-IT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                (pdf)
              </a>
              . In it, we deepen the thoughts touched previously in{" "}
              <a
                href="https://github.com/meisserecon/www/raw/gh-pages/2018-04-04%20Hauser%20und%20Meisser%20-%20Digma.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                this article
              </a>
              . The article shows how Bitcoins can be returned to their rightful owners in case a custodian like Xapo goes bankrupt. This has far-reaching regulatory consequences even if no bankruptcy ever happens, as it implies whether Bitcoins have to be kept on or off balance sheet and thus also whether the long-term storage of Bitcoins for clients requires a banking license. Thanks to our article, the legal certainty about this issue has been further increased. The other two interesting legal articles{" "}
              <a
                href="https://www.dike.ch/ajp-pja-5-2018-en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                by Prof. Mirjam Eggen
              </a>{" "}
              and{" "}
              <a
                href="https://jusletter-it.weblaw.ch/issues/2018/24-Mai-2018/rechtsfragen-bei-der_9470b22bd3.html__ONCE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                by Prof. Rolf Weber and Salvatore Iacangelo
              </a>{" "}
              both provide an interpretation of Swiss law that would allow the issuance of printed securities (Wertpapiere) as tokens. The main challenge here is to argue that the word &quot;Wertpapier&quot; does not imply that physical paper (Papier) is needed and that something as abstract and intangible as a token also satisfies the definition of &quot;paper&quot; in that context. While both papers still get the classification of Bitcoins wrong (they base it on the false assumption that Bitcoins are data), their thoughts on what constitutes a security are of great help for Crypto Nation Switzerland, as they provide a (somewhat risky) legal pathway for crypto startups to issue equity-like tokens with an actual promise behind them. Today, &quot;investments&quot; into ICOs are often essentially donations.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-4 uppercase tracking-wide">
              Extended Abstract of our paper
            </h2>

            <p className="mb-6">
              Under Swiss law, the terms possession (Besitz) and ownership (Eigentum) are reserved for tangible things (apart from a few specific exceptions). As Bitcoins are not tangible, these terms do not apply. Instead, we propose the terms Verfugungsmacht (power to dispose, analogous to possession) and Verfugungsrecht (right to dispose, analogous to ownership). This distinction helps to discern what belongs to whom in case of bankruptcy. Using the example of the Tezos foundation, whose crypto assets are secured with two keys, one of which is controlled by Tezos itself and the other by Bitcoin Suisse AG, we demonstrate that the storage location of private keys alone does not suffice to meaningfully answer the question to whom the foundation&apos;s assets belong. Instead, the context and the contractual arrangement, from which the right to these assets can be derived, also need to be taken into account. This view provides a legal basis for the storage of Bitcoins on behalf of a client without taking them onto one&apos;s balance sheet, ensuring that the client&apos;s assets are protected in case of bankruptcy and that they are not included in the bankruptcy estate. Furthermore, we classify the Internet currency Bitcoin as a new type of asset. It is neither book money nor physical cash. Bitcoin is a rival, fictive, intangible asset sui generis. Being a new type of asset, we opine that there is a gap in the law regarding Aussonderung (removing an asset from the bankruptcy estate and returning it to the rightful owner) and Admassierung (adding an asset to the bankruptcy estate from a third party), which the law so far only specifies for tangible things. It follows that courts and bankruptcy administrators should fill this gap in accordance with article 1 of the Swiss Civil Code and that they should allow Aussonderung and Admassierung also for Bitcoins even though they are not tangible things.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-4 uppercase tracking-wide">
              General comment on why we like the Swiss legal system
            </h2>

            <p className="mb-6">
              Switzerland&apos;s legal system has a long tradition of being based on general principles that leave room for interpretation by courts and scholars. For example, the first article of the Swiss civil code says that in case a law is obviously missing, a judge can rule as if that law existed. To computer scientists like me, this is quite astonishing, as we tend to interpret the law as a strict set of rules and to take them literally. But thanks to its principle-based legal system, Switzerland can remain agile and competitive despite having a rather slow legislative process. The deeper wisdom behind this is that it is impossible to write perfect laws anyway. In fact, contrary to the first intuition, the more detailed a law is, the more holes it usually contains because when regulating something at a very high level of detail, it is much more likely that edge-cases are overlooked. In contrast, a principles-based legal system with laws that are kept at a high level of abstraction allow to take local or new information into account and can lead to much better and reasonable results. This is part of what makes Switzerland a decentralized political system and open to new developments such as crypto-currencies.
            </p>

            <p className="mb-6">
              (As a side-remark, this is one reason why our principles-based legal system is not so compatible with the detail-loving approach of the EU. For example, the European Commission recently proposed a new{" "}
              <a
                href="https://ec.europa.eu/info/law/better-regulation/initiatives/com-2018-96_en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                regulation on the law applicable to the third-party effects of assignments of claims
              </a>
              , which can be relevant when transferring certain types of claim-backed tokens. It contains 34 pages with 17000 words to regulate a particular aspect of the assignment of claims and frequently refers to national regulations which also need to be taken into account. In contrast, the 20 Swiss articles that regulate the assignment of claims contain 1260 words and apply to a much broader scope of cases.)
            </p>

            <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-4 uppercase tracking-wide">
              Conference presentation and contact
            </h2>

            <p className="mb-6">
              In case you want further information about the storage of Bitcoin, I recommend to read the paper itself. Furthermore, I will be presenting our findings at the{" "}
              <a
                href="https://www.isss.ch/veranstaltungen/2018/zuercher-tagung/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                10th Zurich conference of the Internet Security Society Switzerland
              </a>
              . Members of Bitcoin Association Switzerland get a rebate and only pay the partner rate of CHF 490. Furthermore, I have three free tickets that I can hand out to our readers (first come, first serve). Also, if you are interested in the regulatory working group of Bitcoin Association Switzerland, please also do not hesitate to get in touch with me (luzius@bitcoinassociation.ch).
            </p>
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
              9 Likes
            </span>
            <button className="flex items-center gap-1 hover:text-[#c75b4a]">
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

          {/* Newer/Older Posts Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center text-xs">
            <Link
              href="/bitcoin-association-switzerland/2018/9/24/is-the-ethereum-system-a-legal-subject"
              className="text-gray-600 hover:text-[#c75b4a] uppercase tracking-wider"
            >
              Newer Post{" "}
              <span className="font-normal normal-case">
                Is the Ethereum system a legal subject?
              </span>
            </Link>
            <Link
              href="/bitcoin-association-switzerland/2018/5/17/bitcoin-association-switzerland-2018-general-assembly"
              className="text-gray-600 hover:text-[#c75b4a] uppercase tracking-wider text-right"
            >
              Older Post{" "}
              <span className="font-normal normal-case">Bitcoin Association Switzerland 2018: General Assembly</span>
            </Link>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
