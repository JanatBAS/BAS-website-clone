import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import PageSidebar, { type SidebarItem } from "@/components/PageSidebar";

// Corporate Members data
const corporateMembers = [
  {
    name: "BitBox",
    logo: "/images/corporate-members/bitbox.png",
    url: "https://shiftcrypto.ch/",
  },
  {
    name: "Bitcoin Suisse",
    logo: "/images/corporate-members/bitcoin-suisse-logo.png",
    url: "https://www.bitcoinsuisse.com/",
  },
  {
    name: "Blockchain Source",
    logo: "/images/corporate-members/blockchain-source-logo.png",
    url: "https://blockchainsource.ch/",
  },
  {
    name: "Crypto Finance",
    logo: "/images/corporate-members/crypto-finance-logo.jpg",
    url: "https://www.cryptofinance.ch/",
  },
  {
    name: "21 Analytics",
    logo: "/images/corporate-members/21-analytics-logo.png",
    url: "https://www.21analytics.ch/",
  },
  {
    name: "Tatoshi Services",
    logo: "/images/corporate-members/tatoshi-services-logo.png",
    url: "https://tatoshi-services.com/",
  },
  {
    name: "Apps with love",
    logo: "/images/corporate-members/apps-with-love-logo.png",
    url: "https://appswithlove.com/",
  },
  {
    name: "Hodling",
    logo: "/images/corporate-members/hodling-logo.png",
    url: "https://hodling.ch/",
  },
  {
    name: "Alephium",
    logo: "/images/corporate-members/alephium-logo.png",
    url: "https://alephium.org/",
  },
  {
    name: "Aktionariat",
    logo: "/images/corporate-members/aktionariat.jpg",
    url: "https://aktionariat.com/",
  },
  {
    name: "21 Lectures",
    logo: "/images/corporate-members/21-lectures-logo.png",
    url: "https://www.21lectures.com/",
  },
  {
    name: "Incore Bank",
    logo: "/images/corporate-members/incore-bank-logo.jpg",
    url: "https://incorebank.ch/",
  },
  {
    name: "Pocket",
    logo: "/images/corporate-members/pocket-logo.png",
    url: null,
  },
  {
    name: "House of Satoshi",
    logo: "/images/location-partners/hos.jpg",
    url: "https://www.house-of-satoshi.ch/",
  },
  {
    name: "Berglinde",
    logo: "/images/location-partners/berglinde.jpg",
    url: "https://www.berglinde.com/",
  },
  {
    name: "Infinity21",
    logo: "/images/corporate-members/infinity21-logo.png",
    url: "https://infinity21.com/",
  },
  {
    name: "SayNode",
    logo: "/images/corporate-members/saynode-logo.png",
    url: "https://www.saynode.ch/",
  },
  {
    name: "Nym",
    logo: "/images/corporate-members/nym-logo.png",
    url: "https://nymtech.net/",
  },
  {
    name: "Zeus ATM",
    logo: "/images/corporate-members/zeus-logo.webp",
    url: "https://zeusatm.ch/",
  },
  {
    name: "bitcoin-schweiz.ch",
    logo: "/images/corporate-members/bitcoin-schweiz-logo.jpg",
    url: "https://bitcoin-schweiz.ch/",
  },
  {
    name: "Lamassu",
    logo: "/images/corporate-members/lamassu-logo.png",
    url: "https://lamassu.is/",
  },
  {
    name: "Scholarium",
    logo: "/images/corporate-members/scholarium-logo.png",
    url: "http://scholarium.at/",
  },
  {
    name: "House of Test Swiss",
    logo: "/images/corporate-members/house-of-test-logo.png",
    url: "https://www.houseoftest.ch/",
  },
  {
    name: "Relai",
    logo: "/images/corporate-members/relai-logo.png",
    url: "https://relai.app/",
  },
  {
    name: "Nakamochi",
    logo: "/images/corporate-members/nakamochi-logo.png",
    url: "https://nakamochi.io/",
  },
  {
    name: "Bittr",
    logo: "/images/corporate-members/bittr-logo.png",
    url: "https://getbittr.com/",
  },
  {
    name: "Unita",
    logo: "/images/corporate-members/unita.jpg",
    url: "https://unitafinance.ch/",
  },
  {
    name: "NiceHash",
    logo: "/images/corporate-members/nicehash-logo.png",
    url: "https://www.nicehash.com/",
  },
  {
    name: "Pandora Prime",
    logo: "/images/corporate-members/pandora-prime-logo.png",
    url: "https://pandoraprime.ch/",
  },
  {
    name: "BitVault",
    logo: "/images/corporate-members/bitvault-logo.png",
    url: "https://www.bitvault.sv/",
  },
];

// Partner Organizations data
const partnerOrganizations = [
  {
    name: "University of Basel - Center for Innovative Finance",
    logo: "/images/partners/uni-basel.png",
    url: "https://cif.unibas.ch/en/home/",
  },
  {
    name: "SICTIC",
    logo: "/images/corporate-members/sictic-logo.png",
    url: "https://www.sictic.ch/",
  },
  {
    name: "Swiss Blockchain Federation",
    logo: "/images/corporate-members/swiss-blockchain-federation-logo.png",
    url: "https://blockchainfederation.ch/",
  },
  {
    name: "Avalbit",
    logo: "/images/partners/avalbit-logo.png",
    url: "https://avalbit.org/",
  },
  {
    name: "Hayekianer",
    logo: "/images/partners/hayek.png",
    url: "https://hayekianer.ch/",
  },
  {
    name: "Swiss Finance Startups",
    logo: "/images/partners/sfs.png",
    url: "https://www.swissfinancestartups.com/",
  },
  {
    name: "Swiss Fintech Association",
    logo: "/images/partners/sfta-logo.png",
    url: "https://swissfinte.ch/",
  },
  {
    name: "Blockchain for Europe",
    logo: "/images/corporate-members/blockchain-for-europe-logo.png",
    url: "https://www.blockchain4europe.eu/",
  },
];

// Location Partners data
const locationPartners = [
  {
    name: "Trust Square",
    logo: "/images/partners/trust-square-logo.jpg",
    url: "https://www.trustsquare.ch/",
  },
  {
    name: "CV Labs",
    logo: "/images/corporate-members/cv-labs-logo.png",
    url: "https://www.cvlabs.com/",
  },
  {
    name: "Finance 2.0",
    logo: "/images/corporate-members/finance-2-0-logo.jpg",
    url: "https://finance20.ch/",
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

function LogoGrid({ items }: { items: typeof corporateMembers }) {
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

function PartnerGrid({ items }: { items: typeof partnerOrganizations }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {items.map((item) => (
        <div key={item.name} className="flex items-center justify-center p-2">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-opacity hover:opacity-80"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={140}
              height={80}
              className="max-h-[80px] w-auto object-contain"
              unoptimized
            />
          </a>
        </div>
      ))}
    </div>
  );
}

function LocationPartnerGrid({ items }: { items: typeof locationPartners }) {
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

              {/* Partner Organizations Section */}
              <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-serif text-center mb-6">
                  <strong>Partner Organisations</strong>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-3xl mx-auto">
                  The following organizations have chosen to support the work of the
                  &laquo;Bitcoin Association Switzerland&raquo; (BAS) through various means and
                  services, other than a corporate membership..
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-3xl mx-auto">
                  The listed organizations are not liable for any conduct or official messages
                  of the BAS; nor is the BAS responsible for the conduct and/or business of
                  the listed organizations.
                </p>
                <PartnerGrid items={partnerOrganizations} />
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
