import { UnifiedEvent, CATEGORY_COLORS } from '@/types/calendar';

// Raw data from most-recent-events
const mostRecentEventsRaw = [
  {
    id: "mre-2",
    slug: "lightning-meetup-with-elizabeth-stark-ceo-lightning-labs",
    title: "Lightning Meetup with Elizabeth Stark (CEO Lightning Labs)",
    date: "Monday 13 January 2020",
    dateISO: "2020-01-13",
    day: "13",
    month: "Jan",
    time: "7:00 pm",
    time24: "19:00",
    endTime: "8:00 pm",
    endTime24: "20:00",
    location: "Langstrasse 136",
    locationUrl: "http://maps.google.com/?q=Langstrasse%20136",
    description:
      'At this "Industry Insights" meetup, Elizabeth will give us some interesting insights into the Lightning Network. Short talk, no slides, q&a, causal get-together.',
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1580830689343-1T2NDNX01ILN41SPXMLS/z.jpeg?format=500w",
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=Lightning%20Meetup%20with%20Elizabeth%20Stark%20%28CEO%20Lightning%20Labs%29&dates=20200113T180000Z/20200113T190000Z&location=Langstrasse%20136",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2020/1/13/lightning-meetup-with-elizabeth-stark-ceo-lightning-labs?format=ical",
  },
  {
    id: "mre-3",
    slug: "bitcoin-christmas-meetup-zurich",
    title: "Bitcoin Christmas Meetup Zurich",
    date: "Wednesday 18 December 2019",
    dateISO: "2019-12-18",
    day: "18",
    month: "Dec",
    time: "7:00 pm",
    time24: "19:00",
    endTime: "11:59 pm",
    endTime24: "23:59",
    location: "Langstrasse 136",
    locationUrl: "http://maps.google.com/?q=Langstrasse%20136",
    description:
      "Bitcoin Association Switzerland invited for a Christmas Special Bitcoin Meetup Zurich.\n\nDouglas Bakkum, Co-founder and CEO of Shift Cryptosecurity gave us some exciting insights into the industry's cat and mouse game of securing private keys",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1580830436549-5ANR19EWCG0LJC0LPBQL/highres_486983933.jpeg?format=500w",
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=Bitcoin%20Christmas%20Meetup%20Z%C3%BCrich&dates=20191218T180000Z/20191218T225900Z&location=Langstrasse%20136",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2020/2/4/bitcoin-christmas-meetup-zurich?format=ical",
  },
  {
    id: "mre-4",
    slug: "who-needs-the-internet-anyway-taking-bitcoin-transactions-offline",
    title: "Who Needs the Internet Anyway: Taking Bitcoin Transactions Offline",
    date: "Tuesday 15 October 2019",
    dateISO: "2019-10-15",
    day: "15",
    month: "Oct",
    time: "7:00 pm",
    time24: "19:00",
    endTime: "8:00 pm",
    endTime24: "20:00",
    location: "Karl der Grosse",
    locationUrl: "http://maps.google.com/?q=Karl%20der%20Grosse",
    description:
      "Bitcoin is considered to be currency of the internet. But what happens if someone has a poor internet connection, or loses it entirely? Neil takes a look at the technologies being built to keep Bitcoin running regardless of network disruptions, including Blockstream Satellite and goTenna mesh networks.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1580830028280-IM7APR9ZUNBI5YNURI4A/IMG_6354.jpeg?format=500w",
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=Who%20Needs%20the%20Internet%20Anyway%3A%20Taking%20Bitcoin%20Transactions%20Offline&dates=20191015T170000Z/20191015T180000Z",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2019/10/15/who-needs-the-internet-anyway-taking-bitcoin-transactions-offline?format=ical",
  },
  {
    id: "mre-5",
    slug: "andreas-m-antonopoulos-thoughts-on-the-future-of-programmable-money",
    title:
      "Andreas M. Antonopoulos: Thoughts on The Future of Programmable Money.",
    date: "Sunday 23 June 2019",
    dateISO: "2019-06-23",
    day: "23",
    month: "Jun",
    time: "7:00 pm",
    time24: "19:00",
    endTime: "8:00 pm",
    endTime24: "20:00",
    location: "Volkshaus",
    locationUrl: "http://maps.google.com/?q=Volkshaus",
    description:
      'With over 1\'500 signup this was the biggest Bitcoin meetup event ever in Europe.\n\nTalks:\n\nThoughts on The Future of Programmable Money - Andreas M. Antonopoulos\n\nAn enlightening speech about the future of programmable money ending with a standing ovation!\n\nA video of the speech can be found on YouTube.\n\nCryptoasset Inheritance Planning - Pamela Morgan\n\nWill your loved ones be able to access your bitcoin, ether, or other cryptoassets if something happens to you? For most cryptoasset owners, the answer is no. Attend this talk and learn how to start building a cryptoasset inheritance plan for your loved ones, without relying on a single third party, and without giving them your keys now.',
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354131936-O9QJ0IL9KE0GRA33IFGE/1.jpg?format=500w",
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=Andreas%20M.%20Antonopoulos%3A%20Thoughts%20on%20The%20Future%20of%20Programmable%20Money.&dates=20190623T170000Z/20190623T180000Z",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2019/6/23/andreas-m-antonopoulos-thoughts-on-the-future-of-programmable-money?format=ical",
  },
  {
    id: "mre-6",
    slug: "sidechains-on-btc-drivechain-and-blind-merged-mining-paul-sztorc",
    title: "Sidechains on BTC -- Drivechain and Blind Merged Mining - Paul Sztorc",
    date: "Thursday 6 June 2019",
    dateISO: "2019-06-06",
    day: "6",
    month: "Jun",
    time: "7:00 pm",
    time24: "19:00",
    endTime: "8:00 pm",
    endTime24: "20:00",
    location: "Karl der Grosse",
    locationUrl: "http://maps.google.com/?q=Karl%20der%20Grosse",
    description:
      "Drivechain is a proposed soft fork of Bitcoin that allows BTC to travel to and from any other piece of software. How does it work? Does it have any detrimental effects? Do we *want* some sidechains to fail (and why)?",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563353920029-FNNDW3H0SC8JXSK4953P/paul.jpg?format=500w",
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=Sidechains%20on%20BTC%20--%20Drivechain%20and%20Blind%20Merged%20Mining%20-%20Paul%20Sztorc&dates=20190606T170000Z/20190606T180000Z",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2019/6/6/sidechains-on-btc-drivechain-and-blind-merged-mining-paul-sztorc?format=ical",
  },
  {
    id: "mre-7",
    slug: "annual-general-assembly-of-the-bitcoin-association-switzerland-2019",
    title: "Annual General Assembly of the Bitcoin Association Switzerland - 2019",
    date: "Wednesday 22 May 2019",
    dateISO: "2019-05-22",
    day: "22",
    month: "May",
    time: "7:00 pm",
    time24: "19:00",
    endTime: "8:00 pm",
    endTime24: "20:00",
    location: "Volkshaus",
    locationUrl: "http://maps.google.com/?q=Volkshaus",
    description:
      "The members of the Bitcoin Association Switzerland came together to discuss and decide on various things.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563353801249-II3IT1HTUUTQO7E0WDSN/logo_with_name_next_to_it_big.png?format=500w",
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=Annual%20General%20Assembly%20of%20the%20Bitcoin%20Association%20Switzerland%20-%202019&dates=20190522T170000Z/20190522T180000Z",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2019/5/22/annual-general-assembly-of-the-bitcoin-association-switzerland-2019?format=ical",
  },
  {
    id: "mre-8",
    slug: "on-chain-defense-in-depth-dr-bob-mcelrath",
    title: "On-Chain Defense in Depth - Dr. Bob McElrath",
    date: "Friday 25 January 2019",
    dateISO: "2019-01-25",
    day: "25",
    month: "Jan",
    time: "7:00 pm",
    time24: "19:00",
    endTime: "8:00 pm",
    endTime24: "20:00",
    location: "Karl der Grosse",
    locationUrl: "http://maps.google.com/?q=Karl%20der%20Grosse",
    description:
      'In this tech-talk we examined all current and proposed mechanisms for creating a "Bitcoin Vault".',
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1555098023010-L99ESNM4E9YUE04P6595/dr.bob.jpeg?format=500w",
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=On-Chain%20Defense%20in%20Depth%20-%20Dr.%20Bob%20McElrath&dates=20190125T180000Z/20190125T190000Z",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2019/1/25/on-chain-defense-in-depth-dr-bob-mcelrath?format=ical",
  },
  {
    id: "mre-9",
    slug: "10-years-bitcoin-bitcoin-association-in-davos-during-wef",
    title: "10 Years Bitcoin - Bitcoin Association in Davos (during WEF)",
    date: "Tuesday 22 January 2019",
    dateISO: "2019-01-22",
    day: "22",
    month: "Jan",
    time: "2:00 pm",
    time24: "14:00",
    endTime: "3:00 pm",
    endTime24: "15:00",
    location: "Davos",
    locationUrl: "http://maps.google.com/?q=%20Davos",
    description:
      "The Bitcoin Association Switzerland hosted a 1 hour session in Davos, talking about Bitcoin, the past 10 years and its future.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1555097945124-YDELNBEU4JT5QNJP0Z1F/davos.jpg?format=500w",
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=10%20Years%20Bitcoin%20-%20Bitcoin%20Association%20in%20Davos%20%28during%20WEF%29&dates=20190122T130000Z/20190122T140000Z&location=Davos",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2019/1/22/10-years-bitcoin-bitcoin-association-in-davos-during-wef?format=ical",
  },
];

