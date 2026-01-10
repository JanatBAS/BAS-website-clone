import { notFound } from "next/navigation";
import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import Link from "next/link";

// Blog post content registry - maps slug patterns to content
// Format: "year/month/day/title-slug" -> post data and content
interface BlogPostContent {
  post: BlogPostData;
  content: React.ReactNode;
}

// Helper function to format date from URL pattern
function formatDateFromSlug(year: string, month: string, day: string): string {
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Static blog post registry - add new posts here
const blogPostRegistry: Record<string, BlogPostContent> = {
  // Example: On the Federal Council Report
  "2018/12/14/on-the-federal-council-report": {
    post: {
      title: "On the Federal Council Report",
      date: "14 December 2018",
      author: "Luzius Meisser",
      authorId: "5a9907f3e4966b72996b9c31",
      tags: ["Regulation"],
      likeCount: 8,
      newerPost: {
        title: "Our Comment on the Swiss Blockchain Law",
        href: "/bitcoin-association-switzerland/2019/6/27/our-comment-on-the-swiss-blockchain-law",
      },
      olderPost: {
        title: "Is the Ethereum system a legal subject?",
        href: "/bitcoin-association-switzerland/2018/9/24/is-the-ethereum-system-a-legal-subject",
      },
    },
    content: (
      <>
        <p>
          The federal council published its 170-page report on the legal foundations of the blockchain in
          Switzerland. It incorporates the findings of the consultation that took place in September and to
          which the Bitcoin Association also provided some inputs. All in all, it is great that the Swiss
          government not only recognizes the potential of the blockchain, but also applies the right strategy
          for allowing the blockchain-ecosystem to flourish.
        </p>

        <p>
          In particular, the report focuses on removing barriers and establishing legal certainty in various legal
          areas except taxes, which are planned to be looked at in 2019. It does not propose a specific
          &quot;blockchain law&quot; like Liechtenstein and it does not try to pro-actively steer the development into a
          specific direction. This is the right approach and in the Swiss tradition of a principles-based legal
          system that ensures freedom of innovation and a sound foundation for economic prosperity.
        </p>

        <p>
          A particularly interesting idea is the proposal to create a new exchange category for crypto exchanges
          that list security tokens. Before 2016, Finma could have allowed such exchanges at its own
          discretion. But then, the Financial Market Infrastructure Act was introduced in order to make the
          Swiss regulatory environment compatible with that of the European Union. It mandated that
          exchanges must be one of three specific types (stock exchange, mutual trading facility, or organized
          trading system). Unfortunately, none of these types fits the needs of crypto exchanges very well,
          making it necessary to create a new type in order to allow such exchanges to exist in Switzerland.
          This shows once again how the traditional Swiss approach of having principle-based laws that give a
          lot of discretion to citizens and regulatory agencies are much more innovation-friendly than overly
          detailed European-style laws.
        </p>

        <p>
          Another interesting question that we{" "}
          <Link href="/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank">
            discussed before in this blog
          </Link>{" "}
          is the storage of crypto assets for clients and what happens to them in the case of a default. Here,
          the report is not as optimistic as it could be regarding the current legal situation, but we welcome
          its conclusion that a legal clarification is desired and that clients should get their assets back
          when the custodian defaults, assuming the assets can be clearly identified as belonging to the
          clients.
        </p>
      </>
    ),
  },

  // Example: Our Comment on the Swiss Blockchain Law
  "2019/6/27/our-comment-on-the-swiss-blockchain-law": {
    post: {
      title: "Our Comment on the Swiss Blockchain Law",
      date: "27 June 2019",
      author: "Luzius Meisser",
      authorId: "5a9907f3e4966b72996b9c31",
      tags: ["Regulation"],
      likeCount: 11,
      featuredImage:
        "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1561722207919-POHSK01LHZR0HKI1UBU1/bitcoin-regulation-cryptocurrency-exchange.jpg?format=2500w",
      newerPost: {
        title: "Crypto Valley Association Issues Questionable Recommendations",
        href: "/bitcoin-association-switzerland/2019/12/3/crypto-valley-association-issues-questionable-recommendations",
      },
      olderPost: {
        title: "On the Federal Council Report",
        href: "/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report",
      },
    },
    content: (
      <>
        <p>
          In March, the Federal Council presented a draft for a number of legal adjustments and{" "}
          <Link
            href="https://www.sif.admin.ch/sif/en/home/dokumentation/medienmitteilungen/medienmitteilung.msg-id-74420.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            invited Bitcoin Association Switzerland
          </Link>{" "}
          to take part in the public consultation. The consultation phase ends this month and we have{" "}
          <Link
            href="https://github.com/lclc/bitcoin-association-switzerland/blob/master/2019-06-27%20Vernehmlassung%20Blockchain%20Vorlage%20-%20Bitcoin%20Association%20Switzerland.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            filed an extensive comment
          </Link>
          , in which we support the{" "}
          <Link
            href="http://blockchainfederation.ch/wp-content/uploads/2019/05/SBF_Stellungnahme_Vernehmlassung.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            position of the Swiss Blockchain Federation
          </Link>{" "}
          and lay out some of our common concerns in more detail. In this blog post, I will summarize the
          content of the proposed law as well as the comments of both Blockchain Federation and Bitcoin
          Association.
        </p>

        <p>
          In its{" "}
          <Link href="/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report">
            December report
          </Link>
          , the Federal Council identified three main obstacles for the proliferation of the blockchain and its
          applications in Switzerland:
        </p>

        <ol>
          <li>The creation and transfer of security tokens lacks a solid legal foundation.</li>
          <li>
            The law is silent on the question if and how clients can get their crypto assets back in case a
            custodian gets bankrupt.
          </li>
          <li>There is no suitable license for exchanges that want to list security tokens.</li>
        </ol>

        <p>
          Academically, the first change is by far the most interesting as its solution requires adjustments to
          the Swiss Code of Obligations, which is part of the foundations our whole legal system. Generally,
          Switzerland&apos;s legal system is rooted in basic principles and its laws are much less detailed than
          those of most other countries. This allows courts and scholars to figure out the details on the fly as
          new circumstances present themselves. This is one of the secrets of why Swiss companies enjoy a high
          degree of freedom of innovation. A software engineer would say that the Swiss system is more agile
          than that of other countries.
        </p>

        <p>
          <strong>Update 2020-06-20:</strong>
        </p>

        <p>
          In the meantime, the Federal Council has fixed the issue of the too strict segregation. This is a big
          step forward. However, at the same time it added the possibility to limit off-balance sheet storage of
          crypto assets in a separate clause. It remains to be seen to what extent the Federal Council chooses
          to limit off-balance sheet storage again in an ordinance once the law has been passed by both
          chambers of parliament.
        </p>
      </>
    ),
  },

  // Example: Is the Ethereum system a legal subject?
  "2018/9/24/is-the-ethereum-system-a-legal-subject": {
    post: {
      title: "Is the Ethereum system a legal subject?",
      date: "24 September 2018",
      author: "Luzius Meisser",
      authorId: "5a9907f3e4966b72996b9c31",
      likeCount: 6,
      newerPost: {
        title: "On the Federal Council Report",
        href: "/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report",
      },
      olderPost: {
        title: "Why storing Bitcoins for clients does not make you a bank",
        href: "/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank",
      },
    },
    content: (
      <>
        <p>
          There are some hints that abstract systems like Ethereum should legally be treated like their own
          entities. The latest such hints comes from the context of value-added tax (VAT or MWST in German),
          where the taxation of transaction fees is practically impossible when trying to find a taxable
          relationship between miners and users.
        </p>

        <p>
          This is a placeholder for the full article content. The complete post discusses the legal
          implications of treating decentralized systems as legal entities.
        </p>
      </>
    ),
  },
};

// Generate static params for build time optimization
export async function generateStaticParams() {
  return Object.keys(blogPostRegistry).map((slug) => ({
    slug: slug.split("/"),
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const blogPost = blogPostRegistry[slugPath];

  if (!blogPost) {
    return {
      title: "Post Not Found | Bitcoin Association Switzerland",
    };
  }

  return {
    title: `${blogPost.post.title} | Bitcoin Association Switzerland`,
    description: `${blogPost.post.title} - By ${blogPost.post.author} on ${blogPost.post.date}`,
    openGraph: {
      title: blogPost.post.title,
      description: `By ${blogPost.post.author} on ${blogPost.post.date}`,
      type: "article",
      publishedTime: blogPost.post.date,
      authors: [blogPost.post.author],
      images: blogPost.post.featuredImage ? [blogPost.post.featuredImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugPath = slug.join("/");

  // Look up the blog post in our registry
  const blogPost = blogPostRegistry[slugPath];

  // If not found, return 404
  if (!blogPost) {
    notFound();
  }

  return (
    <BlogPostLayout post={blogPost.post}>
      {blogPost.content}
    </BlogPostLayout>
  );
}
