import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Image from "next/image";
import Link from "next/link";

const boardElectionNavItems = [
  { label: "FAQ", href: "/faq" },
  { label: "Timeline", href: "/timeline" },
  { label: "Candidates", href: "/candidates" },
  { label: "- Adriano Bertini", href: "/adriano-bertini", indent: true },
  { label: "- Dario Duran", href: "/dario-duran", indent: true },
  { label: "- Bastian Feder", href: "/bastian-feder", indent: true },
  { label: "- Demelza Hays", href: "/demelza-hays", indent: true, active: true },
  { label: "- Ralph Hofacker", href: "/ralph-hofacker", indent: true },
  { label: "- Ronald Kogens", href: "/ronald-kogens", indent: true },
  { label: "- Tobias Kress", href: "/tobias-kress", indent: true },
  { label: "- Phil Lojacono", href: "/phil-lojacono", indent: true },
  { label: "- Niklas Nikolajsen", href: "/niklas-nikolajsen", indent: true },
  { label: "- Marcel Rapold", href: "/marcel-rapold", indent: true },
  { label: "- Alexandre Flory Samartino", href: "/alexandre-flory-samartino", indent: true },
  { label: "- Lisa Tscherry", href: "/lisa-tscherry", indent: true },
  { label: "- Eric Wasescha", href: "/eric-wasescha", indent: true },
  { label: "How to vote", href: "/how-to-vote" },
];

export default function DemelzaHaysPage() {
  return (
    <>
      <Header />

      <main className="pt-20 pb-12 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Sidebar Navigation */}
            <aside className="md:w-56 flex-shrink-0">
              <h2 className="text-[#8b7355] text-base font-light mb-4 font-serif italic">
                Board Election 2024
              </h2>
              <nav className="space-y-1">
                {boardElectionNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block text-xs tracking-wider transition-colors ${
                      item.active
                        ? "text-gray-900 font-semibold"
                        : "text-gray-500 hover:text-gray-900"
                    } ${item.indent ? "pl-2" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Text Content */}
                <div className="flex-1 order-2 lg:order-1">
                  <h1 className="text-3xl md:text-4xl font-normal text-gray-900 mb-2">
                    Demelza Hays
                  </h1>

                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">
                    UK, moving to Switzerland soon
                  </p>

                  <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
                    Digital Asset Portfolio Manager at Zeltner &amp; Co. and Chief Economist at Cointelegraph
                  </h2>

                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed mb-8">
                    <p>
                      Demelza Hays is an accomplished professional with over a decade of experience in the Bitcoin ecosystem. She currently manages over $60 million in digital assets at Zeltner &amp; Co., including one of the largest actively managed Bitcoin securities globally. Additionally, she serves as the Chief Economist at Cointelegraph, where she performs on-chain analysis, statistical research, and produces reports on digital assets. Her academic background includes a PhD in Business Economics from the University of Liechtenstein, and she has held multiple roles in cryptocurrency fund management, as well as teaching engagements at prestigious institutions. Demelza is also a Forbes 30 Under 30 honoree for her contributions to the crypto space.
                    </p>
                    <p>
                      Demelza seeks to join the board of the Bitcoin Association Switzerland to advance Bitcoin&apos;s adoption, particularly by establishing a multi-sig wallet for the Association&apos;s funds and creating a treasury management plan. She also aims to engage the Italian and French-speaking regions of Switzerland, increasing community involvement and organizing local events. With her deep knowledge of finance and cryptocurrencies, Demelza is committed to shaping the Bitcoin community in Switzerland through education, transparency, and sound regulatory practices.
                    </p>
                  </div>

                  {/* Links */}
                  <div className="space-y-2 mb-8">
                    <p>
                      <a
                        href="https://www.linkedin.com/in/demelza-hays-ph-d-7211845a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-gray-900 underline"
                      >
                        Linkedin
                      </a>
                    </p>
                    <p className="text-sm text-gray-600">
                      Telegram: @Demelzah
                    </p>
                    <p>
                      <a
                        href="https://www.bitcoinassociation.ch/s/Demelza-Hays.zip"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-gray-900 underline"
                      >
                        Application Documents
                      </a>
                    </p>
                  </div>

                  {/* Video Embed */}
                  <div className="aspect-video w-full max-w-xl bg-black">
                    <iframe
                      src="https://player.vimeo.com/video/1006737969?h=0&title=0&byline=0&portrait=0"
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Demelza Hays - Board Election Video"
                    />
                  </div>
                </div>

                {/* Profile Image */}
                <div className="w-full lg:w-72 flex-shrink-0 order-1 lg:order-2">
                  <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-80">
                    <Image
                      src="/images/candidates/demelza.png"
                      alt="Demelza Hays"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </>
  );
}
