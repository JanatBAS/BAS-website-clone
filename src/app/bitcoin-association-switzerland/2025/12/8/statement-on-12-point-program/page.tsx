import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import ShareButton from "@/components/ShareButton";
import Link from "next/link";

export default function StatementOn12PointProgramPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Date */}
          <div className="text-xs text-[#c75b4a] tracking-wider mb-4">
            31 May 2025
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-tight">
            Statement on the 12-Point Program for a Forward-Looking Digital Financial Center
          </h1>

          {/* Author */}
          <div className="text-xs text-[#c75b4a] tracking-wider mb-8">
            <Link
              href="/bitcoin-association-switzerland?author=672bdb3ae0672c1501f39ce8"
              className="hover:underline"
            >
              Phil Lojacono
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
            <p className="mb-6">
              The Bitcoin Association Switzerland supports the 12-point program jointly developed by leading industry associations to foster a strong and future-oriented environment for digital innovation in Switzerland. We believe this framework is an important step toward ensuring regulatory clarity, technological advancement, and an open, competitive financial system that empowers individuals and businesses alike.
            </p>

            <p className="mb-6">
              We are proud to have contributed to this initiative and remain committed to working collaboratively with all stakeholders - associations, policymakers, regulators, and entrepreneurs - to make Switzerland a global leader in the Bitcoin economy.
            </p>

            <p className="mb-6">
              <strong className="text-gray-900">
                However, we also wish to express a clear and principled stance as this was unclear in the communication of other involved parties
              </strong>
              :
            </p>

            <p className="mb-6">
              <strong className="text-gray-900">
                We strongly oppose the introduction of Central Bank Digital Currencies (CBDCs)
              </strong>
              . Such instruments pose a grave risk to financial privacy, individual freedom, and the principle of self-sovereignty that lies at the heart of the Bitcoin ethos. We believe that the development of CBDCs - especially those that enable centralized control or surveillance - would accelerate the erosion of civil liberties and contradict the open and decentralized values we work to protect.
            </p>

            <p className="mb-6">
              Our commitment is to a financial future rooted in freedom, privacy, and individual empowerment. We invite all stakeholders to join us in upholding these principles as we shape the future of digital finance in Switzerland.
            </p>

            <p className="mb-2">
              <a
                href="https://www.bitcoinassociation.ch/s/12PointsForStrongFinancialCEntre_Manifest_EN.pdf"
                className="text-[#c75b4a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download ENG version
              </a>
            </p>
            <p className="mb-8">
              <a
                href="https://www.bitcoinassociation.ch/s/12PointsForStrongFinancialCentres_Manifest_DE.pdf"
                className="text-[#c75b4a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download GER version
              </a>
            </p>
          </div>

          {/* Share */}
          <div className="flex items-center gap-4 text-xs text-gray-500 py-6 border-t border-gray-200">
            <ShareButton title="Statement on the 12-Point Program for a Forward-Looking Digital Financial Center" />
          </div>

          {/* Navigation */}
          <div className="flex justify-between py-8 border-t border-gray-200 text-xs">
            <div>
              <span className="text-gray-400 uppercase tracking-wider">Newer Post</span>
              <Link
                href="/bitcoin-association-switzerland/2014/06/04/marc-faber-points-readers-to-bitcoin"
                className="block text-[#c75b4a] hover:underline mt-1"
              >
                Marc Faber points readers to Bitcoin
              </Link>
            </div>
            <div className="text-right">
              <span className="text-gray-400 uppercase tracking-wider">Older Post</span>
              <Link
                href="/bitcoin-association-switzerland/2025/2/28/bitcoin-association-switzerland-welcomes-the-federal-councils-endorsement-of-enhanced-bitcoin-regulation"
                className="block text-[#c75b4a] hover:underline mt-1"
              >
                Bitcoin Association Switzerland Welcomes the Federal Council&apos;s Endorsement of Enhanced Bitcoin Regulation
              </Link>
            </div>
          </div>
        </article>
      </main>
      <FooterSimple />
    </>
  );
}
