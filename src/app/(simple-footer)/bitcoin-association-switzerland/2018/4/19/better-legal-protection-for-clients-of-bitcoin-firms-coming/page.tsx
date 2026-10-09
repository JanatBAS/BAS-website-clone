import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import { Metadata } from "next";

const post = getPostPage("better-legal-protection-for-clients-of-bitcoin-firms-coming");

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
          className="text-brand hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          digitec.ch
        </a>
        , proposed{" "}
        <a
          href="https://www.parlament.ch/de/ratsbetrieb/suche-curia-vista/geschaeft?AffairId=20170410"
          className="text-brand hover:underline"
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
          className="text-brand hover:underline"
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
