import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const sidebarLinks = [
  { label: "ABOUT", href: "/about-1", active: false },
  { label: "BOARD", href: "/board", active: false },
  { label: "FINANCES", href: "/finances", active: true },
  { label: "STATUTES", href: "/statutes", active: false },
  { label: "MEDIA KIT", href: "/media-kit", active: false },
  { label: "CONTACT", href: "/contact-1", active: false },
];

export default function FinancesPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Sidebar Navigation */}
            <aside className="md:w-48 flex-shrink-0">
              <h2 className="text-[#c75b4a] text-xl font-serif mb-4">About</h2>
              <nav className="flex flex-col space-y-2">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs tracking-wider transition-colors ${
                      link.active
                        ? "text-gray-900 font-semibold"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-2xl font-semibold text-gray-700 tracking-wide mb-6">
                FINANCES
              </h1>

              <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
                <p>
                  Our activities are financed by corporate and individual membership fees and event-specific
                  sponsoring.
                </p>

                <p>
                  The Bitcoin Association holds all its funds in the following Bitcoin address (3-out-of-5 multi-sig):
                </p>

                <p>
                  OLD WALLET:{" "}
                  <a
                    href="https://blockstream.info/address/35TTXLEtU8ZKAeTEBkx6qG7Cox8RyDw3uW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6b9b8a] hover:underline break-all"
                  >
                    35TTXLEtU8ZKAeTEBkx6qG7Cox8RyDw3uW
                  </a>
                </p>

                <p>
                  NEW WALLET:{" "}
                  <a
                    href="https://blockstream.info/address/bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6b9b8a] hover:underline break-all"
                  >
                    bc1q4rw988vc977354c70qae7m6k4zj45plksm47g0sek36zhe3adv5ss7w9ju
                  </a>
                </p>

                <p>
                  If you want to support us, you can donate to the address mentioned above (NEW WALLET).
                </p>

                <div className="pt-4">
                  <p>Below are the additional addresses that have been used as change addresses:</p>

                  <p className="mt-4">
                    (1) bc1qq7wfu8qt6lp8u7slgps675m7h8zaj9zujgeydnely27fjy6lz8lqjtseja
                  </p>

                  <p className="mt-4">
                    (2){" "}
                    <a
                      href="https://blockstream.info/address/bc1q22vgj34r5e298d0x2gxwkm02p4fgq2txc2edemvxrnuvdqa0r5hqx0kdwu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6b9b8a] hover:underline break-all font-semibold"
                    >
                      bc1q22vgj34r5e298d0x2gxwkm02p4fgq2txc2edemvxrnuvdqa0r5hqx0kdwu
                    </a>{" "}
                    <span className="font-semibold">(current)</span>
                  </p>
                </div>
              </div>

              {/* Quotes Section */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {/* Quote 1 - Peter Thiel */}
                <blockquote className="text-center">
                  <div className="text-[#c5c5c5] text-5xl font-serif leading-none mb-4">&ldquo;</div>
                  <p className="text-gray-500 text-sm leading-relaxed italic mb-4">
                    I do think Bitcoin is the first [digital money] that has the potential to do something like
                    change the world.
                  </p>
                  <footer className="text-[#c75b4a] text-xs">
                    &mdash; Peter Thiel, Co-Founder of Paypal
                  </footer>
                </blockquote>

                {/* Quote 2 - Eric Schmidt */}
                <blockquote className="text-center">
                  <div className="text-[#c5c5c5] text-5xl font-serif leading-none mb-4">&ldquo;</div>
                  <p className="text-gray-500 text-sm leading-relaxed italic mb-4">
                    Bitcoin is a remarkable cryptographic achievement and the ability to create something that
                    is not duplicable in the digital world has enormous value
                  </p>
                  <footer className="text-[#c75b4a] text-xs">
                    &mdash; Eric Schmidt, CEO of Google
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
