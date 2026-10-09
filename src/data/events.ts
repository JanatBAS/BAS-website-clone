import { UnifiedEvent, EventCategory, CATEGORY_COLORS } from '@/types/calendar';
import { formatTimeDisplay, getDateInfo, truncateDescription } from '@/lib/date-utils';
import { googleCalendarUrl } from '@/lib/ics';
import { SITE_URL } from '@/lib/site';

/** Event lists with an index page and earlier/later links between their events. */
export type EventSeries = 'most-recent-events' | 'roadshow-2025';

/**
 * Values an event's own page shows where they differ from the index and
 * calendar values. They are kept exactly as published on the original site.
 */
export interface EventPageOverrides {
  title?: string;
  /** Time line shown instead of the one built from `startTime`/`endTime`. */
  time?: string;
  location?: string;
  /** `null` hides the map link. */
  locationUrl?: string | null;
}

/** An event with its own page under /most-recent-events or /roadshow-2025. */
export interface EventRecord {
  id: string;
  slug: string;
  /** Path of the event's own page (its date segments can differ from `dateISO`). */
  href: string;
  /** Listed on that series' index page and linked from its neighbours. */
  series?: EventSeries;
  /** False for entries that are not a single dated event; they stay out of the calendar. */
  inCalendar: boolean;
  category: EventCategory;
  title: string;
  dateISO: string;
  /** 24-hour Swiss local time. */
  startTime: string;
  endTime?: string;
  /** Short month name, when it differs from the one derived from `dateISO`. */
  monthShort?: string;
  location?: string;
  /** Venue name shown before the location. */
  venue?: string;
  locationUrl?: string;
  imageUrl?: string;
  /** Summary for the index pages and the calendar; paragraphs are separated by blank lines. */
  description: string;
  signupLink?: string;
  /** Text before the sign-up link on the roadshow index. */
  signupText?: string;
  page?: EventPageOverrides;
}

const basMembersMeetupDescription = [
  "Dear BAS members,",
  "",
  "We have decided resp. voted to host a series of member meetups alongside selected Bitcoin conferences this year.",
  "",
  "Our first stop will be at the Swiss Bitcoin Conference in Kreuzlingen.",
  "",
  "We would like to invite you to a simple member get-together:",
  "",
  "Date: Saturday, 25 April 2026",
  "Time: from 17:00",
  "Location: Kreuzlingen (at the conference venue - exact spot to be shared)",
  "",
  "This will be an informal meetup to connect with fellow members, exchange ideas, and spend some time together during the conference.",
  "",
  "Save the date and feel free to join us if you are attending.",
  "",
  "Registration (required for catering planning): https://www.meetup.com/de-de/bitcoin-meetup-switzerland/events/314034144/",
  "",
  "Conference information: https://swiss-bitcoin-conference.com/",
  "",
  "Looking forward to seeing many of you there.",
  "",
  "Lisa",
  "on behalf of the BAS Board",
].join("\n");

