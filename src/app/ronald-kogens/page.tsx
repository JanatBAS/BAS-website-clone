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
  { label: "- Ronald Kogens", href: "/ronald-kogens", indent: true, active: true },
  { label: "- Tobias Kress", href: "/tobias-kress", indent: true },
  { label: "- Phil Lojacono", href: "/phil-lojacono", indent: true },
  { label: "- Niklas Nikolajsen", href: "/niklas-nikolajsen", indent: true },
  { label: "- Marcel Rapold", href: "/marcel-rapold", indent: true },
  { label: "- Alexandre Flory Samartino", href: "/alexandre-flory-samartino", indent: true },
  { label: "- Lisa Tscherry", href: "/lisa-tscherry", indent: true },
  { label: "- Eric Wasescha", href: "/eric-wasescha", indent: true },
  { label: "How to vote", href: "/how-to-vote" },
];

export default function RonaldKogensPage() {
  return (
    <>
      <Header />

      <main className="pt-20 pb-12 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
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
                    {item.label.toUpperCase()}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-2xl">
              {/* Profile Photo */}
              <div className="mb-6">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/70fca5c0-4478-43cf-bd18-9d7c564bd2c6/1553447653904.jpeg"
                  alt="Ronald Kogens"
                  width={400}
                  height={400}
                  className="w-full max-w-md object-cover"
                />
              </div>

              {/* Name */}
              <h1 className="text-2xl md:text-3xl font-normal text-gray-800 mb-2">
                Ronald Kogens
              </h1>

              {/* Location */}
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                8712 Staefa
              </p>

              {/* Title */}
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-4">
                Partner & Tech Lawyer at MME
              </h3>

              {/* Bio Paragraph 1 */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Ronald Kogens is an experienced lawyer specializing in fintech, Web3, and decentralized technologies. With over a decade of legal expertise, he has been instrumental in advising and structuring disruptive blockchain projects, decentralized finance (DeFi) solutions, and decentralized autonomous organizations (DAOs). Ronald has worked with major firms such as MME and Froriep Legal Ltd., and has a wealth of experience in regulatory compliance, licensing, data privacy, and intellectual property. He holds an LL.M. from Chapman University, California, and is a recognized expert in digital finance, frequently cited in media and legal publications.
              </p>

              {/* Bio Paragraph 2 */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Ronald is running for a board seat at the Bitcoin Association Switzerland due to his commitment to Bitcoin maximalism and his opposition to projects that undermine Bitcoin&apos;s original ethos. His journey into Bitcoin started in 2016, when he introduced it as a payment option at EY. As a lawyer in the Web3 space, Ronald has deep legal knowledge surrounding Bitcoin and has actively participated in the Association&apos;s activities. His goal is to advocate for Bitcoin&apos;s integrity, maintain a focus on decentralization, and use his global network of Bitcoin maximalists to further the Association&apos;s mission.
              </p>

              {/* LinkedIn Link */}
              <p className="mb-2">
                <a
                  href="https://www.linkedin.com/in/ronald-kogens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b7355] hover:underline text-sm"
                >
                  Linkedin
                </a>
              </p>

              {/* Telegram */}
              <p className="text-gray-600 text-sm mb-2">
                Telegram: @x000xy
              </p>

              {/* Application Documents */}
              <p className="mb-8">
                <a
                  href="https://www.bitcoinassociation.ch/s/Ronald-Kogens.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b7355] hover:underline text-sm"
                >
                  Application Documents
                </a>
              </p>

              {/* Video Player */}
              <div className="mb-8">
                <div className="bg-[#1a1a1a] rounded overflow-hidden max-w-lg">
                  <div className="relative aspect-video">
                    {/* Video Content Area */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                      {/* Bitcoin Logo and Text Overlay */}
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f7931a] flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">B</span>
                        </div>
                        <p className="text-white text-sm">
                          On the 11<sup>th</sup> September 2024 a Zoom call with all
                        </p>
                        <p className="text-white text-sm">
                          candidates for a board seat at the Bitcoin Association
                        </p>
                        <p className="text-white text-sm">
                          Switzerland took place.
                        </p>
                        <p className="text-white text-sm mt-4">
                          In their opening statement, they had 100 seconds to introduce
                        </p>
                        <p className="text-white text-sm">
                          themselves...
                        </p>
                      </div>
                      {/* Play Button Overlay */}
                      <button className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                  {/* Video Controls */}
                  <div className="bg-[#1a1a1a] text-white px-3 py-2 flex items-center gap-3">
                    <span className="text-xs text-gray-400">00:00 / 02:46</span>
                    <div className="flex-1 h-1 bg-gray-600 rounded">
                      <div className="w-0 h-full bg-white rounded"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-white">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center items-center gap-4 py-8">
                {/* Meetup Icon */}
                <a
                  href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Meetup"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    className="w-5 h-5"
                  >
                    <path
                      fill="currentColor"
                      d="M30.8,33.4c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4 c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4c0.2,0.8,0.6,2,0.1,2.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5 c-1.5-4.6-3.5-11.8-5.2-16.6c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8 c-1-1.4-3.1-4.8-4.1-6.9c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6 c-0.7-3.4-1.2-8-1.1-11.1c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4 C26.9,25.5,28.9,29.5,30.8,33.4z"
                    />
                  </svg>
                </a>

                {/* YouTube Icon */}
                <a
                  href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube - Bitcoin Lectures"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    className="w-5 h-5"
                  >
                    <path
                      fill="currentColor"
                      d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z"
                    />
                  </svg>
                </a>

                {/* X (Twitter) Icon */}
                <a
                  href="https://x.com/bitcoin_ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M34.426 29.9327L43.9189 18.5H41.6694L33.4267 28.4268L26.8432 18.5H19.25L29.2055 33.5111L19.25 45.5H21.4997L30.2042 35.0169L37.1568 45.5H44.75L34.426 29.9327ZM22.3102 20.2546H25.7656L41.6704 43.8252H38.2151L22.3102 20.2546Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </>
  );
}
