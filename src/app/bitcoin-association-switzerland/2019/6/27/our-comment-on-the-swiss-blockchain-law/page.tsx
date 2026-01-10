import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import Image from "next/image";

export default function SwissBlockchainLawCommentPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1561722207919-POHSK01LHZR0HKI1UBU1/bitcoin-regulation-cryptocurrency-exchange.jpg?format=2500w"
            alt="Our Comment on the Swiss Blockchain Law"
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
              <p className="text-sm md:text-base mb-2">27 June 2019</p>
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
            Our Comment on the Swiss Blockchain Law
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
              href="/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law"
              className="hover:text-[#c75b4a]"
            >
              27 June 2019
            </Link>
          </div>

          {/* Article Body */}
          <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-700">
            <p className="mb-6">
              In March, the Federal Council presented a draft for a number of legal adjustments and{" "}
              <a
                href="https://www.sif.admin.ch/sif/en/home/dokumentation/medienmitteilungen/medienmitteilung.msg-id-74420.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                invited Bitcoin Association Switzerland
              </a>{" "}
              to take part in the public consultation. The consultation phase ends this month and we have{" "}
              <a
                href="https://github.com/lclc/bitcoin-association-switzerland/blob/master/2019-06-27%20Vernehmlassung%20Blockchain%20Vorlage%20-%20Bitcoin%20Association%20Switzerland.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                filed an extensive comment
              </a>
              , in which we support the{" "}
              <a
                href="http://blockchainfederation.ch/wp-content/uploads/2019/05/SBF_Stellungnahme_Vernehmlassung.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                position of the Swiss Blockchain Federation
              </a>{" "}
              and lay out some of our common concerns in more detail. In this blog post, I will summarize the content of the proposed law as well as the comments of both Blockchain Federation and Bitcoin Association.
            </p>

            <p className="mb-6">
              In its{" "}
              <Link
                href="/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report"
                className="text-[#c75b4a] hover:underline"
              >
                December report
              </Link>
              , the Federal Council identified three main obstacles for the proliferation of the blockchain and its applications in Switzerland:
            </p>

            <ol className="list-decimal list-inside mb-6 space-y-2">
              <li>The creation and transfer of security tokens lacks a solid legal foundation.</li>
              <li>The law is silent on the question if and how clients can get their crypto assets back in case a custodian gets bankrupt.</li>
              <li>There is no suitable license for exchanges that want to list security tokens.</li>
            </ol>

            <p className="mb-6">
              Academically, the first change is by far the most interesting as its solution requires adjustments to the Swiss Code of Obligations, which is part of the foundations our whole legal system. Generally, Switzerland&apos;s legal system is rooted in basic principles and its laws are much less detailed than those of most other countries. This allows courts and scholars to figure out the details on the fly as new circumstances present themselves. This is one of the secrets of why Swiss companies enjoy a high degree of freedom of innovation. A software engineer would say that the Swiss system is more agile than that of other countries. This agility has already been used in the past when stock markets started to get digital in the 1980ies. And it can be used today to find ways to{" "}
              <a
                href="http://meissereconomics.com/2019/05/03/sharetoken.html#main"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                legally bind shares or other securities to a blockchain-based token
              </a>
              . The drawback of this approach is that it does not provide unconditional legal certainty. There is always a small risk that a judge follows a different interpretation of the law, thereby pulling the rug out from under such legal constructs. The Federal Council proposes to eliminate this risk by adding explicit legal foundations for security tokens into the Code of Obligations.
            </p>

            <p className="mb-6">
              At first sight, enabling security tokens sounds straight-forward. However, there are subtle legal considerations to be made. From a legal and technical point of view, a token must fulfill two key properties. The first is to be resistant to manipulation (including counterfeits / copying) and the second is what Swiss lawyers call publicity. Publicity is the ability of the holder to prove to anyone that he actually holds the token. Just like I can prove to anyone that I own a certified security that is printed on paper by presenting that paper, I can prove to anyone that I am in control of a particular token by signing a publicly verifiable message with the right private key. In both cases, the holder can publicly prove that the security is in his possession. Sometimes people make the mistake of turning this upside down, assuming that the blockchain-based ledger allows the issuer to prove who the holders are. While it is conceivable to build such a blockchain, this is not how today&apos;s blockchains work. Today&apos;s blockchains assign tokens to addresses, and not to persons. Applications and legal considerations that are based on the assumption that there is a stable one-to-one relationship between addresses and persons will inevitable fail sooner or later. In that regard. tokens are very much like printed securities: the paper allows the owner to prove that he is in possession of the share, but the issuer generally has no means to pinpoint the location of the paper. This any many other subtle reasons make the drafted law an excellent proposal: by exploiting the parallels to printed securities, it was possible to craft a robust extension to the Code of Obligation that rests on proven principles.
            </p>

            <p className="mb-6">
              With the proposed extension of the Code of Obligations, one can issue everything as a tokenized security that could also be issued as a printed security and transfer the security by handing over the possession over the token. It does not matter how the control over the token is transferred. Just like I can give you printed security by giving you a key to a deposit box in which it resides, I can also give a token to you through indirect means, for example by giving you a paper wallet that contains a private key that controls a smart contract that controls another smart contract that finally has the token. The indirections do not matter. The only thing that matters legally is that you gain the ability to prove that you control the token - directly or indirectly. These considerations also illustrate why white-listing only works for one-time transactions. There is no stable one-to-one relationship between addresses and people. As soon as you allow indirect possession (which is a must for applications like Uniswap), your white-list becomes unenforceable. The right way to identify the holders of a token is through a secondary register.
            </p>

            <p className="mb-6">
              When issuing registered shares, the company must keep a shareholder registry that identifies all shareholders by name. The alternative of issuing anonymous bearer shares is not recommended as they do not conform to today&apos;s standards of accountability. So the question is: how can one issue registered shares on the blockchain without writing personal data onto the blockchain? The answer is simple: just split the registry into two parts, the token registry and the shareholder registry. The token registry resides on the blockchain and is anonymous. And the shareholder registry resides in a database and contains a list of all shareholders and their addresses. This split stems from the paper-based world and is already present in today&apos;s Code of Obligations. The token is freely transferrable (just like a piece of paper would be). However, in order to actually enjoy the rights of a shareholder, you must present the paper to the company and demand to be registered, providing your name and address. Until you have done so, the company can for example pay out dividends to the previous owner of your shares and there is nothing you can do about it. That results in having the best of both worlds: you can engage in short-term trading without filing any forms, but there is still a high level of transparency regarding the ownership of the company as long term holders are forced to register themselves.
            </p>

            <p className="mb-6">
              This brings us to the next topic and the second big proposed change to the existing laws: the handling of tokens under bankruptcy. As{" "}
              <Link
                href="/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank"
                className="text-[#c75b4a] hover:underline"
              >
                outlined in an earlier post
              </Link>
              , there is an important distinction between possession and ownership. Possession is who control something. Ownership is who it belongs to. If I borrow your car, I gain possession over it, but you retain it ownership. Swiss law uses this distinction to find out who stuff belongs to if someone goes bankrupt. If I go bankrupt while having borrowed your car, you can get your car back. However, the problem is that Swiss law only allows this distinction to be made to tangible items and &quot;controllable forces of nature&quot; (e.g. electricity but not wind). That means it is unclear whether you would be able to get any Bitcoins back if you borrowed me some and I go bankrupt. To fix this, the Federal Council proposes to allow you to get your crypto assets back as long as I kept them on a separate address. This is already a step forward, but unfortunately - as we point out in our comment - not future-proof. For example, if you used lightning network to send me the borrowed Bitcoins, a literal interpretation of the proposed law would not allow you to get them back again as lighting network transactions do not lead to a separation of our two balances that is directly observable on the block chain. Thus, we urge the Federal Council to fix this issue and extend your right to get your tokens back to all cases where you can prove that they are actually yours. There are plenty of other use-cases besides lightning network where this is essential and we really hope that this rather small adaption will be made in the next step of the legislative process, where the Federal Council reviews all comments and revises the proposal.
            </p>

            <p className="mb-6">
              The third important change is the creation of a new license category &quot;DLT-Trading-System&quot; (whereas DLT stands for Distributed Ledger Technology) in the Financial Markets Infrastructure Law, which would allow license-holders to operate an exchange for security tokens. That law contains roughly 14&apos;000 words and is - as far as I know - a condensed version of the European Union&apos;s{" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32014L0065&from=EN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Directive 2014/65/EU on markets in financial instruments and amending Directive 2002/92/EC and Directive 2011/61/EU
              </a>{" "}
              (72&apos;000 words, also known as MiFID II) and the{" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32012R0648&from=EN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Regulation No 648/2012 on OTC derivatives, central counterparties and trade repositories
              </a>{" "}
              (43&apos;000 words, also known as EMIR). Even though the Swiss Financial Markets Infrastructure Law much more compact and stringent than its EU counterpart, it is still seen as relatively bloated and not very elegant among Swiss legal scholars. As the European laws have been designed with only the large, established exchanges in mind, they do not leave any room for innovation - and neither does the Swiss copy. In order to fix this without touching the regulation of the established exchanges, the Federal Council proposes to establish a new, more light-weight license category. An important and well-chosen characteristic of that proposal is that it provides the Federal Council with a lot of leeway in the actual implementation. That way, once the parliament (hopefully) passes the proposed law, the Federal Council can write a relatively permissive act to regulate the DLT-Trading-System while retaining some agility which allows to adjust the regulation without going through the parliament again.
            </p>

            <p className="mb-6">
              All in all, this is an excellent proposal with the right priorities. If the law passes (after our small adjustments, of course :) ), it could greatly contribute to globally making Switzerland the first address for the issuance of security tokens.
            </p>

            <p className="mb-6">
              <strong>Update 2020-06-20:</strong>
            </p>

            <p className="mb-6">
              In the meantime, the Federal Council has fixed the issue of the too strict segregation. This is a big step forward. However, at the same time it added the possibility to limit off-balance sheet storage of crypto assets in a separate clause. It remains to be seen to what extent the Federal Council chooses to limit off-balance sheet storage again in an ordinance once the law has been passed by both chambers of parliament. So far, the law passed the first chamber (Nationalrat). It will hopefully be voted on in autumn in the second chamber (Ständerat).
            </p>
          </article>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Tagged:{" "}
              <Link
                href="/bitcoin-association-switzerland/tag/Regulation"
                className="text-[#c75b4a] hover:underline"
              >
                Regulation
              </Link>
            </p>
          </div>

          {/* Likes and Share */}
          <div className="flex items-center gap-6 mt-6 text-xs text-gray-500">
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
              11 Likes
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

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Comments (2)</h3>

            {/* Comment 1 */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                  <Image
                    src="https://assets.squarespace.com/universal/images-v6/default-avatar.png"
                    alt="Enrique"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900 text-sm">Enrique</span>
                    <span className="text-xs text-gray-500">7 years ago</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Excellent !
                  </p>
                  <p className="text-sm text-gray-700">
                    Any chance a similar detailed document explaining easily the implications of 2 and 3rd change can be published by the Bitcoin Association?
                  </p>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                  <Image
                    src="https://assets.squarespace.com/universal/images-v6/default-avatar.png"
                    alt="Luzius"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900 text-sm">Luzius</span>
                    <span className="text-xs text-gray-500">7 years ago</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Yes, actually I wrote something about those too but they got lost due to a copy &amp; paste error. Will be added again soon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newer/Older Posts Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center text-xs">
            <Link
              href="/bitcoin-association-switzerland/2019/12/3/crypto-valley-association-issues-questionable-recommendations"
              className="text-gray-600 hover:text-[#c75b4a] uppercase tracking-wider"
            >
              Newer Post{" "}
              <span className="font-normal normal-case">
                Crypto Valley Association Issues Questionable Recommendations
              </span>
            </Link>
            <Link
              href="/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report"
              className="text-gray-600 hover:text-[#c75b4a] uppercase tracking-wider text-right"
            >
              Older Post{" "}
              <span className="font-normal normal-case">On the Federal Council Report</span>
            </Link>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