const eventRecords: EventRecord[] = [
  // Most recent events (newest first)
  {
    id: "mre-1",
    slug: "regular-meetups",
    href: "/most-recent-events/2022/4/1/regular-meetups",
    series: "most-recent-events",
    inCalendar: false,
    category: "meetup",
    title: "Regular Meetups",
    dateISO: "2022-04-01",
    startTime: "19:00",
    endTime: "20:00",
    description:
      "Every second Wednesday we meet in Zurich and every fourth Wednesday in Geneva. There are also Bitcoin meetups in other cities on a less regular schedule. Please contact us if you plan to start a meetup in your city and we will help you as good as we can!\n\nBesides our regular beer & Bitcoin meetups, we organize various events. You can find an overview of our past events for this year below.\n\nJoin us at meetup.com to sign up for our events!",
    imageUrl: "/images/events/regular-meetup.jpeg",
  },
  {
    id: "mre-2",
    slug: "lightning-meetup-with-elizabeth-stark-ceo-lightning-labs",
    href: "/most-recent-events/2020/1/13/lightning-meetup-with-elizabeth-stark-ceo-lightning-labs",
    series: "most-recent-events",
    inCalendar: true,
    category: "meetup",
    title: "Lightning Meetup with Elizabeth Stark (CEO Lightning Labs)",
    dateISO: "2020-01-13",
    startTime: "19:00",
    endTime: "20:00",
    location: "Langstrasse 136",
    locationUrl: "http://maps.google.com/?q=Langstrasse%20136",
    description:
      'At this "Industry Insights" meetup, Elizabeth will give us some interesting insights into the Lightning Network. Short talk, no slides, q&a, causal get-together.',
    imageUrl: "/images/events/elizabeth-stark-meetup.jpeg",
  },
  {
    id: "mre-3",
    slug: "bitcoin-christmas-meetup-zurich",
    href: "/most-recent-events/2020/2/4/bitcoin-christmas-meetup-zurich",
    series: "most-recent-events",
    inCalendar: true,
    category: "meetup",
    title: "Bitcoin Christmas Meetup Zurich",
    dateISO: "2019-12-18",
    startTime: "19:00",
    endTime: "23:59",
    location: "Langstrasse 136",
    locationUrl: "http://maps.google.com/?q=Langstrasse%20136",
    description:
      "Bitcoin Association Switzerland invited for a Christmas Special Bitcoin Meetup Zurich.\n\nDouglas Bakkum, Co-founder and CEO of Shift Cryptosecurity gave us some exciting insights into the industry's cat and mouse game of securing private keys",
    imageUrl: "/images/events/lightning-meetup.jpeg",
    page: { title: "Bitcoin Christmas Meetup Zürich" },
  },
  {
    id: "mre-4",
    slug: "who-needs-the-internet-anyway-taking-bitcoin-transactions-offline",
    href: "/most-recent-events/2019/10/15/who-needs-the-internet-anyway-taking-bitcoin-transactions-offline",
    series: "most-recent-events",
    inCalendar: true,
    category: "meetup",
    title: "Who Needs the Internet Anyway: Taking Bitcoin Transactions Offline",
    dateISO: "2019-10-15",
    startTime: "19:00",
    endTime: "20:00",
    location: "Karl der Grosse",
    locationUrl: "http://maps.google.com/?q=Karl%20der%20Grosse",
    description:
      "Bitcoin is considered to be currency of the internet. But what happens if someone has a poor internet connection, or loses it entirely? Neil takes a look at the technologies being built to keep Bitcoin running regardless of network disruptions, including Blockstream Satellite and goTenna mesh networks.",
    imageUrl: "/images/events/christmas-meetup.jpeg",
  },
  {
    id: "mre-5",
    slug: "andreas-m-antonopoulos-thoughts-on-the-future-of-programmable-money",
    href: "/most-recent-events/2019/6/23/andreas-m-antonopoulos-thoughts-on-the-future-of-programmable-money",
    series: "most-recent-events",
    inCalendar: true,
    category: "meetup",
    title:
      "Andreas M. Antonopoulos: Thoughts on The Future of Programmable Money.",
    dateISO: "2019-06-23",
    startTime: "19:00",
    endTime: "20:00",
    location: "Volkshaus",
    locationUrl: "http://maps.google.com/?q=Volkshaus",
    description:
      'With over 1\'500 signup this was the biggest Bitcoin meetup event ever in Europe.\n\nTalks:\n\nThoughts on The Future of Programmable Money - Andreas M. Antonopoulos\n\nAn enlightening speech about the future of programmable money ending with a standing ovation!\n\nA video of the speech can be found on YouTube.\n\nCryptoasset Inheritance Planning - Pamela Morgan\n\nWill your loved ones be able to access your bitcoin, ether, or other cryptoassets if something happens to you? For most cryptoasset owners, the answer is no. Attend this talk and learn how to start building a cryptoasset inheritance plan for your loved ones, without relying on a single third party, and without giving them your keys now.',
    imageUrl: "/images/events/antonopoulos-talk.jpg",
  },
  {
    id: "mre-6",
    slug: "sidechains-on-btc-drivechain-and-blind-merged-mining-paul-sztorc",
    href: "/most-recent-events/2019/6/6/sidechains-on-btc-drivechain-and-blind-merged-mining-paul-sztorc",
    series: "most-recent-events",
    inCalendar: true,
    category: "meetup",
    title: "Sidechains on BTC -- Drivechain and Blind Merged Mining - Paul Sztorc",
    dateISO: "2019-06-06",
    startTime: "19:00",
    endTime: "20:00",
    location: "Karl der Grosse",
    locationUrl: "http://maps.google.com/?q=Karl%20der%20Grosse",
    description:
      "Drivechain is a proposed soft fork of Bitcoin that allows BTC to travel to and from any other piece of software. How does it work? Does it have any detrimental effects? Do we *want* some sidechains to fail (and why)?",
    imageUrl: "/images/events/paul-sztorc.jpg",
  },
  {
    id: "mre-7",
    slug: "annual-general-assembly-of-the-bitcoin-association-switzerland-2019",
    href: "/most-recent-events/2019/5/22/annual-general-assembly-of-the-bitcoin-association-switzerland-2019",
    series: "most-recent-events",
    inCalendar: true,
    category: "meetup",
    title: "Annual General Assembly of the Bitcoin Association Switzerland - 2019",
    dateISO: "2019-05-22",
    startTime: "19:00",
    endTime: "20:00",
    location: "Volkshaus",
    locationUrl: "http://maps.google.com/?q=Volkshaus",
    description:
      "The members of the Bitcoin Association Switzerland came together to discuss and decide on various things.",
    imageUrl: "/images/branding/logo-with-name-large.png",
  },
  {
    id: "mre-8",
    slug: "on-chain-defense-in-depth-dr-bob-mcelrath",
    href: "/most-recent-events/2019/1/25/on-chain-defense-in-depth-dr-bob-mcelrath",
    series: "most-recent-events",
    inCalendar: true,
    category: "meetup",
    title: "On-Chain Defense in Depth - Dr. Bob McElrath",
    dateISO: "2019-01-25",
    startTime: "19:00",
    endTime: "20:00",
    location: "Karl der Grosse",
    locationUrl: "http://maps.google.com/?q=Karl%20der%20Grosse",
    description:
      'In this tech-talk we examined all current and proposed mechanisms for creating a "Bitcoin Vault".',
    imageUrl: "/images/events/bob-mcelrath-talk.jpeg",
  },
  {
    id: "mre-9",
    slug: "10-years-bitcoin-bitcoin-association-in-davos-during-wef",
    href: "/most-recent-events/2019/1/22/10-years-bitcoin-bitcoin-association-in-davos-during-wef",
    series: "most-recent-events",
    inCalendar: true,
    category: "meetup",
    title: "10 Years Bitcoin - Bitcoin Association in Davos (during WEF)",
    dateISO: "2019-01-22",
    startTime: "14:00",
    endTime: "15:00",
    location: "Davos",
    locationUrl: "http://maps.google.com/?q=%20Davos",
    description:
      "The Bitcoin Association Switzerland hosted a 1 hour session in Davos, talking about Bitcoin, the past 10 years and its future.",
    imageUrl: "/images/events/davos.jpg",
    page: { locationUrl: "http://maps.google.com/?q=Davos" },
  },

  // Standalone member meetup (not part of the past-events list)
  {
    id: "bas-members-meetup-kreuzlingen-2026",
    slug: "bas-members-meetup-swiss-bitcoin-conference",
    href: "/most-recent-events/2026/4/25/bas-members-meetup-swiss-bitcoin-conference",
    inCalendar: true,
    category: "meetup",
    title: "BAS Members Meetup at the Swiss Bitcoin Conference",
    dateISO: "2026-04-25",
    startTime: "17:00",
    location: "Kreuzlingen (conference venue, exact spot to be shared)",
    locationUrl: "https://maps.google.com/?q=Kreuzlingen,+Switzerland",
    description: basMembersMeetupDescription,
    imageUrl: "/images/branding/bas-people.jpg",
    signupLink:
      "https://www.meetup.com/de-de/bitcoin-meetup-switzerland/events/314034144/",
    page: {
      location: "Kreuzlingen, conference venue",
      locationUrl: null,
    },
  },

  // Roadshow 2025 (newest first)
  {
    id: "rs-basel",
    slug: "bas-roadshow-basel",
    href: "/roadshow-2025/2025/9/21/bas-roadshow-basel",
    series: "roadshow-2025",
    inCalendar: true,
    category: "conference",
    title: "BAS Roadshow - Basel",
    dateISO: "2025-09-21",
    startTime: "18:00",
    endTime: "22:30",
    monthShort: "Sept",
    description: [
      "The Bitcoin Association Switzerland invites you: Roadshow in Basel on September, 21, 2025",
      "Time: 18:00 22:30",
      "The Bitcoin Association Switzerland is launching its official Roadshow 2025, and the next stop will take place in the great city of Basel!",
    ].join("\n\n"),
    signupLink: "https://luma.com/7pewjjp3",
    signupText: "Sign up for the roadshow event in Lausanne",
    page: {
      title: "BAS Roadshow – Basel",
      time: "18:30 – 22:30",
    },
  },
  {
    id: "rs-lake-zurich",
    slug: "bas-roadshow-lake-zurich",
    href: "/roadshow-2025/2025/3/21/bas-roadshow-lake-zurich",
    series: "roadshow-2025",
    inCalendar: true,
    category: "conference",
    title: "BAS Roadshow Lake Zurich",
    dateISO: "2025-03-21",
    startTime: "18:30",
    endTime: "23:00",
    description: [
      "The Roadshow is coming to Lake Zurich!",
      "The Bitcoin Association Switzerland invites you to the next BAS Roadshow - this time on a boat in Rapperswil on March 21, 2025, starting at 6:30 PM.",
    ].join("\n\n"),
    signupLink: "https://lu.ma/pa1cmg9y",
    signupText: "Sign up for the roadshow event in Lake Zurich",
    page: {
    },
  },
  {
    id: "rs-lausanne",
    slug: "bas-roadshow-lausanne",
    href: "/roadshow-2025/2025/2/21/bas-roadshow-lausanne",
    series: "roadshow-2025",
    inCalendar: true,
    category: "conference",
    title: "BAS Roadshow - Lausanne",
    dateISO: "2025-02-21",
    startTime: "18:00",
    endTime: "23:00",
    location: "Lausanne",
    venue: "BAS Roadshow",
    locationUrl: "http://maps.google.com/?q=%20Lausanne",
    imageUrl: "/images/branding/bas-roadshow-2025.jpg",
    description: [
      "The Bitcoin Association Switzerland invites you: Roadshow in Lausanne on February 21, 2025",
      "The Bitcoin Association Switzerland is launching its official Roadshow 2025, and the next stop will take place in the vibrant city of Lausanne!",
    ].join("\n\n"),
    signupLink: "https://lu.ma/t5cz4fos",
    signupText: "Sign up for the roadshow event in Lausanne",
    page: {
      title: "BAS Roadshow – Lausanne",
    },
  },
  {
    id: "rs-bern",
    slug: "bas-roadshow-bern",
    href: "/roadshow-2025/2025/1/21/bas-roadshow-bern",
    series: "roadshow-2025",
    inCalendar: true,
    category: "conference",
    title: "BAS Roadshow - Bern",
    dateISO: "2025-01-21",
    startTime: "18:00",
    endTime: "23:00",
    locationUrl: "https://maps.app.goo.gl/4JqGTXYT8Xe3ZnbR8",
    description: [
      "The Bitcoin Association Switzerland invites you: Roadshow in Bern on January, 21, 2025",
      "Time: 18:00 23:00",
      "The Bitcoin Association Switzerland is launching its first official Roadshow 2025, and the first stop will take place in the capital - Bern!",
    ].join("\n\n"),
    signupLink: "https://luma.com/8tsyroom",
    signupText: "Sign up for the roadshow event in Bern",
    page: {
      title: "BAS Roadshow – Bern",
      time: "18:00 – 20:00",
    },
  },
];

