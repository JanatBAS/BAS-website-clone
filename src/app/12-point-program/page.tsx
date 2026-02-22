import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";

export default function TwelvePointProgramPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-20">
        {/* Main Content Section */}
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          {/* Date */}
          <p className="text-gray-500 text-sm uppercase tracking-wide mb-6">
            MAY 25
          </p>

          {/* Title */}
          <h1 className="text-[#1a1a1a] text-lg md:text-xl font-bold leading-relaxed mb-8">
            Statement from Bitcoin Association Switzerland on the 12-Point Program for a Forward-Looking Digital Financial Center
          </h1>

          {/* Introduction paragraphs */}
          <div className="space-y-6 text-[#6b6b6b] leading-relaxed">
            <p>
              The Bitcoin Association Switzerland supports the 12-point program jointly developed by leading industry associations to foster a strong and future-oriented environment for digital innovation in Switzerland. We believe this framework is an important step toward ensuring regulatory clarity, technological advancement, and an open, competitive financial system that empowers individuals and businesses alike.
            </p>

            <p>
              We are proud to have contributed to this initiative and remain committed to working collaboratively with all stakeholders - associations, policymakers, regulators, and entrepreneurs - to make Switzerland a global leader in the Bitcoin economy.
            </p>

            {/* Bold "However" paragraph */}
            <p className="text-[#1a1a1a] font-semibold">
              However, we also wish to express a clear and principled stance as this was unclear in the communication of other involved parties:
            </p>

            {/* CBDCs paragraph */}
            <p>
              <span className="text-[#1a1a1a] font-semibold">
                We strongly oppose the introduction of Central Bank Digital Currencies (CBDCs)
              </span>
              . Such instruments pose a grave risk to financial privacy, individual freedom, and the principle of self-sovereignty that lies at the heart of the Bitcoin ethos. We believe that the development of CBDCs - especially those that enable centralized control or surveillance - would accelerate the erosion of civil liberties and contradict the open and decentralized values we work to protect.
            </p>

            <p>
              Our commitment is to a financial future rooted in freedom, privacy, and individual empowerment. We invite all stakeholders to join us in upholding these principles as we shape the future of digital finance in Switzerland.
            </p>
          </div>

          {/* Download Links */}
          <div className="mt-8 space-y-2">
            <Link
              href="/pdfs/12PointsForStrongFinancialCEntre_Manifest_EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#c75b4a] hover:text-[#a84a3b] transition-colors"
            >
              Download ENG version
            </Link>
            <Link
              href="/pdfs/12PointsForStrongFinancialCentres_Manifest_DE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#c75b4a] hover:text-[#a84a3b] transition-colors"
            >
              Download GER version
            </Link>
          </div>

          {/* Signature */}
          <div className="mt-8">
            <p className="text-[#1a1a1a] font-bold">
              Bitcoin Association Switzerland
            </p>
            <p className="text-[#6b6b6b] mt-2">
              May 2025
            </p>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}
