import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import PageSidebar, { type SidebarItem } from "@/components/PageSidebar";

type LogoItem = {
  name: string;
  logo: string;
  url: string;
};

// Corporate Members data
const corporateMembers: LogoItem[] = [
  {
    name: "21 Analytics",
    logo: "/images/corporate-members/21-analytics-logo.png",
    url: "https://www.21analytics.ch/",
  },
  {
    name: "21 Lectures",
    logo: "/images/corporate-members/21-lectures-logo.png",
    url: "https://www.21lectures.com/",
  },
  {
    name: "Alephium",
    logo: "/images/corporate-members/alephium-logo.png",
    url: "https://alephium.org/",
  },
  {
    name: "badgr.digital GmbH",
    logo: "/images/corporate-members/badgr-digital-logo.png",
    url: "https://badgr.digital/",
  },
  {
    name: "Berglinde AG",
    logo: "/images/location-partners/berglinde.jpg",
    url: "https://www.berglinde.com/",
  },
  {
    name: "Bitcoin Suisse AG",
    logo: "/images/corporate-members/bitcoin-suisse-logo.png",
    url: "https://www.bitcoinsuisse.com/",
  },
  {
    name: "Bitcoin-Schweiz.ch GmbH",
    logo: "/images/corporate-members/bitcoin-schweiz-logo.jpg",
    url: "https://bitcoin-schweiz.ch/",
  },
  {
    name: "BITTR AG",
    logo: "/images/corporate-members/bittr-logo.png",
    url: "https://getbittr.com/",
  },
  {
    name: "BitVault",
    logo: "/images/corporate-members/bitvault-logo.png",
    url: "https://www.bitvault.sv/",
  },
  {
    name: "Blockstream CH Sagl",
    logo: "/images/corporate-members/blockstream-logo.png",
    url: "https://blockstream.com/",
  },
  {
    name: "Crypto Finance AG",
    logo: "/images/corporate-members/crypto-finance-logo.jpg",
    url: "https://www.cryptofinance.ch/",
  },
  {
    name: "Dezentralshop",
    logo: "/images/corporate-members/dezentralshop-logo.png",
    url: "https://dezentralshop.ch/",
  },
  {
    name: "Hodling SA",
    logo: "/images/corporate-members/hodling-logo.png",
    url: "https://hodling.ch/",
  },
  {
    name: "House of Satoshi",
    logo: "/images/location-partners/hos.jpg",
    url: "https://www.house-of-satoshi.ch/",
  },
  {
    name: "House of Test GmbH",
    logo: "/images/corporate-members/house-of-test-logo.png",
    url: "https://www.houseoftest.ch/",
  },
  {
    name: "InCore Bank",
    logo: "/images/corporate-members/incore-bank-logo.jpg",
    url: "https://incorebank.ch/",
  },
  {
    name: "Infinity21 AG",
    logo: "/images/corporate-members/infinity21-logo.png",
    url: "https://infinity21.com/",
  },
  {
    name: "Luzerner Kantonalbank AG",
    logo: "/images/corporate-members/lukb-logo.svg",
    url: "https://www.lukb.ch/",
  },
  {
    name: "NiceHash AG",
    logo: "/images/corporate-members/nicehash-logo.png",
    url: "https://www.nicehash.com/",
  },
  {
    name: "Pandora Prime SA",
    logo: "/images/corporate-members/pandora-prime-logo.svg",
    url: "https://pandoraprime.ch/",
  },
  {
    name: "Pocket Bitcoin (Pocket App AG)",
    logo: "/images/corporate-members/pocket-logo.png",
    url: "https://pocketbitcoin.com/",
  },
  {
    name: "Relai",
    logo: "/images/corporate-members/relai-logo.png",
    url: "https://relai.app/",
  },
  {
    name: "Saynode Operations AG",
    logo: "/images/corporate-members/saynode-logo.png",
    url: "https://www.saynode.ch/",
  },
  {
    name: "Shift Crypto AG",
    logo: "/images/corporate-members/bitbox.png",
    url: "https://shiftcrypto.ch/",
  },
  {
    name: "Swiss CryptoTax GmbH",
    logo: "/images/corporate-members/swiss-cryptotax-logo.png",
    url: "https://www.cryptotax.ch/",
  },
  {
    name: "Tatoshi AG",
    logo: "/images/corporate-members/tatoshi-services-logo.png",
    url: "https://tatoshi-services.com/",
  },
  {
    name: "Unita Finanz & Treuhand AG",
    logo: "/images/corporate-members/unita.jpg",
    url: "https://unitafinance.ch/",
  },
  {
    name: "Wadsack Zug AG",
    logo: "/images/corporate-members/wadsack-logo.png",
    url: "https://www.wadsack.ch/",
  },
];

