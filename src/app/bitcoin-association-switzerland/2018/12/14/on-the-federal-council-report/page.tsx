import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import Link from "next/link";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "On the Federal Council Report",
  date: "14 December 2018",
  author: "Luzius Meisser",
  authorId: "5a9907f3e4966b72996b9c31",
  href: "/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report",
  tags: ["Regulation"],
  newerPost: {
    title: "Our Comment on the Swiss Blockchain Law",
    href: "/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law",
  },
  olderPost: {
    title: "Is the Ethereum system a legal subject?",
    href: "/bitcoin-association-switzerland/2018/9/24/is-the-ethereum-system-a-legal-subject",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description:
    "The federal council published its 170-page report on the legal foundations of the blockchain in Switzerland, incorporating the findings of a consultation to which the Bitcoin Association also provided inputs.",
};

export default function OnTheFederalCouncilReportPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        The federal council published its 170-page report on the legal
        foundations of the blockchain in Switzerland. It incorporates the
        findings of the consultation that took place in September and to
        which the Bitcoin Association also provided some inputs. All in all,
        it is great that the Swiss government not only recognizes the
        potential of the blockchain, but also applies the right strategy for
        allowing the blockchain-ecosystem to flourish.
      </p>

      <p>
        In particular, the report focuses on removing barriers and
        establishing legal certainty in various legal areas except taxes,
        which are planned to be looked at in 2019. It does not propose a
        specific &quot;blockchain law&quot; like Liechtenstein and it does
        not try to pro-actively steer the development into a specific
        direction. This is the right approach and in the Swiss tradition of
        a principles-based legal system that ensures freedom of innovation
        and a sound foundation for economic prosperity.
      </p>

      <p>
        A particularly interesting idea is the proposal to create a new
        exchange category for crypto exchanges that list security tokens.
        Before 2016, Finma could have allowed such exchanges at its own
        discretion. But then, the Financial Market Infrastructure Act was
        introduced in order to make the Swiss regulatory environment
        compatible with that of the European Union. It mandated that
        exchanges must be one of three specific types (stock exchange,
        mutual trading facility, or organized trading system). Unfortunately,
        none of these types fits the needs of crypto exchanges very well,
        making it necessary to create a new type in order to allow such
        exchanges to exist in Switzerland. This shows once again how the
        traditional Swiss approach of having principle-based laws that give
        a lot of discretion to citizens and regulatory agencies are much
        more innovation-friendly than overly detailed European-style laws.
      </p>

      <p>
        Another interesting question that we{" "}
        <Link
          href="/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank"
          className="text-[#c75b4a] hover:underline"
        >
          discussed before in this blog
        </Link>{" "}
        is the storage of crypto assets for clients and what happens to them
        in the case of a default. Here, the report is not as optimistic as
        it could be regarding the current legal situation, but we welcome
        its conclusion that a legal clarification is desired and that
        clients should get their assets back when the custodian defaults,
        assuming the assets can be clearly identified as belonging to the
        clients.
      </p>
    </BlogPostLayout>
  );
}
