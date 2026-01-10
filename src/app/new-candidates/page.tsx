import Header from "@/components/Header";
import Link from "next/link";

const candidates = [
  { name: "CEDRIC A. SCHMID", href: "/candidate-1" },
  { name: "TOBIAS KRESS", href: "/candidate-2" },
  { name: "RALPH HOFACKER", href: "/candidate-3" },
  { name: "RAHIM TAGHIZADEGAN", href: "/candidate-4" },
  { name: "ALEXANDRE FLORY SAMARTINO", href: "/candidate-5" },
];

export default function NewCandidatesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="pt-20 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Page Title */}
          <h1 className="text-2xl md:text-3xl font-light text-gray-800 mb-8 font-serif">
            Five candidates stand for election at the upcoming general assembly:
          </h1>

          {/* Candidates List */}
          <ul className="space-y-2 ml-4">
            {candidates.map((candidate) => (
              <li key={candidate.href} className="flex items-start">
                <span className="text-[#40c4b4] mr-3 font-bold">&#8226;</span>
                <Link
                  href={candidate.href}
                  className="text-[#40c4b4] hover:underline font-semibold text-sm tracking-wide uppercase"
                >
                  {candidate.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Simple Dark Footer matching screenshot */}
      <footer className="bg-[#2d2d2d]">
        {/* Social Icons Row */}
        <div className="py-8">
          <div className="flex justify-center items-center gap-3">
            {/* Meetup Icon (M) */}
            <a
              href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Meetup"
              className="w-10 h-10 rounded-full bg-gray-500 hover:bg-gray-400 flex items-center justify-center transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path d="M6 7l2 10h2l2-6 2 6h2l2-10h-2l-1 5-2-5h-2l-2 5-1-5z" />
              </svg>
            </a>

            {/* YouTube Icon */}
            <a
              href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube - Bitcoin Lectures"
              className="w-10 h-10 rounded-full bg-gray-500 hover:bg-gray-400 flex items-center justify-center transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* X (Twitter) Icon */}
            <a
              href="https://x.com/bitcoin_ch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-10 h-10 rounded-full bg-gray-500 hover:bg-gray-400 flex items-center justify-center transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-white"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Legal Links Row - Darker section */}
        <div className="bg-[#1a1a1a] py-8">
          <div className="flex justify-center items-center gap-8 text-xs tracking-widest">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors uppercase"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors uppercase"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
