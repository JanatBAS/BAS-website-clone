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
  { label: "- Demelza Hays", href: "/demelza-hays", indent: true },
  { label: "- Ralph Hofacker", href: "/ralph-hofacker", indent: true },
  { label: "- Ronald Kogens", href: "/ronald-kogens", indent: true },
  { label: "- Tobias Kress", href: "/tobias-kress", indent: true },
  { label: "- Phil Lojacono", href: "/phil-lojacono", indent: true, active: true },
  { label: "- Niklas Nikolajsen", href: "/niklas-nikolajsen", indent: true },
  { label: "- Marcel Rapold", href: "/marcel-rapold", indent: true },
  { label: "- Alexandre Flory Samartino", href: "/alexandre-flory-samartino", indent: true },
  { label: "- Lisa Tscherry", href: "/lisa-tscherry", indent: true },
  { label: "- Eric Wasescha", href: "/eric-wasescha", indent: true },
  { label: "How to vote", href: "/how-to-vote" },
];

export default function PhilLojaconoPage() {
  return (
    <>
      <Header />

      <main className="pt-28 pb-16 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="flex-1 max-w-3xl">
              {/* Profile Photo */}
              <div className="mb-8">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/b6648b44-0641-40c5-b313-4acd513f1332/Photo_PhilLojacono.jpg"
                  alt="Phil Lojacono"
                  width={300}
                  height={400}
                  className="w-full max-w-[300px]"
                />
              </div>

              {/* Name */}
              <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-2">
                Phil Lojacono
              </h1>

              {/* Location */}
              <h2 className="text-xl md:text-2xl font-normal text-gray-800 mb-8">
                Baar
              </h2>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-800 mb-4">
                Founder &amp; Owner at Berglinde AG
              </h3>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed mb-6">
                <p>
                  Phil Lojacono is a seasoned entrepreneur with extensive experience in fintech and business development. He is the founder of Berglinde AG, a self-funded Bitcoin company aimed at onboarding businesses to a Bitcoin standard. Previously, Phil served as CEO of Liiva AG, a joint venture between Switzerland&apos;s largest bank (Raiffeisen) and its leading insurance company (Mobiliar), where he led the development of a digital real estate platform. Phil also co-founded Advanon AG, a working capital financing platform for SMEs, which he successfully scaled across two juristictions and later sold.
                </p>
                <p>
                  In parallel he started writing the Berglinde (formerly Coprnic) newsletter three years ago with which he regularly writes about Bitcoin and its effects on macroeconomics and politics. He&apos;s a regular guest on Bitcoin podcasts with the aim to onboard the next few thousand Bitcoiners.
                </p>
                <p>
                  Phil is running for a board seat at the Bitcoin Association Switzerland to leverage his entrepreneurial and leadership skills to foster a vibrant Bitcoin community in Switzerland. His vision includes enhancing public understanding of Bitcoin, advocating for favorable regulatory policies, and supporting Bitcoin innovation and research.
                </p>
              </div>

              {/* Links */}
              <div className="space-y-2 mb-8">
                <p>
                  <a
                    href="https://www.linkedin.com/in/phillojacono/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline text-sm"
                  >
                    Linkedin
                  </a>
                </p>
                <p className="text-sm text-gray-700">
                  Telegram: @phillojacono
                </p>
                <p>
                  <a
                    href="https://www.bitcoinassociation.ch/s/Phil-Lojacono-7smd.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline text-sm"
                  >
                    Application Documents
                  </a>
                </p>
              </div>

              {/* Video Player */}
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden max-w-2xl">
                <div className="relative">
                  {/* Video Content Area */}
                  <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                    {/* Video Title Overlay */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <div className="bg-white/90 px-3 py-2 rounded text-xs max-w-[60%]">
                        <p className="text-gray-800 font-medium">On the 11th September 2024 the association hosted a call allowing members to get to know the candidates further.</p>
                        <p className="text-gray-600 mt-1">In their opening statement, they had 100 seconds to introduce themselves.</p>
                      </div>
                      {/* Settings Panel (simplified representation) */}
                      <div className="bg-[#1a1a1a]/90 rounded text-white text-xs p-2">
                        <div className="flex gap-4">
                          <div>
                            <p className="text-gray-400 mb-1">Speed</p>
                            <p className="text-[#c75b4a]">Normal</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Play Button Overlay */}
                    <button className="w-16 h-16 bg-[#c75b4a] rounded-full flex items-center justify-center hover:bg-[#a84a3b] transition-colors">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  {/* Video Controls */}
                  <div className="bg-[#1a1a1a] text-white p-3 flex items-center gap-4">
                    <span className="text-xs text-gray-400">00:00 / 02:49</span>
                    <div className="flex-1 h-1 bg-gray-600 rounded">
                      <div className="w-0 h-full bg-[#c75b4a] rounded"></div>
                    </div>
                    {/* Control Icons */}
                    <div className="flex items-center gap-3">
                      <button className="text-gray-400 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m-2.828-9.9a9 9 0 0112.728 0" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </button>
                    </div>
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