// Raw data from roadshow-2025
const roadshowEventsRaw = [
  {
    id: "rs-basel",
    slug: "bas-roadshow-basel",
    title: "BAS Roadshow - Basel",
    dateISO: "2025-09-21",
    dayOfWeek: "Sunday",
    day: "21",
    month: "Sept",
    startTime: "18:00",
    endTime: "22:30",
    startTimeDisplay: "6:00 pm",
    endTimeDisplay: "10:30 pm",
    description: [
      "The Bitcoin Association Switzerland invites you: Roadshow in Basel on September, 21, 2025",
      "Time: 18:00 22:30",
      "The Bitcoin Association Switzerland is launching its official Roadshow 2025, and the next stop will take place in the great city of Basel!",
    ],
    signupLink: "https://luma.com/7pewjjp3",
    href: "/roadshow-2025/2025/9/21/bas-roadshow-basel",
  },
  {
    id: "rs-lake-zurich",
    slug: "bas-roadshow-lake-zurich",
    title: "BAS Roadshow Lake Zurich",
    dateISO: "2025-03-21",
    dayOfWeek: "Friday",
    day: "21",
    month: "Mar",
    startTime: "18:30",
    endTime: "23:00",
    startTimeDisplay: "6:30 pm",
    endTimeDisplay: "11:00 pm",
    description: [
      "The Roadshow is coming to Lake Zurich!",
      "The Bitcoin Association Switzerland invites you to the next BAS Roadshow - this time on a boat in Rapperswil on March 21, 2025, starting at 6:30 PM.",
    ],
    signupLink: "https://lu.ma/pa1cmg9y",
    href: "/roadshow-2025/2025/3/21/bas-roadshow-lake-zurich",
  },
  {
    id: "rs-lausanne",
    slug: "bas-roadshow-lausanne",
    title: "BAS Roadshow - Lausanne",
    dateISO: "2025-02-21",
    dayOfWeek: "Friday",
    day: "21",
    month: "Feb",
    startTime: "18:00",
    endTime: "23:00",
    startTimeDisplay: "6:00 pm",
    endTimeDisplay: "11:00 pm",
    location: "Lausanne",
    mapLink: "http://maps.google.com/?q=%20Lausanne",
    description: [
      "The Bitcoin Association Switzerland invites you: Roadshow in Lausanne on February 21, 2025",
      "The Bitcoin Association Switzerland is launching its official Roadshow 2025, and the next stop will take place in the vibrant city of Lausanne!",
    ],
    signupLink: "https://lu.ma/t5cz4fos",
    href: "/roadshow-2025/2025/2/21/bas-roadshow-lausanne",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/6bb0f5c0-1021-4992-9b30-032a5cd98c92/BAS+Roadshow+2025.jpg",
  },
  {
    id: "rs-bern",
    slug: "bas-roadshow-bern",
    title: "BAS Roadshow - Bern",
    dateISO: "2025-01-21",
    dayOfWeek: "Tuesday",
    day: "21",
    month: "Jan",
    startTime: "18:00",
    endTime: "23:00",
    startTimeDisplay: "6:00 pm",
    endTimeDisplay: "11:00 pm",
    mapLink: "https://maps.app.goo.gl/4JqGTXYT8Xe3ZnbR8",
    description: [
      "The Bitcoin Association Switzerland invites you: Roadshow in Bern on January, 21, 2025",
      "Time: 18:00 23:00",
      "The Bitcoin Association Switzerland is launching its first official Roadshow 2025, and the first stop will take place in the capital - Bern!",
    ],
    signupLink: "https://luma.com/8tsyroom",
    href: "/roadshow-2025/2025/1/21/bas-roadshow-bern",
  },
];

