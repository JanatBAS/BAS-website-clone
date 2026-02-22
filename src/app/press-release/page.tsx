import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Link from "next/link";

export default function PressReleasePage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Press Releases label */}
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
            Press Releases
          </div>

          {/* Date */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            13-11-2024
          </h1>

          {/* Main Title */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
            Bitcoin Association Switzerland appoints new board, sets bold vision for the future
          </h2>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Zurich, Switzerland — <em>November 2024</em> — Bitcoin Association Switzerland (BAS) is proud to announce the appointment of a new board, marking a fresh chapter in its long-standing commitment to Bitcoin advocacy and innovation. Founded in 2013, BAS has a rich history of being at the forefront of global Bitcoin adoption. As one of the earliest Bitcoin associations, it played a pivotal role in positioning Switzerland as a global leader in Bitcoin and Blockchain technology.
            </p>

            <p className="mb-6">
              After navigating a challenging period, the newly elected board is fully focused on reviving and advancing this legacy, with a renewed mission to ensure that Switzerland remains a key player in the future of Bitcoin.
            </p>

            <p className="mb-6">
              <strong>&ldquo;Switzerland has long been a hub for financial and technological leadership, and Bitcoin is no exception. Our goal is to build on that strong foundation, educating the public and fostering an environment where Bitcoin can thrive,&rdquo;</strong> said <strong>Niklas Nikolajsen von Karlshof</strong>, newly appointed President of the BAS Board.
            </p>

            <p className="mb-8">
              The newly elected board has set forth an exciting new vision aimed at reigniting engagement with the Swiss Bitcoin community, improving education efforts, and positioning the country as a global leader in decentralized and freedom focussed technology.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Introducing the New Board
            </h3>

            <p className="mb-4">
              <strong>&#9679; Niklas Nikolajsen von Karlshof (President):</strong> Niklas is a pioneer in the Bitcoin space, having founded Bitcoin Suisse AG, one of the leading Bitcoin financial services companies in the world. His vision is to bring Switzerland back to the center of Bitcoin innovation and help grow the ecosystem with responsible leadership and strategic initiatives.
            </p>

            <p className="mb-4">
              <strong>&#9679; Phil Lojacono:</strong> As a founder of a fintech company as well as a founder of a Bitcoin focussed Start-Up, Phil brings years of experience in the fintech and technology industry and a deep understanding of the Swiss financial landscape. He aims to strengthen partnerships with key industry players and expand educational outreach to both institutions and the broader public.
            </p>

            <p className="mb-4">
              <strong>&#9679; Lisa Tscherry:</strong> Lisa holds a Master&apos;s degree in Psychology and a Master&apos;s degree in Blockchain and Digital Currency, graduating top of her class at the University of Nicosia. As an advocate for Bitcoin adoption, she founded &ldquo;SatoShe – Bitcoin for Women&rdquo;, an initiative focused on educating and empowering women to engage with Bitcoin, bridging the gender gap. She is also an active speaker at conferences, promoting Bitcoin&apos;s impact.
            </p>

            <p className="mb-8">
              <strong>&#9679; Adriano Bertini:</strong> As Head of Strategy at Ledger Enterprise, Adriano develops products connecting institutional markets with Bitcoin. With 15 years of experience in building traditional finance infrastructure across trading, back-office, and financial operations, he brings extensive technical and regulatory expertise. Adriano aims to engage local communities, policymakers, and regulators to explore how Bitcoin can benefit both the financial sector and the wider economy.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              A New Vision for the Future
            </h3>

            <p className="mb-4">
              The new board has already outlined several key priorities:
            </p>

            <p className="mb-4">
              <strong>1. Building on Switzerland&apos;s Strong Bitcoin Legacy:</strong> With a deep history of Bitcoin leadership dating back to 2013, BAS aims to once again lead the charge in global Bitcoin adoption, ensuring that the country remains at the forefront of this technological revolution.
            </p>

            <p className="mb-4">
              <strong>2. Educational Outreach:</strong> The association will expand its efforts to educate individuals, businesses, and policymakers on the importance and potential of Bitcoin through workshops, partnerships with universities, and expert-led events.
            </p>

            <p className="mb-4">
              <strong>3. Strengthening Community Engagement:</strong> A newly launched members-only Telegram group and a planned General Assembly before year-end will serve as platforms for dialogue and collaboration with members.
            </p>

            <p className="mb-6">
              <strong>4. Advancing Switzerland&apos;s Bitcoin Ecosystem:</strong> The board will work closely with innovators, regulators, and institutions to ensure Switzerland remains a global hub for Bitcoin, benefiting from its rich history of financial and technological leadership.
            </p>

            <p className="mb-8">
              <strong>&ldquo;We are well aware that lots of work is ahead of us but we are excited to re-engage the strong foundation and work towards a future where Bitcoin is fully integrated into the financial fabric of Switzerland,&rdquo;</strong> added Niklas. <strong>&ldquo;The potential is immense, and we are ready to lead the way.&rdquo;</strong>
            </p>

            <p className="mb-4">
              <strong>About Bitcoin Association Switzerland</strong>
            </p>

            <p className="mb-6">
              Founded in 2013, Bitcoin Association Switzerland is one of the world&apos;s oldest Bitcoin organizations. It has played a central role in advancing Bitcoin adoption and education in Switzerland. Today, the association continues to foster dialogue between the Bitcoin community, institutions, and policymakers, ensuring that Switzerland remains at the forefront of the cryptocurrency revolution.
            </p>

            <p className="mb-6">
              For media inquiries, please contact: Phil Lojacono, <a href="mailto:phil@bitcoinassociation.ch" className="text-[#c75b4a] hover:underline">phil@bitcoinassociation.ch</a>
            </p>

            <p className="mb-8">
              <a
                href="/pdfs/BAS_New-Board-for-BAS_NOV24.pdf"
                className="text-[#c75b4a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF Press Release BAS 13-11-2024
              </a>
            </p>
          </div>
        </article>
      </main>
      <FooterSimple />
    </>
  );
}