// Location Partners data
const locationPartners: LogoItem[] = [
  {
    name: "CV Labs",
    logo: "/images/corporate-members/cv-labs-logo.png",
    url: "https://www.cvlabs.com/",
  },
];

// Generous Donors data
const generousDonors = [
  { name: "Daniel Gutenberg", url: "http://www.gutenberg.ch/" },
  { name: "William Taborda", url: null },
  { name: "Andre Drommershausen", url: null },
  { name: "Thierry Fragniere", url: "https://thierryfragniere.ch/" },
];

const sidebarNav: SidebarItem[] = [
  { label: "Private Individuals", href: "/membership/private-individuals" },
  { label: "Corporations", href: "/membership/corporations" },
  { label: "Our Corporate Members", href: "/our-corporate-members", active: true },
];

function LogoGrid({ items }: { items: LogoItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {items.map((item) => (
        <div key={item.name} className="flex items-center justify-center p-2">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-opacity hover:opacity-80"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={120}
                height={70}
                className="max-h-[70px] w-auto object-contain"
                unoptimized
              />
            </a>
          ) : (
            <Image
              src={item.logo}
              alt={item.name}
              width={120}
              height={70}
              className="max-h-[70px] w-auto object-contain"
              unoptimized
            />
          )}
        </div>
      ))}
    </div>
  );
}

function LocationPartnerGrid({ items }: { items: LogoItem[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((item) => (
        <div key={item.name} className="flex items-center justify-center">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-opacity hover:opacity-80"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={180}
              height={100}
              className="max-h-[100px] w-auto object-contain"
              unoptimized
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default function OurCorporateMembersPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <PageSidebar
              title="membership"
              titleHref="/private"
              items={sidebarNav}
              titleClassName="text-[#c8a26b]"
            />

            {/* Main Content */}
            <div className="flex-1">
              {/* Corporate Members Section */}
              <section className="mb-16">
                <h1 className="text-3xl md:text-4xl font-serif text-center mb-6">
                  <strong>Corporate Members</strong>
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-3xl mx-auto">
                  The following organizations have chosen to support the work of the
                  &laquo;Bitcoin Association Switzerland&raquo; (BAS) financially, through a
                  corporate membership.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-3xl mx-auto">
                  The listed organizations are not liable for any conduct or official messages
                  of the BAS; nor is the BAS responsible for the conduct and/or business of
                  the listed organizations.
                </p>
                <LogoGrid items={corporateMembers} />
              </section>

              {/* Location Partners Section */}
              <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-serif text-center mb-6">
                  <strong>Location Partners</strong>
                </h2>
                <LocationPartnerGrid items={locationPartners} />
              </section>

              {/* Generous Donors Section */}
              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-serif text-center mb-6">
                  <strong>Generous Donors</strong>
                </h2>
                <p className="text-gray-600 text-sm text-center mb-6">
                  The following individuals donated 1 Bitcoin or more to support our mission:
                </p>
                <div className="text-center space-y-2">
                  {generousDonors.map((donor) => (
                    <p key={donor.name}>
                      {donor.url ? (
                        <a
                          href={donor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#c8a26b] hover:underline font-semibold"
                        >
                          {donor.name}
                        </a>
                      ) : (
                        <span className="font-semibold text-gray-800">{donor.name}</span>
                      )}
                    </p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
