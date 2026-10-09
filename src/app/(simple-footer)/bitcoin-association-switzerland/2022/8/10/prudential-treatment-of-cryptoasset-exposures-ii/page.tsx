import BlogPostLayout, { type BlogPostComment } from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import { Metadata } from "next";

const post = getPostPage("prudential-treatment-of-cryptoasset-exposures-ii");

const comments: BlogPostComment[] = [
  {
    author: "Ruckli",
    date: "3 years ago",
    body: (
      <>
        <p className="text-gray-700 text-sm leading-relaxed">
          Vielen Dank fur Info.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mt-2">
          Der BIZ geht es hauptsachlich darum ihre Pfrunde sowie total veraltete Strukturen zu bewahren. Glucklicherweise interessieren sich 80 % der Studienabganger im Finanzbereich fur Cryptos! Es gibt viel zu tun und die Moglichkeiten sind unendlich. Das ist vergleichbar, wie wenn man vor 8 Jahren in Tesla, Amazon, MSFT, Alibaba, etc. investiert hatte. Unverstandlich dass man eine, vor dem abgrundstehende Industrie (Banks), nicht mehr in diesem Bereich unterstutzt. Sie sollten an die Zukunft glauben und das Potential erkennen. Sicher ist es nicht einfach sich mit einer neuen Technologie auseinanderzusetzen. Erkennen Sie den Nutzen fur die ganze Welt und wie damit demokratisches Denken gefordert werden konnte. Cryptos kommen sowieso. Die Frage ist nur wie lange Sie es noch aufhalten konnen.
        </p>
      </>
    ),
  },
  {
    author: "Ruckli",
    date: "3 years ago",
    body: (
      <>
        <p className="text-gray-700 text-sm leading-relaxed">
          Vielen Dank fur Info.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mt-2">
          Der BIZ geht hauptsachlich darum Ihre Pfunde sowie total veraltete Strukturen zu schutzen bis es einfach nicht mehr geht. Glucklicherweise interessieren sich 80 % der Studienabganger im Finanzbereich fur Cryptos. Es gibt so viel zu tun und die Moglichkeiten sind unendlich. Das ist vergleichbar wie wenn man vor 8 Jahren in Tesla, Amazon, MSFT, Alibaba, etc. investiert hatte. Unverstandlich, dass man einer vor dem abgrundstehende Industrie (Banks) nicht unterstutzt und motiviert in diesen Bereich zu investieren. Sie sollten an die Zukunft glauben und das Potential sehen. Ja, es wahrscheinlich zu kompliziert sich auf etwas Neues einzustellen.
        </p>
      </>
    ),
  },
  {
    author: "Bjorn Bjercke",
    date: "3 years ago",
    body: (
      <p className="text-gray-700 text-sm leading-relaxed">
        Thank you for this.
      </p>
    ),
  },
];

export const metadata: Metadata = {
  title: post.title,
  description:
    "While the Bank for International Settlement / Basel Committee on Banking Supervision continues to propose regulation, they also have developed a habit of not addressing legitimate concerns from the community.",
};

export default function PrudentialTreatmentCryptoassetExposuresII() {
  return (
    <BlogPostLayout post={post} comments={comments}>
      <p className="mb-6">
        While the Bank for International Settlement / Basel Committee on Banking Supervision continues to propose regulation, they also have developed a habit of not addressing legitimate concerns from the community. That is highly regrettable, but no reason to throw in the towel. So the Bitcoin Association Switzerland continues to provide constructive feedback and - so we think - well argued suggestions on how to improve on the longterm goals of the BIS to make the space safer and allow for more innovation.
      </p>

      <p className="mb-8">
        The{" "}
        <a
          href="/pdfs/2022-08-07-BAS-comment-on-BIS-final.pdf"
          className="text-brand hover:underline"
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
            className="text-brand hover:underline"
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
    </BlogPostLayout>
  );
}