function getDateInfo(dateISO: string): {
  dayOfWeek: string;
  dayOfMonth: string;
  monthShort: string;
  monthLong: string;
  year: number;
} {
  const date = new Date(dateISO + 'T12:00:00'); // Add time to avoid timezone issues
  return {
    dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'long' }),
    dayOfMonth: date.getDate().toString(),
    monthShort: date.toLocaleDateString('en-US', { month: 'short' }),
    monthLong: date.toLocaleDateString('en-US', { month: 'long' }),
    year: date.getFullYear(),
  };
}

function determineEventStatus(dateISO: string): 'upcoming' | 'past' {
  const eventDate = new Date(dateISO + 'T23:59:59');
  const today = new Date();
  return eventDate >= today ? 'upcoming' : 'past';
}

function truncateDescription(description: string, maxLength = 150): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength).trim() + '...';
}

// Transform most-recent-events to unified schema
const transformedMostRecentEvents: UnifiedEvent[] = mostRecentEventsRaw.map(event => {
  const dateInfo = getDateInfo(event.dateISO);
  const fullDescription = event.description;

  return {
    id: event.id,
    slug: event.slug,
    title: event.title,
    description: fullDescription,
    shortDescription: truncateDescription(fullDescription),
    dateISO: event.dateISO,
    startTime: event.time24,
    endTime: event.endTime24,
    startTimeDisplay: event.time,
    endTimeDisplay: event.endTime,
    dayOfWeek: dateInfo.dayOfWeek,
    dayOfMonth: dateInfo.dayOfMonth,
    monthShort: dateInfo.monthShort,
    monthLong: dateInfo.monthLong,
    year: dateInfo.year,
    location: event.location,
    locationUrl: event.locationUrl,
    imageUrl: event.image,
    href: `/most-recent-events/${event.slug}`,
    googleCalendarUrl: event.googleCalendarUrl,
    icsUrl: event.icsUrl,
    category: 'meetup',
    status: determineEventStatus(event.dateISO),
    source: 'most-recent-events',
    accentColor: CATEGORY_COLORS.meetup,
  };
});