/** Returns the event with the given slug; throws at build time for an unknown slug. */
/** Every event that has its own page. */
export function getEventPages(): EventRecord[] {
  return eventRecords;
}

export function getEvent(slug: string): EventRecord {
  const event = eventRecords.find(e => e.slug === slug);
  if (!event) throw new Error(`Unknown event slug: ${slug}`);
  return event;
}

/** Events of a series, newest first. */
export function getSeriesEvents(series: EventSeries): EventRecord[] {
  return eventRecords
    .filter(e => e.series === series)
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO));
}

/** The previous and next event of the same series, by date. */
export function getAdjacentEvents(event: EventRecord): { earlier?: EventRecord; later?: EventRecord } {
  if (!event.series) return {};
  const events = getSeriesEvents(event.series);
  const index = events.findIndex(e => e.slug === event.slug);
  return { later: events[index - 1], earlier: events[index + 1] };
}

/** Absolute URL of the event's own page. */
export function getEventUrl(event: EventRecord): string {
  return `${SITE_URL}${event.href}`;
}

/** Title shown on the event's own page and in links to it. */
export function getPageTitle(event: EventRecord): string {
  return event.page?.title ?? event.title;
}

/** Google Calendar link built from the event's Swiss local times. */
export function getGoogleCalendarUrl(event: EventRecord): string {
  return googleCalendarUrl({
    uid: event.id,
    title: event.title,
    dateISO: event.dateISO,
    startTime: event.startTime,
    endTime: event.endTime,
    location: event.location,
    url: event.signupLink ?? getEventUrl(event),
  });
}

