import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import { Metadata } from "next";

const post = getPostPage("stellungnahme-der-bitcoin-association-switzerland-zur-neuen-fintech-regulierung");

export const metadata: Metadata = {
  title: post.title,
  description:
    "The State Secretariat for International Financial Matters invited us to comment on the latest proposal to improve regulation for fintech startups in Switzerland.",
};

export default function RegulatoryCommentFintechPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        One of the main activities and major reasons for the founding of the Bitcoin Association Switzerland is building a positive regulatory environment for crypto currency startups in Switzerland. The State Secretariat for International Financial Matters invited us to comment on the latest proposal to improve regulation for fintech startups in Switzerland. The plan is to allow startups that previously would have required a full banking license to handle client funds under a more appropriate, light-weight regulation (known as &quot;banking license light&quot;). Luzius Meisser, founder and board member of the BAS, wrote a comment in the name of our association, with a lot of support by the Swiss Fintech community. You can access the comment (in German) here:
      </p>

      <h2 className="text-xl font-normal text-brand text-center my-8">
        <a
          href="/pdfs/StellungnahmeBitcoinAssociationSwitzerland.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          PDF zur Stellungnahme der Bitcoin Association
        </a>
      </h2>

      <p>
        In particular during the pioneer phase of a new technology, small regulatory differences can make an enormous long-term difference. Switzerland is in the pole position for becoming a major hub for blockchain technology, but there are still a few hurdles that stand in the way. Some of them will be removed by the proposed relaxation of the banking law, but there is still plenty of work to be done. Fortunately, the State Secretariat of Economic Affairs (SECO) has recognized this and{" "}
        <a
          href="https://www.seco.admin.ch/seco/de/home/wirtschaftslage---wirtschaftspolitik/wirschaftspolitik/digitalisierung.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          calls for comments
        </a>{" "}
        on what regulation stands in the way of digitalization in Switzerland. If you are aware of concrete laws that inhibits your business idea and that should be changed, let us now so we can coordinate on a common comment for SECO&apos;s &quot;digital test&quot;.
      </p>
    </BlogPostLayout>
  );
}
