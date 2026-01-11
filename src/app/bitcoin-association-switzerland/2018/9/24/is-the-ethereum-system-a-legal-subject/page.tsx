import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is the Ethereum system a legal subject? - Bitcoin Association Switzerland",
  description:
    "There are some hints that abstract systems like Ethereum should legally be treated like their own entities. The latest such hints comes from the context of value-added tax (VAT or MWST in German).",
};

export default function IsTheEthereumSystemALegalSubjectPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Date */}
          <div className="text-sm text-[#c75b4a] mb-4">
            <Link
              href="/bitcoin-association-switzerland/2018/9/24/is-the-ethereum-system-a-legal-subject"
              className="hover:underline"
            >
              26 September 2018
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 leading-tight">
            Is the Ethereum system a legal subject?
          </h1>

          {/* Author */}
          <div className="text-sm text-[#c75b4a] mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31"
              className="hover:underline"
            >
              Luzius Meisser
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
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
                className="text-[#c75b4a] hover:underline"
              >
                our comment
              </a>{" "}
              to the latest{" "}
              <a
                href="https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/kg_Kryptowaehrungen.pdf.download.pdf/kg_Kryptowaehrungen_d.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                draft
              </a>{" "}
              of the Swiss federal tax authority (ESTV) on how to treat crypto
              currencies from a VAT-perspective. The important part is to have a
              perspective on how it could potentially be done in case the
              economic significance of transaction fees from blockchain-based
              services grows by a few orders of magnitude.
            </p>
          </div>

          {/* Share */}
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
            <ShareButton title="Is the Ethereum system a legal subject?" />
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-start">
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Newer Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2018/12/14/on-the-federal-council-report"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  On the Federal Council Report
                </Link>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Older Post
                </div>
                <Link
                  href="/bitcoin-association-switzerland/2018/5/31/why-storing-bitcoins-for-clients-does-not-make-you-a-bank"
                  className="text-sm text-[#c75b4a] hover:underline"
                >
                  Why storing Bitcoins for clients does not make you a bank
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <FooterSimple />
    </>
  );
}
