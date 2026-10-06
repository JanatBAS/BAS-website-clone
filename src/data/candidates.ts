/**
 * Candidate profiles of the Board Election 2024 (extraordinary general
 * assembly of 5 October 2024). Each profile is rendered at /<slug> by
 * src/components/candidates/CandidateProfilePage.tsx.
 */

export interface CandidateDocument {
  label: string;
  href: string;
  /** Plain text shown right after the link, e.g. " | EN". */
  suffix?: string;
}

export interface CandidateProfile {
  slug: string;
  name: string;
  location: string;
  /** Current position, shown as the profile's subheading. */
  role: string;
  /** Intrinsic pixel size of the photo, used for its aspect ratio. */
  photo: { src: string; width: number; height: number };
  bio: string[];
  linkedin?: string;
  telegram: { handle: string; href?: string };
  nostr?: { npub: string; href: string };
  documents: CandidateDocument[];
  /** Embeddable (YouTube/Vimeo) introduction video. */
  video?: { src: string; title: string };
  /** Show the section banner image above the profile. */
  showBanner?: boolean;
  /** Show the sidebar labels in capitals. */
  uppercaseNav?: boolean;
}

export const candidateProfiles: CandidateProfile[] = [
  {
    slug: "adriano-bertini",
    name: "Adriano Bertini",
    location: "4052 Basel",
    role: "Head of Product and Strategy at Ledger Enterprise",
    photo: { src: "/images/candidates/adriano-bertini.jpeg", width: 448, height: 448 },
    bio: [
      "Adriano Bertini has a robust career in financial services, blockchain, and strategic consulting, currently serving as the Head of Product and Strategy at Ledger Enterprise. He has held various leadership roles in both established corporations and innovative tech companies, driving projects that bridge the gap between traditional finance and blockchain solutions. His experience spans project management, risk management, and regulatory compliance, with a focus on cutting-edge technology and cryptocurrency adoption. Adriano has been instrumental in promoting Bitcoin and blockchain technology through various strategic initiatives. His deep knowledge of both financial systems and blockchain solutions makes him a critical player in the integration of cryptocurrencies into institutional frameworks.",
      "Adriano is motivated to run for a board seat at the Bitcoin Association Switzerland to drive the integration of Bitcoin into the financial mainstream. He believes that his experience in both finance and blockchain technology will help shape the Association's future, particularly in areas of regulatory compliance and institutional adoption. Furthermore, he aims to increase Bitcoin awareness and forge strategic partnerships for the Association.",
    ],
    linkedin: "https://www.linkedin.com/in/adriano-bertini/",
    telegram: { handle: "@SeccoBit" },
    documents: [
      {
        label: "Application Documents",
        href: "/pdfs/AdrianoBertini_BAS_PresidentApplication_2025.pdf",
      },
    ],
    showBanner: true,
  },
  {
    slug: "alexandre-flory-samartino",
    name: "Alexandre Flory Samartino",
    location: "8006 Zurich",
    role: "Blockchain Researcher and Generalist",
    photo: { src: "/images/candidates/alexandre.png", width: 500, height: 500 },
    bio: [
      "Alexandre Flory Samartino has a solid background in both mechanical engineering and blockchain, holding master's degrees in Mechanical Engineering from EPFL and Blockchain and Digital Currencies from the University of Nicosia. He began his career with an entrepreneurial focus, launching a startup after his thesis work at Migros and attending Swiss Confederation-funded entrepreneurship classes. Over time, his passion for cryptocurrencies deepened, leading him to work as a Blockchain Researcher, where he developed technical expertise through a full-stack coding bootcamp and involvement in projects like Polkadot. His extensive experience includes writing articles to simplify complex blockchain topics, and he has a growing interest in promoting Bitcoin as the ultimate solution for financial sovereignty.",
      "Alexandre is running for a board seat at the Bitcoin Association Switzerland to steer the organization toward becoming a Bitcoin-only association. He aims to establish the BAS as a key reference for Bitcoin in Switzerland, engaging private individuals, businesses, and government agencies. Additionally, he plans to expand the Swiss-French community with educational events, leveraging his development experience and regional connections to further Bitcoin's influence.",
    ],
    linkedin: "https://www.linkedin.com/in/alexandreflorysamartino/",
    telegram: { handle: "@DonCervantes" },
    documents: [
      {
        label: "Application Documents",
        href: "/pdfs/AlexandreFlorySamartino_BAS_PresidentApplication_2025.pdf",
      },
    ],
    showBanner: true,
  },
  {
    slug: "bastian-feder",
    name: "Bastian Feder",
    location: "3007 Bern",
    role: "CEO and Co-Founder of Lightning Payment Services AG (Lipa)",
    photo: { src: "/images/candidates/bastian.png", width: 1166, height: 1484 },
    bio: [
      "Bastian Feder has over 21 years of experience in software development and entrepreneurship. He is the CEO and co-founder of Lipa, a company that provides accessible and reliable Bitcoin services. His previous roles include Lead Architect and Tech Lead at Swisscom Banking, where he gained significant banking experience. Bastian is also a keynote speaker and trainer, actively sharing his knowledge about Bitcoin and software development. As a serial entrepreneur, he has initiated various user groups and meetups, building communities around his areas of expertise.",
      "Bastian is running for a board seat at the Bitcoin Association Switzerland to strengthen Bitcoin's position in Switzerland and foster discussion around its advantages and disadvantages. He aims to build a strong network of entrepreneurs, visionaries, and influencers, positioning Switzerland as a pioneering financial nation. Fully supporting the Orange Vision for the BAS, he is eager to represent it with pride and dedication.",
    ],
    linkedin: "https://www.linkedin.com/in/bastianfeder/",
    telegram: { handle: "@lapistano" },
    documents: [],
    showBanner: true,
  },
  {
    slug: "dario-duran",
    name: "Dario Duran",
    location: "5210 Windisch",
    role: "Strategic Advisor and Project Manager",
    photo: { src: "/images/candidates/dario.png", width: 2428, height: 1678 },
    bio: [
      "Dario Duran has a rich professional background spanning over several industries, with roles in fintech startups, digital asset custody, and investment banking. He is currently involved in a project aimed at creating a Bitcoin-denominated bank account regulated in Switzerland and advises Swiss companies on establishing a presence in the UAE. His previous roles include leadership positions in crypto banking, transaction banking, and strategic business development for crypto wallet startups. Dario's technical expertise dates back to introducing TCP/IP to UBS in the 1990s, and he has been actively involved in Bitcoin technology since 2015, running his own nodes and continuously learning by doing.",
      "Dario is motivated to run for a board seat at the Bitcoin Association Switzerland, particularly in roles like Secretary or Treasurer where he can apply his leadership experience, financial oversight, and operational expertise. He is committed to advancing the Association's mission and believes his versatile background in business management and technology will be a valuable asset. Additionally, he sees himself as a steady and reliable board member, ready to contribute to the success of the Bitcoin community.",
    ],
    linkedin: "https://www.linkedin.com/in/dario-duran/",
    telegram: { handle: "@mytwocentimes" },
    documents: [],
    showBanner: true,
  },
  {
    slug: "demelza-hays",
    name: "Demelza Hays",
    location: "UK, moving to Switzerland soon",
    role: "Digital Asset Portfolio Manager at Zeltner & Co. and Chief Economist at Cointelegraph",
    photo: { src: "/images/candidates/demelza.png", width: 1456, height: 1420 },
    bio: [
      "Demelza Hays is an accomplished professional with over a decade of experience in the Bitcoin ecosystem. She currently manages over $60 million in digital assets at Zeltner & Co., including one of the largest actively managed Bitcoin securities globally. Additionally, she serves as the Chief Economist at Cointelegraph, where she performs on-chain analysis, statistical research, and produces reports on digital assets. Her academic background includes a PhD in Business Economics from the University of Liechtenstein, and she has held multiple roles in cryptocurrency fund management, as well as teaching engagements at prestigious institutions. Demelza is also a Forbes 30 Under 30 honoree for her contributions to the crypto space.",
      "Demelza seeks to join the board of the Bitcoin Association Switzerland to advance Bitcoin's adoption, particularly by establishing a multi-sig wallet for the Association's funds and creating a treasury management plan. She also aims to engage the Italian and French-speaking regions of Switzerland, increasing community involvement and organizing local events. With her deep knowledge of finance and cryptocurrencies, Demelza is committed to shaping the Bitcoin community in Switzerland through education, transparency, and sound regulatory practices.",
    ],
    linkedin: "https://www.linkedin.com/in/demelza-hays-ph-d-7211845a/",
    telegram: { handle: "@Demelzah" },
    documents: [],
    video: {
      src: "https://player.vimeo.com/video/1006737969?h=0&title=0&byline=0&portrait=0",
      title: "Demelza Hays - Board Election Video",
    },
  },
  {
    slug: "eric-wasescha",
    name: "Eric Wasescha",
    location: "8704 Herrliberg",
    role: "Chief Corporate Development Officer at Brightmarbles Group",
    photo: { src: "/images/candidates/eric-wasescha.png", width: 1200, height: 1609 },
    bio: [
      "Eric Wasescha is an experienced leader with over 20 years in senior executive roles in the financial services industry. He is currently the Chief Corporate Development Officer at Brightmarbles Group, a software engineering company. Prior to this, he was the Managing Director at Migros Bank, where he led strategic initiatives in digital transformation, and also held leadership positions at Vontobel Investment Banking. He is the founder of two successful companies, which he grew from zero to CHF 11 million in revenue. Additionally, Eric co-founded the Swiss Structured Products Association, where he played a key role in the development of structured investment products in Switzerland.",
      "Eric is running for a board seat at the Bitcoin Association Switzerland to advance the organization's goals under the \"Orange Vision,\" focusing on Bitcoin's unique position to separate money from the state. He has been a Bitcoiner since 2020 and believes Bitcoin offers a critical solution for financial sovereignty. Eric aims to strengthen the Bitcoin community in Switzerland, engage stakeholders, and improve BAS's transparency and operational efficiency, while supporting Bitcoin adoption through initiatives such as hosting meetups and events.",
    ],
    linkedin: "https://www.linkedin.com/in/eric-wasescha/",
    telegram: { handle: "@Eric_Satoshi" },
    documents: [],
  },
  {
    slug: "lisa-tscherry",
    name: "Lisa Tscherry",
    location: "Zurich",
    role: "HR Business Partner at PwC Switzerland AG",
    photo: { src: "/images/candidates/lisa-tscherry.jpeg", width: 400, height: 400 },
    bio: [
      "Lisa Tscherry holds a Master's degree in Psychology and a Master's in Blockchain and Digital Currency, having graduated as the top student from the University of Nicosia. With a strong background in strategic HR roles, she has developed key skills in conflict moderation, leadership, and community engagement. In addition to her HR experience, Lisa is an active member of the Bitcoin community and the founder of \"SatoShe – Bitcoin for women,\" a successful educational initiative aimed at onboarding women into Bitcoin. She has organized numerous events and workshops, drawing over 100 participants, and recently presented at the Swiss Bitcoin Conference in Kreuzlingen.",
      "Lisa is running for a board seat at the Bitcoin Association Switzerland to advance the organization's educational and community-building initiatives. She envisions establishing BAS as a central authority for Bitcoin-related inquiries in Switzerland, focusing on creating structured, scalable educational programs, both in-person and online. Additionally, she advocates for partnerships with universities and financial institutions, with the goal of positioning BAS as a leading authority in Bitcoin education.",
    ],
    linkedin: "https://www.linkedin.com/in/lisa-tscherry/",
    telegram: { handle: "@SatoShe_21" },
    documents: [],
  },
  {
    slug: "marcel-rapold",
    name: "Marcel Rapold",
    location: "Erlenbach",
    role: "IT Project Manager at Zurcher Verkehrsverbund (ZVV)",
    photo: { src: "/images/candidates/marcel-rapold.jpeg", width: 500, height: 500 },
    bio: [
      "Marcel Rapold is a highly skilled IT Project Manager with over 15 years of experience in the fields of digital transformation and process optimization. He has led various high-impact projects at ZVV, focusing on improving customer relationships and enhancing digital services. Marcel's expertise spans from technical project management to implementing cutting-edge technologies such as the Lightning Network and Nostr. He holds a Master of Advanced Studies (MAS) in Digital Business and is currently pursuing an Executive MBA (to be completed in 2025). Marcel's background also includes entrepreneurship, having co-founded ALPA.one, where he focuses on IT project development and innovation management.",
      "Marcel is running for a board seat at the Bitcoin Association Switzerland with the goal of establishing it as a Bitcoin-only association. He aims to bring his strong organizational skills to the role of Secretary, where he has already worked on structuring BAS protocols, improving workflows for member onboarding, and securing funds with a multisig wallet setup. Marcel's focus is on efficient communication, process automation, and ensuring that BAS remains firmly committed to Bitcoin's principles",
    ],
    linkedin: "https://www.linkedin.com/in/marcelrapold/",
    telegram: { handle: "@muraschal", href: "http://t.me/muraschal" },
    nostr: {
      npub: "npub17zja62hnnuz5yrqgdv5ummpcs4n3fflm7xkyp7lxtwzstedksd3sft2afg",
      href: "https://primal.net/p/npub17zja62hnnuz5yrqgdv5ummpcs4n3fflm7xkyp7lxtwzstedksd3sft2afg",
    },
    documents: [
      {
        label: "Bewerbungsunterlagen",
        href: "https://cv.marcelrapold.com/bas/BAS-APPLICATION-MARCELRAPOLD-DE.pdf",
        suffix: " | DE",
      },
      {
        label: "Application Documents",
        href: "https://cv.marcelrapold.com/bas/BAS-APPLICATION-MARCELRAPOLD-EN.pdf",
        suffix: " | EN",
      },
    ],
  },
  {
    slug: "niklas-nikolajsen",
    name: "Niklas Nikolajsen",
    location: "6300 Zug",
    role: "Head of family office (various projects)",
    photo: { src: "/images/board/niklas-nikolajsen.jpg", width: 341, height: 480 },
    bio: [
      "Niklas Nikolajsen is a well-known figure in the cryptocurrency space, having founded Bitcoin Suisse AG in 2013 and served as its CEO until 2017, and as its Chairman until 2021. He has a background in computer science, having earned his degree from Copenhagen Business School in 1999. Over the years, Niklas played a pivotal role in shaping the Bitcoin ecosystem in Switzerland. Since stepping down from his roles at Bitcoin Suisse, he has been involved in a number of family office projects, including the renovation of a historic property in Zug and philanthropic initiatives in Copenhagen. His career began as a software architect, and he transitioned to the Bitcoin space in 2010 as an early adopter and investor.",
      "Niklas is running for a board seat at the Bitcoin Association Switzerland (BAS) due to his deep commitment to Bitcoin and concern for the well-being of the Association. As a founding member, he wishes to address internal disagreements within the board and bring stability to the organization. His priorities include improving the BAS's structure and governance, establishing a sound multisig fund management system, and reactivating the Association's historic work in organizing Bitcoin-related events and meetups. Niklas supports a fiscally conservative approach to the BAS treasury, using it only in exceptional circumstances.",
    ],
    telegram: { handle: "@niklasnikolajsen", href: "https://t.me/niklasnikolajsen" },
    documents: [],
  },
  {
    slug: "phil-lojacono",
    name: "Phil Lojacono",
    location: "Baar",
    role: "Founder & Owner at Berglinde AG",
    photo: { src: "/images/board/phil-lojacono.jpg", width: 2500, height: 3750 },
    bio: [
      "Phil Lojacono is a seasoned entrepreneur with extensive experience in fintech and business development. He is the founder of Berglinde AG, a self-funded Bitcoin company aimed at onboarding businesses to a Bitcoin standard. Previously, Phil served as CEO of Liiva AG, a joint venture between Switzerland's largest bank (Raiffeisen) and its leading insurance company (Mobiliar), where he led the development of a digital real estate platform. Phil also co-founded Advanon AG, a working capital financing platform for SMEs, which he successfully scaled across two juristictions and later sold.",
      "In parallel he started writing the Berglinde (formerly Coprnic) newsletter three years ago with which he regularly writes about Bitcoin and its effects on macroeconomics and politics. He's a regular guest on Bitcoin podcasts with the aim to onboard the next few thousand Bitcoiners.",
      "Phil is running for a board seat at the Bitcoin Association Switzerland to leverage his entrepreneurial and leadership skills to foster a vibrant Bitcoin community in Switzerland. His vision includes enhancing public understanding of Bitcoin, advocating for favorable regulatory policies, and supporting Bitcoin innovation and research.",
    ],
    linkedin: "https://www.linkedin.com/in/phillojacono/",
    telegram: { handle: "@phillojacono" },
    documents: [],
  },
  {
    slug: "ralph-hofacker",
    name: "Ralph Hofacker",
    location: "Baar",
    role: "Co-Founder and Co-CEO at Brick Towers AG",
    // The page has always shown this photo; there is no photo of Ralph in public/images.
    photo: { src: "/images/board/lucas-betschart.jpg", width: 2500, height: 1667 },
    bio: [
      "Ralph Hofacker is a seasoned leader in the blockchain and digital currencies sectors, known for his strategic expertise and advocacy in the industry. As the Co-Founder and Co-CEO of Brick Towers, Ralph is driving innovative digital asset strategies, developing a Bitcoin yield product utilizing the Lightning Network. Previously, Ralph held leadership positions at Leonteq Securities AG, where he developed long-term savings solutions, and served as President of the Pillar Project Foundation. His academic background includes an MSc in Blockchain and Digital Currencies from the University of Nicosia and an MSc in Mathematical Finance from the University of Oxford.",
      "Ralph enjoyed his time with the BAS over the last 8 years as a member, engaging with the community, attending numerous events and meetups, and having discussions that expanded his understanding and connection within the Bitcoin space. For him, these interactions highlighted BAS's critical role in shaping the dialogue around Bitcoin in Switzerland and beyond. His motivation to step up and join the board is to uphold BAS' reputation by organizing events with global Bitcoin experts to foster critical discussions. Ralph also aims to implement efficient operational structures that streamline processes, improve access to information for members, and enable the association to focus on high-impact Bitcoin initiatives.",
    ],
    linkedin: "https://www.linkedin.com/in/ralph-hofacker/",
    telegram: { handle: "@RalphHofacker" },
    documents: [],
  },
  {
    slug: "ronald-kogens",
    name: "Ronald Kogens",
    location: "8712 Staefa",
    role: "Partner & Tech Lawyer at MME",
    photo: { src: "/images/candidates/ronald-kogens.jpeg", width: 500, height: 500 },
    bio: [
      "Ronald Kogens is an experienced lawyer specializing in fintech, Web3, and decentralized technologies. With over a decade of legal expertise, he has been instrumental in advising and structuring disruptive blockchain projects, decentralized finance (DeFi) solutions, and decentralized autonomous organizations (DAOs). Ronald has worked with major firms such as MME and Froriep Legal Ltd., and has a wealth of experience in regulatory compliance, licensing, data privacy, and intellectual property. He holds an LL.M. from Chapman University, California, and is a recognized expert in digital finance, frequently cited in media and legal publications.",
      "Ronald is running for a board seat at the Bitcoin Association Switzerland due to his commitment to Bitcoin maximalism and his opposition to projects that undermine Bitcoin's original ethos. His journey into Bitcoin started in 2016, when he introduced it as a payment option at EY. As a lawyer in the Web3 space, Ronald has deep legal knowledge surrounding Bitcoin and has actively participated in the Association's activities. His goal is to advocate for Bitcoin's integrity, maintain a focus on decentralization, and use his global network of Bitcoin maximalists to further the Association's mission.",
    ],
    linkedin: "https://www.linkedin.com/in/ronald-kogens/",
    telegram: { handle: "@x000xy" },
    documents: [],
    uppercaseNav: true,
  },
  {
    slug: "tobias-kress",
    name: "Tobias Kress",
    location: "8048 Zurich",
    role: "Head of Engineering at Rhino.fi & CEO at Tatoshi AG",
    photo: { src: "/images/board/tobias-kress.jpg", width: 666, height: 840 },
    bio: [
      "Tobias Kress is an experienced IT leader with over two decades of experience in digital banking, blockchain, and cryptocurrency software development. He is the CEO and Co-Founder of Tatoshi AG, a service provider specializing in Bitcoin software development. Tobias also currently serves as the Head of Engineering at Rhino.fi, where he is responsible for scaling the company and improving IT processes. His career includes leadership roles as CTO at honesto AG and cpi Crypto Payments International GmbH, as well as Director of Digital Solutions at Credit Suisse. Tobias holds extensive knowledge in Bitcoin, decentralized finance, and IT architecture, and has spoken at numerous international conferences on cryptocurrency.",
      "Tobias is running for a board seat at the Bitcoin Association Switzerland to facilitate discussions on technical innovations in the Bitcoin space, particularly around Layer 2 solutions and zk-rollups. He aims to revive the tradition of hosting world-class speakers and events in Switzerland, ensuring that the community remains up-to-date on Bitcoin's latest developments. Additionally, Tobias advocates for using some of the Association's funds to support Bitcoin Core developers, which he believes would significantly contribute to Bitcoin's growth.",
    ],
    linkedin: "https://www.linkedin.com/in/tobias-kress-04a3bb68/",
    telegram: { handle: "@Tobias_ZH" },
    documents: [],
    showBanner: true,
  },
];

export function getCandidateProfile(slug: string): CandidateProfile {
  const profile = candidateProfiles.find((candidate) => candidate.slug === slug);
  if (!profile) {
    throw new Error(`Unknown candidate profile: ${slug}`);
  }
  return profile;
}