// Transform roadshow events to unified schema
const transformedRoadshowEvents: UnifiedEvent[] = roadshowEventsRaw.map(event => {
  const dateInfo = getDateInfo(event.dateISO);
  const fullDescription = event.description.join('\n\n');

  // Generate Google Calendar URL (without Z suffix - times are local Swiss time, add ctz for timezone)
  const gcalUrl = `http://www.google.com/calendar/event?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.dateISO.replace(/-/g, "")}T${event.startTime.replace(":", "")}00/${event.dateISO.replace(/-/g, "")}T${event.endTime.replace(":", "")}00&ctz=Europe/Zurich`;

  return {
    id: event.id,
    slug: event.slug,
    title: event.title,
    description: fullDescription,
    shortDescription: truncateDescription(fullDescription),
    dateISO: event.dateISO,
    startTime: event.startTime,
    endTime: event.endTime,
    startTimeDisplay: event.startTimeDisplay,
    endTimeDisplay: event.endTimeDisplay,
    dayOfWeek: event.dayOfWeek,
    dayOfMonth: event.day,
    monthShort: event.month,
    monthLong: dateInfo.monthLong,
    year: dateInfo.year,
    location: event.location,
    locationUrl: event.mapLink,
    imageUrl: event.imageUrl,
    href: event.href,
    signupLink: event.signupLink,
    googleCalendarUrl: gcalUrl,
    icsUrl: `${event.href}?format=ical`,
    category: 'roadshow',
    status: determineEventStatus(event.dateISO),
    source: 'roadshow',
    accentColor: CATEGORY_COLORS.roadshow,
  };
});

// Combine all events
export const allEvents: UnifiedEvent[] = [
  ...transformedRoadshowEvents,
  ...transformedMostRecentEvents,
].sort((a, b) => b.dateISO.localeCompare(a.dateISO)); // Sort by date descending

// Filtered views
export const upcomingEvents = allEvents.filter(e => e.status === 'upcoming');
export const pastEvents = allEvents.filter(e => e.status === 'past');
export const roadshowEvents = allEvents.filter(e => e.category === 'roadshow');
export const meetupEvents = allEvents.filter(e => e.category === 'meetup');

// Helper to get events by category
export function getEventsByCategory(category: string): UnifiedEvent[] {
  if (category === 'all') return allEvents;
  return allEvents.filter(e => e.category === category);
}

// Helper to get event by ID
export function getEventById(id: string): UnifiedEvent | undefined {
  return allEvents.find(e => e.id === id);
}

// Helper to get event by slug
export function getEventBySlug(slug: string): UnifiedEvent | undefined {
  return allEvents.find(e => e.slug === slug);
}
