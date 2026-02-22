import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const boardElectionNavItems = [
  { label: "FAQ", href: "/faq" },
  { label: "Timeline", href: "/timeline" },
  { label: "Candidates", href: "/candidates", active: true },
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
  { label: "- Alexandre Flory Samartino", href: "/alexandre-flory-samartino", indent: true },
  { label: "- Lisa Tscherry", href: "/lisa-tscherry", indent: true },
  { label: "- Eric Wasescha", href: "/eric-wasescha", indent: true },
  { label: "How to vote", href: "/how-to-vote" },
];

const candidates = [
  { name: "Adriano Bertini", href: "/adriano-bertini" },
  { name: "Alexandre Flory Samartino", href: "/alexandre-flory-samartino" },
  { name: "Bastian Feder", href: "/bastian-feder" },
  { name: "Dario Duran", href: "/dario-duran" },
  { name: "Demelza Hays", href: "/demelza-hays" },
  { name: "Dorian Crede", href: "/dorian-crede" },
  { name: "Eric Wasescha", href: "/eric-wasescha" },
  { name: "Lisa Tscherry", href: "/lisa-tscherry" },
  { name: "Marcel Rapold", href: "/marcel-rapold" },
  { name: "Niklas Nikolajsen", href: "/niklas-nikolajsen" },
  { name: "Phil Lojacono", href: "/phil-lojacono" },
  { name: "Ralph Hofacker", href: "/ralph-hofacker" },
  { name: "Ronald Kogens", href: "/ronald-kogens" },
  { name: "Tobias Kress", href: "/tobias-kress" },
];

interface VideoSection {
  title: string;
  duration: string;
}

const videoSections: VideoSection[] = [
  {
    title: "What is your stance on the \"orange vision\" ?",
    duration: "08:28",
  },
  {
    title: "What should the BAS support going forward?",
    duration: "10:39",
  },
  {
    title: "What should the strategic priorities and goals be of the BAS ?",
    duration: "08:34",
  },
];

export default function CandidatesPage() {
  return (
    <>
      <Header />

      {/* Hero Banner Image */}
      <div className="relative w-full h-[200px] md:h-[300px] mt-20">
        <Image
          src="/images/candidates/candidates-banner.png"
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
              {/* Page Title */}
              <h1 className="text-xl md:text-2xl font-normal text-gray-800 leading-relaxed mb-8">
                Fourteen candidates have put their name forward and stand for election at the upcoming extra ordinary general assembly:
              </h1>

              {/* Candidates List */}
              <ul className="mb-10 space-y-1">
                {candidates.map((candidate) => (
                  <li key={candidate.href} className="flex items-start">
                    <span className="text-[#c75b4a] mr-2">&#8226;</span>
                    <Link
                      href={candidate.href}
                      className="text-[#c75b4a] hover:underline font-semibold"
                    >
                      {candidate.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Instructions */}
              <div className="mb-8 space-y-4">
                <p className="text-sm font-semibold text-gray-800">
                  Please check out all their profiles and make sure to download the application documents.
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  The summaries provided were written based on these documents but may leave essential information out.
                </p>
                <p className="text-sm text-gray-600">
                  Alternatively, you can download all zipped documents in a{" "}
                  <a
                    href="https://www.dropbox.com/s/i03hhbkzfzdj4e3/All%2014%20candidates.zip?dl=1"
                    className="text-[#c75b4a] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    single zip file here
                  </a>
                  .
                </p>
              </div>

              {/* Video Section Introduction */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-800">
                  On 11 September 2024, a Zoom call took place that gave members an opportunity to have questions asked. Check out the responses:
                </p>
              </div>

              {/* First Video - Introduction */}
              <div className="mb-10">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="relative aspect-video bg-gray-200 flex items-center justify-center">
                    <div className="absolute inset-0 flex flex-col">
                      {/* Video Header */}
                      <div className="bg-[#1a1a1a] text-white p-4">
                        <h3 className="text-sm font-semibold">Bitcoin Association Switzerland</h3>
                        <p className="text-xs text-gray-400">Board Election 2024</p>
                      </div>
                      {/* Video Content Area */}
                      <div className="flex-1 bg-gray-300 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <p className="text-sm">Video content area</p>
                        </div>
                      </div>
                      {/* Video Controls */}
                      <div className="bg-[#1a1a1a] text-white p-3 flex items-center gap-4">
                        <button className="text-white hover:text-gray-300">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                        <span className="text-sm">00:00</span>
                        <div className="flex-1 h-1 bg-gray-600 rounded">
                          <div className="w-0 h-full bg-white rounded"></div>
                        </div>
                        <span className="text-sm">08:34</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Sections with Questions */}
              {videoSections.map((video, index) => (
                <div key={index} className="mb-10">
                  <p className="text-sm font-semibold text-gray-800 mb-4">
                    {video.title}
                  </p>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <div className="relative aspect-video bg-gray-200 flex items-center justify-center">
                      <div className="absolute inset-0 flex flex-col">
                        {/* Video Header */}
                        <div className="bg-[#1a1a1a] text-white p-4">
                          <h3 className="text-sm font-semibold">Bitcoin Association Switzerland</h3>
                          <p className="text-xs text-gray-400">Board Election 2024</p>
                        </div>
                        {/* Video Content Area */}
                        <div className="flex-1 bg-gray-300 flex items-center justify-center">
                          <div className="text-center text-gray-500">
                            <p className="text-sm">Video content area</p>
                          </div>
                        </div>
                        {/* Video Controls */}
                        <div className="bg-[#1a1a1a] text-white p-3 flex items-center gap-4">
                          <button className="text-white hover:text-gray-300">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                          <span className="text-sm">00:00</span>
                          <div className="flex-1 h-1 bg-gray-600 rounded">
                            <div className="w-0 h-full bg-white rounded"></div>
                          </div>
                          <span className="text-sm">{video.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
