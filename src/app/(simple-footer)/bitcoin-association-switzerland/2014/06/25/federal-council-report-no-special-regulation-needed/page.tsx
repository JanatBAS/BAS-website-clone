import BlogPostLayout, { type BlogPostComment } from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import { Metadata } from "next";

const post = getPostPage("federal-council-report-no-special-regulation-needed");

const comments: BlogPostComment[] = [
  {
    author:
      "Virtual Mining Bitcoin News » Swiss Report Lays Foundation for Bitcoin to Become Legal Money",
    authorUrl:
      "http://virtualmining.com/swiss-report-lays-foundation-for-bitcoin-to-become-legal-money/",
    date: "12 years ago",
    likes: 0,
    body: (
      <p className="text-sm text-gray-700">
        [...] Bitcoin Association Switzerland (BAS), the local bitcoin
        trade association, was similarly positive in its review of the
        government&apos;s analysis, stating: [...]
      </p>
    ),
  },
];

export const metadata: Metadata = {
  title: post.title,
  description:
    "A report by the Swiss government concludes that Bitcoin is covered by existing laws and that no new regulation is needed.",
};

export default function FederalCouncilReportPage() {
  return (
    <BlogPostLayout post={post} comments={comments}>
      <p>
        In a{" "}
        <a
          href="http://www.admin.ch/aktuell/00089/index.html?lang=en&msg-id=53513"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          report published today
        </a>
        , the Swiss government answers questions raised in two
        parliamentary postulates. The report concludes that Bitcoin is
        covered by existing laws and that no new regulation is needed.
        This is excellent news and in full accordance with our views.
        Furthermore, the report confirms that Bitcoins are neither a good
        nor a service - which is relevant when deciding whether VAT
        applies when selling Bitcoins (it should not). Furthermore, the
        report says that the only thing Bitcoin currently lacks to be
        money like other currencies is low volatility. As volatility is
        decreasing, is should thus only be a matter of time until Bitcoin
        officially gets the legal status of &quot;money&quot;.
      </p>

      <p>
        A side remark regarding miners: On question the report leaves
        unanswered is whether miners should be classified as financial
        intermediaries. Probably, the federal council sees this as a
        detail to be left to FINMA. In our view, miners do not require
        such a license because miners never take possession of the
        Bitcoins they process. So unlike with banks, there is no risk of
        embezzlement and thus no necessity to protect consumers from that.
        Also note that technically, most miners do not process
        transactions - it is the mining pool that does that for them.
        Instead, miners should be legally seen as someone selling
        computing power to a mining pool.
      </p>
    </BlogPostLayout>
  );
}