function toUnifiedEvent(event: EventRecord): UnifiedEvent {
  const dateInfo = getDateInfo(event.dateISO);

  return {
    id: event.id,
    slug: event.slug,
    title: event.title,
    description: event.description,
    shortDescription: truncateDescription(event.description),
    dateISO: event.dateISO,
    startTime: event.startTime,
    endTime: event.endTime,
    startTimeDisplay: formatTimeDisplay(event.startTime),
    endTimeDisplay: event.endTime ? formatTimeDisplay(event.endTime) : undefined,
    dayOfWeek: dateInfo.dayOfWeek,
    dayOfMonth: dateInfo.dayOfMonth,
    monthShort: event.monthShort ?? dateInfo.monthShort,
    monthLong: dateInfo.monthLong,
    year: dateInfo.year,
    location: event.location,
    locationUrl: event.locationUrl,
    imageUrl: event.imageUrl,
    href: event.href,
    signupLink: event.signupLink,
    googleCalendarUrl: getGoogleCalendarUrl(event),
    category: event.category,
    source: 'most-recent-events',
    accentColor: CATEGORY_COLORS[event.category],
  };
}

// All calendar events, newest first
export const allEvents: UnifiedEvent[] = eventRecords
  .filter(e => e.inCalendar)
  .map(toUnifiedEvent)
  .sort((a, b) => b.dateISO.localeCompare(a.dateISO));
