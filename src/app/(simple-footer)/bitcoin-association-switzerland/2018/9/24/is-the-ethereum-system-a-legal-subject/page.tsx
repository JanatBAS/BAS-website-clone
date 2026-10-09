import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostPage } from "@/data/blog-posts";
import { Metadata } from "next";

const post = getPostPage("is-the-ethereum-system-a-legal-subject");

export const metadata: Metadata = {
  title: post.title,
  description:
    "There are some hints that abstract systems like Ethereum should legally be treated like their own entities, the latest coming from the context of value-added tax (VAT or MWST in German).",
};

export default function IsTheEthereumSystemALegalSubjectPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        There are some hints that abstract systems like Ethereum should
        legally be treated like their own entities. The latest such hints
        comes from the context of value-added tax (VAT or MWST in German),
        where the taxation of transaction fees is practically impossible
        when trying to find a taxable relationship between miners and
        users. If the government ever wants to charge VAT on IT-services
        rendered by abstract systems such as Ethereum, it cannot get
        around recognizing these abstract systems as legal subjects. In
        the context of VAT, they could treat them like foreign firms,
        thereby enabling tax authorities to demand VAT (Bezugsteuer) when
        firms &quot;import&quot; IT services from such systems. However,
        such a change would require the law to be adjusted, which is not
        worth doing at the current adoption rate of blockchain-based
        services (we estimate that the ESTV misses out on about
        50&apos;000 CHF in taxes by not being able to levy VAT on services
        rendered by systems such as Ethereum).
      </p>

      <p>
        So for now, all these services should remain untaxed as everything
        else would cause completely disproportionate costs to everyone
        involved. That is at least the position we have taken in{" "}
        <a
          href="https://github.com/meisserecon/www/raw/gh-pages/basblog/2018-09-26-MWST-Kommentar.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          our comment
        </a>{" "}
        to the latest{" "}
        <a
          href="https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/kg_Kryptowaehrungen.pdf.download.pdf/kg_Kryptowaehrungen_d.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          draft
        </a>{" "}
        of the Swiss federal tax authority (ESTV) on how to treat crypto
        currencies from a VAT-perspective. The important part is to have a
        perspective on how it could potentially be done in case the
        economic significance of transaction fees from blockchain-based
        services grows by a few orders of magnitude.
      </p>
    </BlogPostLayout>
  );
}
