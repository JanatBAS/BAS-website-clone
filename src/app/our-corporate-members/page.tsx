import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Corporate Members data
const corporateMembers = [
  {
    name: "BitBox",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1596551209231-6DTNGQPKB6CHPIPF3GRS/02b+db-BitBox+margin+bkg-transparent.png?format=300w",
    url: "https://shiftcrypto.ch/",
  },
  {
    name: "Bitcoin Suisse",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1539339845417-XB6KMLWHKWCXKYOIDQLL/full_logo_new.png?format=300w",
    url: "https://www.bitcoinsuisse.com/",
  },
  {
    name: "Blockchain Source",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1728027563887-9D9OLHIZYI2BQQB4XUNH/logo-354x59.png?format=300w",
    url: "https://blockchainsource.ch/",
  },
  {
    name: "Crypto Finance",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1556548120132-FDRR0QNN1G4YMFDGJHJO/Crypto-Finance-logo.jpg?format=300w",
    url: "https://www.cryptofinance.ch/",
  },
  {
    name: "21 Analytics",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1594364557839-RTANLGKYTOHNW3W7DWNB/Logo.png?format=300w",
    url: "https://www.21analytics.ch/",
  },
  {
    name: "Tatoshi Services",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727654250834-4V6KRLIF5N1AROCN4JT1/Logo+Tatoshi+Services.png?format=300w",
    url: "https://tatoshi-services.com/",
  },
  {
    name: "Apps with love",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1624207019607-RBOKOAIK9P121899L034/Awl_Logo_17_black_rgb.png?format=100w",
    url: "https://appswithlove.com/",
  },
  {
    name: "Hodling",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1624369670385-FICD1IXHLKO0KISG37QF/hodling-logo.png?format=300w",
    url: "https://hodling.ch/",
  },
  {
    name: "Alephium",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1636130674575-E9EBWE86QJOH1R038Z47/image_2021-11-01_09-39-50.png?format=300w",
    url: "https://alephium.org/",
  },
  {
    name: "Aktionariat",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1636188901843-LKE49EDOBMHBW0NQLD2V/Aktionariat.jpg?format=300w",
    url: "https://aktionariat.com/",
  },
  {
    name: "21 Lectures",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1681299724574-ROJH85FPQ8DDD36W8MKJ/yellow_black.png?format=300w",
    url: "https://www.21lectures.com/",
  },
  {
    name: "Incore Bank",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1765804013568-ON3P0X10SFU43PP1GCK9/InC_Logotype_rgb-hex-1749C6_0724.jpg?format=300w",
    url: "https://incorebank.ch/",
  },
  {
    name: "Pocket",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1738872657909-DN85KSD3N76MHRTHKACR/pocket-light.png?format=300w",
    url: null,
  },
  {
    name: "House of Satoshi",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726920586590-25CR1IXKQRR83AL62VQG/HoS.jpg?format=300w",
    url: "https://www.house-of-satoshi.ch/",
  },
  {
    name: "Berglinde",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726920800707-V2WQ0NY7MCAMG4F5W79I/Berglinde.jpg?format=300w",
    url: "https://www.berglinde.com/",
  },
  {
    name: "Infinity21",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1726921284073-GBCP6S64DOUMQOIC4OQL/Infintiy21_com.jpg?format=300w",
    url: "https://infinity21.com/",
  },
  {
    name: "SayNode",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727568467135-P6HCSME3M25YDVSLY0BS/Logo+Saynode+B+transparent+%282%29.png?format=100w",
    url: "https://www.saynode.ch/",
  },
  {
    name: "Nym",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1728216316012-B4YYGCSVJ9I6K23GTI9R/nym_1200x630-2dfd28cf.png?format=300w",
    url: "https://nymtech.net/",
  },
  {
    name: "Zeus ATM",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727568701020-HLH119V9BFJEPE1P3GM3/Zeus+Logo+ohne+Claim%403x.png?format=300w",
    url: "https://zeusatm.ch/",
  },
  {
    name: "bitcoin-schweiz.ch",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1727571196505-TICAF3KK9275JC9NJGRW/Logo+bitcoin-schweiz.ch.jpg?format=300w",
    url: "https://bitcoin-schweiz.ch/",
  },
  {
    name: "Lamassu",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1730642437107-NM6E7FDWMOGHSA5DJ1H9/logo-atms-colored-b-320px.png?format=300w",
    url: "https://lamassu.is/",
  },
  {
    name: "Scholarium",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1734428968346-05XILAMCMAT5R1B5GQ4C/scholarium-logo.png?format=300w",
    url: "http://scholarium.at/",
  },
  {
    name: "House of Test Swiss",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1734444147758-EDKRGTOED8C3F698QV1L/hot-logotype-black-rebels.png?format=300w",
    url: "https://www.houseoftest.ch/",
  },
  {
    name: "Relai",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1736800666643-VZ8Z4HLZQD4QEZN5FGMM/Relai_Julian+Liniger_.png?format=300w",
    url: "https://relai.app/",
  },
  {
    name: "Nakamochi",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1741777487636-80VAQDB2JONCFEZ3M4XW/nakamochi-logo-black.png?format=300w",
    url: "https://nakamochi.io/",
  },
  {
    name: "Bittr",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1742559399401-2H32H2A9OV1BSDEZ0MF9/Bittr+Logo+%281%29.png?format=300w",
    url: "https://getbittr.com/",
  },
  {
    name: "Unita",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1742910303034-A4PS8AGV0RLXQ0RU5EC7/unita.jpg?format=300w",
    url: "https://unitafinance.ch/",
  },
  {
    name: "NiceHash",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1744446762941-RQH7Y2A8OZXB8Z1ESJH9/logo_big_light.png?format=300w",
    url: "https://www.nicehash.com/",
  },
  {
    name: "Pandora Prime",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1752831944031-GC9P7Z15VHE0EPSRTKU5/logo.png?format=300w",
    url: "https://pandoraprime.ch/",
  },
  {
    name: "BitVault",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1755722769067-OPN83O8PS2ETJIW4LY2G/BitVault-logo_transparent.png?format=300w",
    url: "https://www.bitvault.sv/",
  },
];

