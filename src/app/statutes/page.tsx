import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const aboutNavItems = [
  { label: "About", href: "/about-1", active: false },
  { label: "Board", href: "/board", active: false },
  { label: "Finances", href: "/finances", active: false },
  { label: "Statutes", href: "/statutes", active: true },
  { label: "Media Kit", href: "/media-kit", active: false },
  { label: "Contact", href: "/contact-1", active: false },
];

export default function StatutesPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Sidebar Navigation */}
            <aside className="md:w-64 flex-shrink-0">
              <nav>
                {/* Section Title */}
                <h2 className="text-[#5a9e9e] font-serif text-2xl mb-4">
                  About
                </h2>

                {/* Navigation Links */}
                <ul className="space-y-2">
                  {aboutNavItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block text-sm uppercase tracking-wider ${
                          item.active
                            ? "text-[#2d2d2d] font-semibold"
                            : "text-[#8a8a8a] hover:text-[#2d2d2d]"
                        } transition-colors`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="space-y-4">
                {/* English Version Link */}
                <p className="text-center">
                  <a
                    href="https://www.bitcoinassociation.ch/s/Statutes_BAS_v11.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5a9e9e] hover:text-[#4a8e8e] font-serif text-lg transition-colors"
                  >
                    Download STATUTES PDF English version
                  </a>
                </p>

                {/* German Version Link */}
                <p className="text-center">
                  <a
                    href="https://www.bitcoinassociation.ch/s/Statuten_BAS_v11.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5a9e9e] hover:text-[#4a8e8e] font-serif text-lg transition-colors"
                  >
                    Download STATUTES PDF German version
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
