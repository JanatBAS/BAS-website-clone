import BlogPostLayout, { BlogPostData } from "@/components/BlogPostLayout";
import { Metadata } from "next";

const post: BlogPostData = {
  title: "Better legal protection for clients of Bitcoin firms coming?",
  date: "19 April 2018",
  author: "Luzius Meisser",
  authorId: "5a9907f3e4966b72996b9c31",
  href: "/bitcoin-association-switzerland/2018/4/19/better-legal-protection-for-clients-of-bitcoin-firms-coming",
  featuredImage: "/images/blog/insurance.jpg",
  newerPost: {
    title: "Bitcoin Association Switzerland 2018: General Assembly",
    href: "/bitcoin-association-switzerland/2018/5/17/bitcoin-association-switzerland-2018-general-assembly",
  },
  olderPost: {
    title: "The Latest Regulatory Threat",
    href: "/bitcoin-association-switzerland/2018/3/2/the-latest-regulatory-threat",
  },
};

export const metadata: Metadata = {
  title: post.title,
  description:
    "Marcel Dobler, member of the Swiss national parliament and co-founder of digitec.ch, proposed a law that could turn out to be very helpful for Crypto Nation Switzerland.",
};

export default function BetterLegalProtectionPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Marcel Dobler, member of the Swiss national parliament and co-founder of{" "}
        <a
          href="https://www.digitec.ch/"
          className="text-[#c75b4a] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          digitec.ch
        </a>
        , proposed{" "}
        <a
          href="https://www.parlament.ch/de/ratsbetrieb/suche-curia-vista/geschaeft?AffairId=20170410"
          className="text-[#c75b4a] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          a law
        </a>{" "}
        that could turn out to be very helpful for Crypto Nation Switzerland. It would
        give you the right to get your digital assets back in case you have stored them
        with a provider that goes bankrupt.
      </p>

      <p>
        For example, if you have lots of personal photos with a cloud storage service
        and that service goes bankrupt, this law would help you getting your photos
        back. But most importantly, this would also apply to Bitcoins stored with a
        crypto startup, given that your Bitcoins are somehow identifiable as yours.
      </p>

      <p>
        Under today&apos;s laws, the legal situation is unfortunately much less clear.
        Of course, the best way to store crypto assets is to not trust anyone and to
        store them yourself. But some users that are less technically savvy would like
        to rely on storage services. For those, the proposad law would be a big step
        forward and strengthen their property rights. Let&apos;s hope the parliamentary
        commission that{" "}
        <a
          href="https://www.parlament.ch/centers/documents/de/sitzungsplanung-rk-n.pdf"
          className="text-[#c75b4a] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          discusses the proposal on May 3rd
        </a>{" "}
        recognizes these significant benefits.
      </p>
    </BlogPostLayout>
  );
}