// Partner Organizations data
const partnerOrganizations = [
  {
    name: "University of Basel - Center for Innovative Finance",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1520356559322-8UKNRYQO16Z2GTXPRAML/Uni-Basel.png?format=300w",
    url: "https://cif.unibas.ch/en/home/",
  },
  {
    name: "SICTIC",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1540280919184-RH9SE12KSTY2777PXEUT/sictic_logo.png?format=300w",
    url: "https://www.sictic.ch/",
  },
  {
    name: "Swiss Blockchain Federation",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1569996178809-N8448S1PPEBRDGJHT0E9/sbf.png?format=300w",
    url: "https://blockchainfederation.ch/",
  },
  {
    name: "Avalbit",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506741-Y72G6ITZERNQ8UOVVZLZ/a.png?format=300w",
    url: "https://avalbit.org/",
  },
  {
    name: "Hayekianer",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506913-WWZRVR2S1AD9U92L462X/hayek.png?format=300w",
    url: "https://hayekianer.ch/",
  },
  {
    name: "Swiss Finance Startups",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1505118506935-BS73Y360VY3M5S58P3UC/sfs.png?format=300w",
    url: "https://www.swissfinancestartups.com/",
  },
  {
    name: "Swiss Fintech Association",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1506110586651-SVS7P6PJWLFNRMGH85OK/sfta-logo-tiny.png?format=300w",
    url: "https://swissfinte.ch/",
  },
  {
    name: "Blockchain for Europe",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1618314774016-HWBC7ALLQEVOIVV6IXOD/logo_B4E_titre_Plan+de+travail+1+%284%29.png?format=300w",
    url: "https://www.blockchain4europe.eu/",
  },
];

// Location Partners data
const locationPartners = [
  {
    name: "Trust Square",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1526644625552-BW81AAI2VT3SK71SIQPF/tr.jpg?format=300w",
    url: "https://www.trustsquare.ch/",
  },
  {
    name: "CV Labs",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1537969038775-2CPBS6A53NYZK5B0HW1Y/CV_Labs_Logo.png?format=300w",
    url: "https://www.cvlabs.com/",
  },
  {
    name: "Finance 2.0",
    logo: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1597070217402-M7RUREYX7Q9I7SLT7PVY/unnamed.jpg?format=300w",
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

// Sidebar navigation items
const sidebarNav = [
  { label: "Private", href: "/private", active: false },
  { label: "Corporate", href: "/corporate", active: false },
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
            {/* Sidebar Navigation */}
            <aside className="lg:w-48 flex-shrink-0">
              <nav>
                <h3 className="text-[#c8a26b] text-sm font-medium mb-4 lowercase">
                  membership
                </h3>
                <ul className="space-y-2">
                  {sidebarNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`text-sm uppercase tracking-wider ${
                          item.active
                            ? "text-black font-semibold"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
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
