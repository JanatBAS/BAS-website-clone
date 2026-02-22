import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";

export default function CryptoValleyAssociationPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Simple Header Section */}
        <div className="bg-[#c75b4a] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-white/90">
              3 December 2019
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 tracking-wide uppercase text-center">
            Crypto Valley Association Issues Questionable Recommendations
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
              href="/bitcoin-association-switzerland/2019/12/3/crypto-valley-association-issues-questionable-recommendations"
              className="hover:text-[#c75b4a]"
            >
              3 December 2019
            </Link>
          </div>

          {/* Article Body */}
          <article className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-700">
            <p className="mb-6">
              While the Crypto Valley Association&apos;s paper on &quot;
              <a
                href="https://cryptovalley.swiss/wp-content/uploads/CVA-Asset-Tokenization-Paper-final-version-FDU.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Asset Tokenization
              </a>
              &quot; contains many insightful sections, there are other sections that get some fundamental legal considerations embarrassingly wrong. Further questionable is a piece of advice that could make an issued token incompatible with the law. In this blog post, we shed light on the three biggest blunders of the paper.
            </p>

            <p className="mb-6">
              First, the authors of the paper fail to recognize that there is a difference between the anti-money laundering laws applicable to cryptocurrencies and those applicable to asset tokens. Legally, crypto currencies are usually considered a means of payment, whereas asset tokens are usually considered securities. The relevant section misses this distinction and falsely claims that the FATF guidelines for &quot;virtual assets&quot; must also be applied to asset tokens, even though the FATF explicitly excludes securities from its definition of &quot;virtual asset&quot;. Furthermore, the paper implies that the issuance of security tokens is considered financial intermediation under the anti-money laundering act. Unlike the issuance of a means of payment, this is not actually the case.
            </p>

            <p className="mb-6">
              Second, this mistake is repeated in section five, which is supposed to describe the custody of security tokens. Instead of applying the legal principles applicable to securities, the author of that section just restates how cryptocurrencies are treated. The section is worded such that a casual reader gains the impression that the storage of security tokens for clients requires a banking license. This is doubly wrong. First, the relevant license for the handling of securities is not that of a bank, but that of a securities dealer. Second, it is not clear at all whether the Finma guidelines for crypto currencies should also apply to security tokens. For example, when a share token is held for a client together with the tokens of other clients, but each client separately registered in the issuer&apos;s shareholder registry, it is doubtful whether the tokens would legally belong to the custodian. Instead, the shares would likely be considered to belong to the clients. While Finma is well aware that security tokens and payment tokens might require a different legal treatment in this regard, the experts of the Crypto Valley Associations are apparently not.
            </p>

            <p className="mb-6">
              The third issue is the most critical one. In section three, the paper advocates a tokenization standard that contains a backdoor with functions to freeze, reassign and destroy tokens without the consent of the token holders. That defeats one of the main purposes of using a blockchain, namely providing the token holders with strong, inalienable property rights. Furthermore, it violates article 973d of the planned adjustments to Swiss securities law, which requires that the holder, but not the issuer, can dispose of the issued token. That property is a key requirement for a token to benefit from the proposed regulation. While it might be possible to implement that backdoor in a legally compliant way (e.g. using a multi-signature scheme), we generally consider it negligent to compromise on security without necessity. Instead, the recommendation should default to more elaborate and preferably decentralized mechanisms of handling lost keys. Unfortunately, the paper does not mention them at all.
            </p>

            <p className="mb-6">
              On the positive side, the paper contains a nice overview over various types of asset tokens and the steps it takes to issue them under Swiss law. It is unfortunate that the credibility of the better sections is undermined by the less thought-through ones. We hope that our critical comment can contribute to creating an improved version of the paper and invite the Crypto Valley Association to debate the pros and cons of backdoors in smart contracts with us.
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

          {/* Share */}
          <div className="flex items-center gap-6 mt-6 text-xs text-gray-500">
            <ShareButton title="Crypto Valley Association Issues Questionable Recommendations" />
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Comments (1)</h3>

            {/* Comment from Crypto Valley Association */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                  <Image
                    src="/images/misc/default-avatar.png"
                    alt="Crypto Valley Association"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <a
                      href="https://cryptovalley.swiss/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-900 text-sm hover:text-[#c75b4a]"
                    >
                      Crypto Valley Association
                    </a>
                    <span className="text-xs text-gray-500">6 years ago</span>
                  </div>
                  <div className="text-sm text-gray-700 space-y-4">
                    <p>Dear Blockchain Association Switzerland,</p>

                    <p>
                      Many thanks indeed for your interest in our paper. CVA is open to any constructive feedback that allows us to improve our paper. Some of the aspects of the Swiss Blockchain Federation Circular 2019/01 (&quot;Tokenized Equity&quot;) have been included in our paper.
                    </p>

                    <p>
                      We would like to comment as follows on the three points you highlighted in your review (https://www.bitcoinassociation.ch/bitcoin-association-switzerland).
                    </p>

                    <p>
                      1) Anti-money laundering laws - Regarding the applicability of AML laws, we have purposefully taken a more conservative view than what the law minimally would require. We did this simply out of the belief that avoiding ML issues is pivotal for the blockchain industry to get adopted rapidly in a sustainable manner (in particular as it applies to finance). We have been consistent on this topic since the time of the publication of our ICO code of conduct in Jan 2018. Accordingly, we recommend that companies are always able to identify their investors and complete basic sanction screening. This is also required to identify investors as per the Swiss code of obligations (686 para 1 SCO; Art. 697j para 1 SCO). FINMA has further clarified their expectations in this regard under the most recent 09/2019 Guidance.
                    </p>

                    <p>
                      Having said that, we thought useful to edit some sections of our paper to more accurately reflect this position. We note that this position does not fundamentally contradicts the one adopted by the Swiss Blockchain Federation on December 12th, 2019.
                    </p>

                    <p>
                      2) Custody of security tokens - It is undisputed that anyone, who in a professional capacity, amongst others, trades security/asset tokens in its own name for the account of its clients and (a) maintains accounts for these clients itself or through third parties for the settlement of transactions; or (b) holds securities of these clients in safe custody itself or through third parties in its own name, requires a license as a securities dealer (art. 3 para. 5 SESTO). In contrast, it is more delicate from a regulatory point of view to determine when a banking license is required with regard to the custody of payment tokens/virtual currencies. Consequently, the relevant section concentrates on this challenge.
                    </p>

                    <p>
                      In this case too, we found appropriate to include in our paper an introductory paragraph to the relevant section to express this concept more clearly.
                    </p>

                    <p>
                      3) Tokenization standard - We have based our line of argument on the latest CMTA20 proposal and we have not seen comments from your association on the proposal.
                    </p>

                    <p>
                      Going forward we believe that there is scope and need for the industry to examine, and to the extent possible define, in more details the legal &amp; compliance and smart contract aspects for each instrument and issuer, and appreciate that our specialist is already in contact with you on this matter.
                    </p>

                    <p>
                      Many thanks and best regards<br />
                      Crypto Valley Association
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newer/Older Posts Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center text-xs">
            <Link
              href="/bitcoin-association-switzerland/our-comment-on-designing-a-prudential-treatment-for-cryptoassets-of-the-basel-committee-on-banking-supervision"
              className="text-gray-600 hover:text-[#c75b4a] uppercase tracking-wider"
            >
              Newer Post{" "}
              <span className="font-normal normal-case block mt-1">
                Our Comment on &quot;Designing a prudential treatment for cryptoassets&quot; of the Basel Committee on Banking Supervision
              </span>
            </Link>
            <Link
              href="/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law"
              className="text-gray-600 hover:text-[#c75b4a] uppercase tracking-wider text-right"
            >
              Older Post{" "}
              <span className="font-normal normal-case block mt-1">
                Our Comment on the Swiss Blockchain Law
              </span>
            </Link>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
