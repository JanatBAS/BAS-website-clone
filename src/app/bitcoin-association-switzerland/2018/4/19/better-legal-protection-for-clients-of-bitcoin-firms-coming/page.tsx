import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Better legal protection for clients of Bitcoin firms coming? - Bitcoin Association Switzerland",
  description:
    "Marcel Dobler, member of the Swiss national parliament and co-founder of digitec.ch, proposed a law that could turn out to be very helpful for Crypto Nation Switzerland.",
};

export default function BetterLegalProtectionPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        {/* Hero Banner */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          {/* Background Image */}
          <Image
            src="/images/blog/insurance.jpg"
            alt="Better legal protection for clients of Bitcoin firms coming?"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#2a8a8a]/80" />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-sm md:text-base uppercase tracking-[0.3em] font-light mb-6 max-w-4xl">
              A BRIGHT NEW DAWN FOR DIGITAL TRANSFERS, SOUND MONEY AND PERSONAL FREEDOM.
            </h1>
            <p className="text-white text-sm mb-2">19 April 2018</p>
            <p className="text-white text-xs uppercase tracking-wider">
              BETTER LEGAL PROTECTION FOR CLIENTS OF BITCOIN FIRMS COMING?
            </p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Author and Date Header */}
          <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider mb-2">
            <Link
              href="/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31"
              className="hover:text-[#c75b4a]"
            >
              Luzius Meisser
            </Link>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-8 leading-tight">
            Better legal protection for clients of Bitcoin firms coming?
          </h2>

          {/* Second Author/Date Block */}
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
            <Link
              href="/bitcoin-association-switzerland?author=5a9907f3e4966b72996b9c31"
              className="hover:text-[#c75b4a]"
            >
              Luzius Meisser
            </Link>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link
              href="/bitcoin-association-switzerland/2018/4/19/better-legal-protection-for-clients-of-bitcoin-firms-coming"
              className="hover:text-[#c75b4a]"
            >
              19 April 2018
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
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
          </div>

          {/* Share */}
          <div className="flex items-center gap-4 text-xs text-gray-500 py-6 border-t border-gray-200 mt-8">
            <ShareButton title="A BRIGHT NEW DAWN FOR DIGITAL TRANSFERS, SOUND MONEY AND PERSONAL FREEDOM." />
          </div>

          {/* Navigation */}
          <div className="flex justify-between py-8 border-t border-gray-200 text-xs">
            <div>
              <span className="text-gray-400 uppercase tracking-wider">Newer Post</span>
              <Link
                href="/bitcoin-association-switzerland/2018/5/17/bitcoin-association-switzerland-2018-general-assembly"
                className="block text-[#c75b4a] hover:underline mt-1"
              >
                Bitcoin Association Switzerland 2018: General Assembly
              </Link>
            </div>
            <div className="text-right">
              <span className="text-gray-400 uppercase tracking-wider">Older Post</span>
              <Link
                href="/bitcoin-association-switzerland/2018/3/2/the-latest-regulatory-threat"
                className="block text-[#c75b4a] hover:underline mt-1"
              >
                The Latest Regulatory Threat
              </Link>
            </div>
          </div>
        </article>
      </main>
      <FooterSimple />
    </>
  );
}
