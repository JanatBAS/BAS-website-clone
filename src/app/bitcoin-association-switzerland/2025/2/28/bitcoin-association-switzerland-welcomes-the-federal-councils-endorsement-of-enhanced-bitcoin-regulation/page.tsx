import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";

export default function FederalCouncilEndorsementPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Meta info */}
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
            <Link
              href="/bitcoin-association-switzerland?author=672bdb3ae0672c1501f39ce8"
              className="hover:text-[#c75b4a]"
            >
              Phil Lojacono
            </Link>
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-6">
            <span>28 February 2025</span>
          </div>

          {/* Title */}
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 tracking-wide uppercase leading-tight">
            Bitcoin Association Switzerland Welcomes the Federal Council&apos;s Endorsement of Enhanced Bitcoin Regulation
          </h1>

          {/* Meta repeated */}
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
            <Link
              href="/bitcoin-association-switzerland?author=672bdb3ae0672c1501f39ce8"
              className="hover:text-[#c75b4a]"
            >
              Phil Lojacono
            </Link>
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-8">
            <span>28 February 2025</span>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              The Bitcoin Association Switzerland, in collaboration with key stakeholders such as the{" "}
              <a
                href="https://blockchainfederation.ch/en/"
                className="text-[#c75b4a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Swiss Blockchain Federation
              </a>
              , welcomes the Federal Council&apos;s acceptance of a motion and the positive answer to an interpellation introduced by National Councilor{" "}
              <a
                href="https://www.parlament.ch/de/biografie/benjamin-fischer/4326"
                className="text-[#c75b4a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Benjamin Fischer
              </a>
              . This development marks a significant step forward in enhancing regulatory clarity for Bitcoin and digital assets in Switzerland.
            </p>

            {/* Main Image */}
            <div className="my-8">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/ce60abf1-c90f-4498-bf52-9fb4d8640164/Bas_people.jpg"
                alt="Bitcoin Association Switzerland delegation"
                width={800}
                height={533}
                className="w-full h-auto"
              />
            </div>

            <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide uppercase">
              Strengthening Switzerland&apos;s Leadership in Bitcoin Innovation
            </h3>

            <p className="mb-6">
              The accepted motion is part of a broader initiative that also includes an interpellation and a parliamentary initiative, all aimed at establishing a supportive and future-proof regulatory framework for digital assets. This legislative progress reinforces Switzerland&apos;s reputation as a global leader in Bitcoin technology and digital finance.
            </p>

            <p className="mb-6 italic">
              &ldquo;The Federal Council&apos;s support for this motion is a strong and positive signal for the Bitcoin ecosystem in Switzerland. Legal clarity and pragmatic regulation are essential to fostering innovation while safeguarding the integrity of our financial system,&rdquo;
            </p>
            <p className="mb-6">
              said Niklas Nikolajsen, President of the Bitcoin Association Switzerland.
            </p>
            <p className="mb-8 italic">
              &ldquo;We remain committed to collaborating with policymakers and other key stakeholders to ensure a balanced and forward-looking approach to digital asset regulation. Let us work to ensure that Switzerland will once again be a world leading Bitcoin &amp; crypto jurisdiction, for private individuals and companies alike.&rdquo;
            </p>

            <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide uppercase">
              Regulatory Clarity: A Foundation for Growth
            </h3>

            <p className="mb-8">
              Clear and effective regulation is crucial for attracting and retaining talent, investment, and innovation in Switzerland. By creating a predictable legal environment, the motion provides blockchain and digital asset companies with the confidence they need to build, grow, and contribute to the Swiss economy.
            </p>

            <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide uppercase">
              Next Steps for the Industry
            </h3>

            <p className="mb-6">
              The Bitcoin Association Switzerland, alongside other key stakeholders and industry representatives will continue to engage proactively with Swiss policymakers and regulators. Our goal is to support the development of regulations that align with global standards while maintaining Switzerland&apos;s unique position as a pioneer in financial and technological innovation.
            </p>

            <p className="mb-4">
              For more details on the initiatives introduced by National Councilor Benjamin Fischer, please refer to the official documents:
            </p>

            <ul className="mb-8 list-disc list-inside space-y-1">
              <li>
                <a
                  href="https://www.parlament.ch/de/ratsbetrieb/suche-curia-vista/geschaeft?AffairId=20244686"
                  className="text-[#c75b4a] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Motion: 20244686
                </a>
              </li>
              <li>
                <a
                  href="https://www.parlament.ch/de/ratsbetrieb/suche-curia-vista/geschaeft?AffairId=20244383"
                  className="text-[#c75b4a] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Interpellation: 20244383
                </a>
              </li>
              <li>
                <a
                  href="https://www.parlament.ch/de/ratsbetrieb/suche-curia-vista/geschaeft?AffairId=20240480"
                  className="text-[#c75b4a] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parliamentary Initiative: 20240480
                </a>
              </li>
            </ul>

            <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wide uppercase">
              Stay Informed
            </h3>

            <p className="mb-6">
              We encourage all stakeholders, community members, and industry participants to stay engaged as this process moves forward. For the latest updates, follow us on X, LinkedIn, and become a member of the Bitcoin Association Switzerland.
            </p>

            <p className="mb-2">
              For media and policy inquiries, please contact:
            </p>

            <p className="mb-1">
              <strong>Phil Lojacono</strong>
            </p>
            <p className="mb-1">
              Member of the Board at Bitcoin Association Switzerland
            </p>
            <p className="mb-8">
              <a
                href="mailto:phil@bitcoinassociation.ch"
                className="text-[#c75b4a] hover:underline"
              >
                phil@bitcoinassociation.ch
              </a>
            </p>
          </div>

          {/* Tags */}
          <div className="text-xs text-gray-500 py-4">
            <span>Tagged: </span>
            <Link
              href="/bitcoin-association-switzerland/tag/Regulation"
              className="text-[#c75b4a] hover:underline"
            >
              Regulation
            </Link>
          </div>

          {/* Share */}
          <div className="flex items-center gap-4 text-xs text-gray-500 py-6 border-t border-gray-200">
            <ShareButton title="Bitcoin Association Switzerland Welcomes the Federal Council&apos;s Endorsement of Enhanced Bitcoin Regulation" />
          </div>

          {/* Navigation */}
          <div className="flex justify-between py-8 border-t border-gray-200 text-xs">
            <div>
              <span className="text-gray-400 uppercase tracking-wider">Newer Post</span>
              <Link
                href="/bitcoin-association-switzerland/2025/12/8/statement-on-12-point-program"
                className="block text-[#c75b4a] hover:underline mt-1"
              >
                Statement on the 12-Point Program for a Forward-Looking Digital Financial Center
              </Link>
            </div>
            <div className="text-right">
              <span className="text-gray-400 uppercase tracking-wider">Older Post</span>
              <Link
                href="/bitcoin-association-switzerland/2025/12/8/bitcoin-association-switzerland-appoints-new-board-sets-bold-vision-for-the-future"
                className="block text-[#c75b4a] hover:underline mt-1"
              >
                Bitcoin Association Switzerland appoints new board, sets bold vision for the future
              </Link>
            </div>
          </div>
        </article>
      </main>
      <FooterSimple />
    </>
  );
}
