import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const aboutNavItems = [
  { label: "About", href: "/about-1" },
  { label: "Board", href: "/board" },
  { label: "Finances", href: "/finances" },
  { label: "Statutes", href: "/statutes" },
  { label: "Media Kit", href: "/media-kit", active: true },
  { label: "Contact", href: "/contact-1" },
];

const mediaKitArchiveHref = "/media-kit/BAS-Media-Kit.zip";

const mediaKitDownloads = [
  {
    title: "Without Text",
    files: [
      { label: "PNG", href: "/media-kit/bas-logo-without-text.png" },
      { label: "GIF", href: "/media-kit/bas-logo-without-text.gif" },
      { label: "PDF", href: "/media-kit/bas-logo-without-text.pdf" },
      { label: "JPG", href: "/media-kit/bas-logo-without-text.jpg" },
      { label: "TIF", href: "/media-kit/bas-logo-without-text.tif" },
    ],
  },
  {
    title: "With Text",
    files: [
      { label: "PNG", href: "/media-kit/bas-logo-with-text.png" },
      { label: "GIF", href: "/media-kit/bas-logo-with-text.gif" },
      { label: "PDF", href: "/media-kit/bas-logo-with-text.pdf" },
      { label: "JPG", href: "/media-kit/bas-logo-with-text.jpg" },
      { label: "TIF", href: "/media-kit/bas-logo-with-text.tif" },
    ],
  },
];

export default function MediaKitPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Sidebar Navigation */}
            <aside className="md:w-48 flex-shrink-0">
              <nav>
                <h2 className="text-[#c75b4a] font-serif text-xl italic mb-4">
                  About
                </h2>
                <ul className="space-y-2">
                  {aboutNavItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block text-xs tracking-widest uppercase transition-colors ${
                          item.active
                            ? "text-gray-900 font-semibold"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Page Title */}
              <h1 className="text-2xl md:text-3xl font-normal text-gray-800 text-center tracking-wider mb-8">
                MEDIA KIT
              </h1>

              {/* Logo Image */}
              <div className="flex justify-center mb-12">
                <div className="w-full max-w-md">
                  <Image
                    src="/media-kit/bas-logo-without-text.png"
                    alt="Bitcoin Association Switzerland Logo"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Download Section */}
              <div className="max-w-lg mx-auto">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-4">
                  Download the BAS Logo
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Welcome to the <strong className="text-gray-800">BAS Media Kit</strong>.
                  Here you can download the <strong className="text-gray-800">BAS logo</strong> in
                  various formats for press and partnership use. The logo is available{" "}
                  <strong className="text-gray-800">with and without text</strong> in the following
                  file formats:
                </p>

                <ul className="text-gray-600 text-sm space-y-1 mb-6 list-disc list-inside">
                  <li>
                    <strong className="text-gray-800">PNG</strong> (transparent background)
                  </li>
                  <li>
                    <strong className="text-gray-800">GIF</strong>
                  </li>
                  <li>
                    <strong className="text-gray-800">PDF</strong>
                  </li>
                  <li>
                    <strong className="text-gray-800">JPG</strong>
                  </li>
                  <li>
                    <strong className="text-gray-800">TIF</strong>
                  </li>
                </ul>

                <p className="text-sm mb-6">
                  <span className="mr-1">👉</span>
                  <a
                    href={mediaKitArchiveHref}
                    download
                    className="text-[#c75b4a] hover:text-[#a84a3b] font-bold transition-colors"
                  >
                    [Download Media Kit ZIP]
                  </a>
                </p>

                <div className="grid gap-4 sm:grid-cols-2 mb-6">
                  {mediaKitDownloads.map((group) => (
                    <div key={group.title} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-3">
                        {group.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.files.map((file) => (
                          <a
                            key={file.href}
                            href={file.href}
                            download
                            className="inline-flex items-center rounded border border-gray-300 px-3 py-1 text-xs font-semibold tracking-widest text-gray-700 hover:border-[#c75b4a] hover:text-[#c75b4a] transition-colors"
                          >
                            {file.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 text-sm">
                  If you need additional formats or have any questions, feel free to contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
