import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Image from "next/image";
import Link from "next/link";

const boardElectionNavItems = [
  { label: "Board Election 2024", isTitle: true },
  { label: "FAQ", href: "/faq" },
  { label: "Timeline", href: "/timeline" },
  { label: "Candidates", href: "/candidates" },
  { label: "- Adriano Bertini", href: "/adriano-bertini", indent: true },
  { label: "- Dario Duran", href: "/dario-duran", indent: true },
  { label: "- Bastian Feder", href: "/bastian-feder", indent: true },
  { label: "- Demelza Hays", href: "/demelza-hays", indent: true },
  { label: "- Ralph Hofacker", href: "/ralph-hofacker", indent: true },
  { label: "- Ronald Kogens", href: "/ronald-kogens", indent: true },
  { label: "- Tobias Kress", href: "/tobias-kress", indent: true },
  { label: "- Phil Lojacono", href: "/phil-lojacono", indent: true },
  { label: "- Niklas Nikolajsen", href: "/niklas-nikolajsen", indent: true },
  { label: "- Marcel Rapold", href: "/marcel-rapold", indent: true },
  { label: "- Alexandre Flory Samartino", href: "/alexandre-flory-samartino", indent: true, active: true },
  { label: "- Lisa Tscherry", href: "/lisa-tscherry", indent: true },
  { label: "- Eric Wasescha", href: "/eric-wasescha", indent: true },
  { label: "How to vote", href: "/how-to-vote" },
];

export default function AlexandreFlorySamartinoPage() {
  return (
    <>
      <Header />

      {/* Hero Banner Image */}
      <div className="relative w-full h-[200px] md:h-[300px] mt-20">
        <Image
          src="/images/candidates/candid.png"
          alt="Candidates"
          fill
          className="object-cover"
          priority
        />
      </div>

      <main className="py-12 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Sidebar Navigation */}
            <aside className="md:w-56 flex-shrink-0">
              <nav className="space-y-1">
                {boardElectionNavItems.map((item, index) =>
                  item.isTitle ? (
                    <h2
                      key={index}
                      className="text-[#8b7355] text-base font-light mb-4 font-serif italic"
                    >
                      {item.label}
                    </h2>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href!}
                      className={`block text-xs tracking-wider transition-colors ${
                        item.active
                          ? "text-gray-900 font-semibold"
                          : "text-gray-500 hover:text-gray-900"
                      } ${item.indent ? "pl-2" : ""}`}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              {/* Profile Photo */}
              <div className="mb-8">
                <Image
                  src="/images/candidates/alexandre.png"
                  alt="Alexandre Flory Samartino"
                  width={280}
                  height={350}
                  className="object-cover"
                />
              </div>

              {/* Name and Location */}
              <h1 className="text-2xl md:text-3xl font-normal text-gray-900 mb-2">
                Alexandre Flory Samartino
              </h1>
              <p className="text-gray-500 text-sm mb-8">8006 Zurich</p>

              {/* Title */}
              <h2 className="text-sm uppercase tracking-wider text-gray-700 font-semibold mb-6">
                Blockchain Researcher and Generalist
              </h2>

              {/* Bio Paragraphs */}
              <div className="space-y-6 text-sm text-gray-700 leading-relaxed mb-8">
                <p>
                  Alexandre Flory Samartino has a solid background in both mechanical engineering and
                  blockchain, holding master&apos;s degrees in Mechanical Engineering from EPFL and
                  Blockchain and Digital Currencies from the University of Nicosia. He began his career
                  with an entrepreneurial focus, launching a startup after his thesis work at Migros
                  and attending Swiss Confederation-funded entrepreneurship classes. Over time, his
                  passion for cryptocurrencies deepened, leading him to work as a Blockchain Researcher,
                  where he developed technical expertise through a full-stack coding bootcamp and
                  involvement in projects like Polkadot. His extensive experience includes writing
                  articles to simplify complex blockchain topics, and he has a growing interest in
                  promoting Bitcoin as the ultimate solution for financial sovereignty.
                </p>
                <p>
                  Alexandre is running for a board seat at the Bitcoin Association Switzerland to steer
                  the organization toward becoming a Bitcoin-only association. He aims to establish the
                  BAS as a key reference for Bitcoin in Switzerland, engaging private individuals,
                  businesses, and government agencies. Additionally, he plans to expand the Swiss-French
                  community with educational events, leveraging his development experience and regional
                  connections to further Bitcoin&apos;s influence.
                </p>
              </div>

              {/* Links */}
              <div className="mb-8 space-y-2">
                <p>
                  <a
                    href="https://www.linkedin.com/in/alexandreflorysamartino/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline text-sm"
                  >
                    Linkedin
                  </a>
                </p>
                <p className="text-sm text-gray-700">Telegram: @DonCervantes</p>
                <p>
                  <a
                    href="https://www.bitcoinassociation.ch/s/Alexandre-Flory-Samartino.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline text-sm"
                  >
                    Application Documents
                  </a>
                </p>
              </div>

              {/* Video Player */}
              <div className="mb-8">
                <div className="bg-black rounded overflow-hidden max-w-md">
                  <div className="relative aspect-video">
                    {/* Video placeholder - shows dark background with play controls */}
                    <div className="absolute inset-0 flex flex-col bg-[#1a1a1a]">
                      {/* Video Content Area */}
                      <div className="flex-1 flex items-center justify-center relative">
                        {/* Play button overlay */}
                        <button className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                      {/* Video Controls */}
                      <div className="bg-[#2a2a2a] text-white px-3 py-2 flex items-center gap-3">
                        <button className="text-white hover:text-gray-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                        <span className="text-xs text-gray-400">00:00</span>
                        <div className="flex-1 h-1 bg-gray-600 rounded">
                          <div className="w-0 h-full bg-red-500 rounded"></div>
                        </div>
                        <span className="text-xs text-gray-400">01:27</span>
                        <button className="text-white hover:text-gray-300">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                          </svg>
                        </button>
                        <button className="text-white hover:text-gray-300">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                          </svg>
                        </button>
                        <button className="text-white hover:text-gray-300">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social sharing icons */}
              <div className="flex items-center gap-4 text-gray-400">
                <button className="hover:text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                  </svg>
                </button>
                <button className="hover:text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button className="hover:text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </>
  );
}
