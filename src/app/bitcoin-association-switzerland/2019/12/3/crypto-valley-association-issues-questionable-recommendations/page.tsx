import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "Crypto Valley Association Issues Questionable Recommendations",
  date: "3 December 2019",
  author: "Luzius Meisser",
  authorId: "5a9907f3e4966b72996b9c31",
  href: "/bitcoin-association-switzerland/2019/12/3/crypto-valley-association-issues-questionable-recommendations",
  tags: ["Regulation"],
  comments: [
    {
      author: "Crypto Valley Association",
      authorUrl: "https://cryptovalley.swiss/",
      date: "6 years ago",
      body: (
        <>
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
        </>
      ),
    },
  ],
  newerPost: {
    title:
      "Our Comment on \"Designing a prudential treatment for cryptoassets\" of the Basel Committee on Banking Supervision",
    href: "/bitcoin-association-switzerland/our-comment-on-designing-a-prudential-treatment-for-cryptoassets-of-the-basel-committee-on-banking-supervision",
  },
  olderPost: {
    title: "Our Comment on the Swiss Blockchain Law",
    href: "/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description:
    "The Crypto Valley Association's paper on Asset Tokenization contains many insightful sections, but others get some fundamental legal considerations embarrassingly wrong.",
};

export default function CryptoValleyAssociationPage() {
  return (
    <BlogPostLayout post={post}>
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
    </BlogPostLayout>
  );
}
