import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  day: string;
  month: string;
  time: string;
  endTime?: string;
  location?: string;
  locationUrl?: string;
  description: string;
  image: string;
  likes: number;
  googleCalendarUrl?: string;
  icsUrl?: string;
}

const events: Event[] = [
  {
    id: "1",
    slug: "regular-meetups",
    title: "Regular Meetups",
    date: "Friday 1 April 2022",
    day: "1",
    month: "Apr",
    time: "7:00 pm",
    endTime: "8:00 pm",
    description:
      "Every second Wednesday we meet in Zurich and every fourth Wednesday in Geneva. There are also Bitcoin meetups in other cities on a less regular schedule. Please contact us if you plan to start a meetup in your city and we will help you as good as we can!\n\nBesides our regular beer & Bitcoin meetups, we organize various events. You can find an overview of our past events for this year below.\n\nJoin us at meetup.com to sign up for our events!",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1555097535318-T2XJTHLGARGBMIHCZ5IK/regular_meetup.jpeg?format=500w",
    likes: 1,
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=Regular%20Meetups&dates=20220401T170000Z/20220401T180000Z",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2022/4/1/regular-meetups?format=ical",
  },
  {
    id: "2",
    slug: "lightning-meetup-with-elizabeth-stark-ceo-lightning-labs",
    title: "Lightning Meetup with Elizabeth Stark (CEO Lightning Labs)",
    date: "Monday 13 January 2020",
    day: "13",
    month: "Jan",
    time: "7:00 pm",
    endTime: "8:00 pm",
    location: "Langstrasse 136",
    locationUrl: "http://maps.google.com/?q=Langstrasse%20136",
    description:
      'At this "Industry Insights" meetup, Elizabeth will give us some interesting insights into the Lightning Network. Short talk, no slides, q&a, causal get-together.',
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1580830689343-1T2NDNX01ILN41SPXMLS/z.jpeg?format=500w",
    likes: 0,
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=Lightning%20Meetup%20with%20Elizabeth%20Stark%20%28CEO%20Lightning%20Labs%29&dates=20200113T180000Z/20200113T190000Z&location=Langstrasse%20136",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2020/1/13/lightning-meetup-with-elizabeth-stark-ceo-lightning-labs?format=ical",
  },
  {
    id: "3",
    slug: "bitcoin-christmas-meetup-zurich",
    title: "Bitcoin Christmas Meetup Zurich",
    date: "Wednesday 18 December 2019",
    day: "18",
    month: "Dec",
    time: "7:00 pm",
    endTime: "11:59 pm",
    location: "Langstrasse 136",
    locationUrl: "http://maps.google.com/?q=Langstrasse%20136",
    description:
      "Bitcoin Association Switzerland invited for a Christmas Special Bitcoin Meetup Zurich.\n\nDouglas Bakkum, Co-founder and CEO of Shift Cryptosecurity gave us some exciting insights into the industry's cat and mouse game of securing private keys",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1580830436549-5ANR19EWCG0LJC0LPBQL/highres_486983933.jpeg?format=500w",
    likes: 0,
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=Bitcoin%20Christmas%20Meetup%20Z%C3%BCrich&dates=20191218T180000Z/20191218T225900Z&location=Langstrasse%20136",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2020/2/4/bitcoin-christmas-meetup-zurich?format=ical",
  },
  {
    id: "4",
    slug: "who-needs-the-internet-anyway-taking-bitcoin-transactions-offline",
    title: "Who Needs the Internet Anyway: Taking Bitcoin Transactions Offline",
    date: "Tuesday 15 October 2019",
    day: "15",
    month: "Oct",
    time: "7:00 pm",
    endTime: "8:00 pm",
    location: "Karl der Grosse",
    locationUrl: "http://maps.google.com/?q=Karl%20der%20Grosse",
    description:
      "Bitcoin is considered to be currency of the internet. But what happens if someone has a poor internet connection, or loses it entirely? Neil takes a look at the technologies being built to keep Bitcoin running regardless of network disruptions, including Blockstream Satellite and goTenna mesh networks.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1580830028280-IM7APR9ZUNBI5YNURI4A/IMG_6354.jpeg?format=500w",
    likes: 0,
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=Who%20Needs%20the%20Internet%20Anyway%3A%20Taking%20Bitcoin%20Transactions%20Offline&dates=20191015T170000Z/20191015T180000Z",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2019/10/15/who-needs-the-internet-anyway-taking-bitcoin-transactions-offline?format=ical",
  },
  {
    id: "5",
    slug: "andreas-m-antonopoulos-thoughts-on-the-future-of-programmable-money",
    title:
      "Andreas M. Antonopoulos: Thoughts on The Future of Programmable Money.",
    date: "Sunday 23 June 2019",
    day: "23",
    month: "Jun",
    time: "7:00 pm",
    endTime: "8:00 pm",
    location: "Volkshaus",
    locationUrl: "http://maps.google.com/?q=Volkshaus",
    description:
      'With over 1\'500 signup this was the biggest Bitcoin meetup event ever in Europe.\n\nTalks:\n\nThoughts on The Future of Programmable Money - Andreas M. Antonopoulos\n\nAn enlightening speech about the future of programmable money ending with a standing ovation!\n\nA video of the speech can be found on YouTube.\n\nCryptoasset Inheritance Planning - Pamela Morgan\n\nWill your loved ones be able to access your bitcoin, ether, or other cryptoassets if something happens to you? For most cryptoasset owners, the answer is no. Attend this talk and learn how to start building a cryptoasset inheritance plan for your loved ones, without relying on a single third party, and without giving them your keys now.',
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354131936-O9QJ0IL9KE0GRA33IFGE/1.jpg?format=500w",
    likes: 1,
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=Andreas%20M.%20Antonopoulos%3A%20Thoughts%20on%20The%20Future%20of%20Programmable%20Money.&dates=20190623T170000Z/20190623T180000Z",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2019/6/23/andreas-m-antonopoulos-thoughts-on-the-future-of-programmable-money?format=ical",
  },
  {
    id: "6",
    slug: "sidechains-on-btc-drivechain-and-blind-merged-mining-paul-sztorc",
    title: "Sidechains on BTC -- Drivechain and Blind Merged Mining - Paul Sztorc",
    date: "Thursday 6 June 2019",
    day: "6",
    month: "Jun",
    time: "7:00 pm",
    endTime: "8:00 pm",
    location: "Karl der Grosse",
    locationUrl: "http://maps.google.com/?q=Karl%20der%20Grosse",
    description:
      "Drivechain is a proposed soft fork of Bitcoin that allows BTC to travel to and from any other piece of software. How does it work? Does it have any detrimental effects? Do we *want* some sidechains to fail (and why)?",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563353920029-FNNDW3H0SC8JXSK4953P/paul.jpg?format=500w",
    likes: 1,
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=Sidechains%20on%20BTC%20--%20Drivechain%20and%20Blind%20Merged%20Mining%20-%20Paul%20Sztorc&dates=20190606T170000Z/20190606T180000Z",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2019/6/6/sidechains-on-btc-drivechain-and-blind-merged-mining-paul-sztorc?format=ical",
  },
  {
    id: "7",
    slug: "annual-general-assembly-of-the-bitcoin-association-switzerland-2019",
    title: "Annual General Assembly of the Bitcoin Association Switzerland - 2019",
    date: "Wednesday 22 May 2019",
    day: "22",
    month: "May",
    time: "7:00 pm",
    endTime: "8:00 pm",
    location: "Volkshaus",
    locationUrl: "http://maps.google.com/?q=Volkshaus",
    description:
      "The members of the Bitcoin Association Switzerland came together to discuss and decide on various things.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563353801249-II3IT1HTUUTQO7E0WDSN/logo_with_name_next_to_it_big.png?format=500w",
    likes: 1,
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=Annual%20General%20Assembly%20of%20the%20Bitcoin%20Association%20Switzerland%20-%202019&dates=20190522T170000Z/20190522T180000Z",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2019/5/22/annual-general-assembly-of-the-bitcoin-association-switzerland-2019?format=ical",
  },
  {
    id: "8",
    slug: "on-chain-defense-in-depth-dr-bob-mcelrath",
    title: "On-Chain Defense in Depth - Dr. Bob McElrath",
    date: "Friday 25 January 2019",
    day: "25",
    month: "Jan",
    time: "7:00 pm",
    endTime: "8:00 pm",
    location: "Karl der Grosse",
    locationUrl: "http://maps.google.com/?q=Karl%20der%20Grosse",
    description:
      'In this tech-talk we examined all current and proposed mechanisms for creating a "Bitcoin Vault".',
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1555098023010-L99ESNM4E9YUE04P6595/dr.bob.jpeg?format=500w",
    likes: 1,
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=On-Chain%20Defense%20in%20Depth%20-%20Dr.%20Bob%20McElrath&dates=20190125T180000Z/20190125T190000Z",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2019/1/25/on-chain-defense-in-depth-dr-bob-mcelrath?format=ical",
  },
  {
    id: "9",
    slug: "10-years-bitcoin-bitcoin-association-in-davos-during-wef",
    title: "10 Years Bitcoin - Bitcoin Association in Davos (during WEF)",
    date: "Tuesday 22 January 2019",
    day: "22",
    month: "Jan",
    time: "2:00 pm",
    endTime: "3:00 pm",
    location: "Davos",
    locationUrl: "http://maps.google.com/?q=%20Davos",
    description:
      "The Bitcoin Association Switzerland hosted a 1 hour session in Davos, talking about Bitcoin, the past 10 years and its future.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1555097945124-YDELNBEU4JT5QNJP0Z1F/davos.jpg?format=500w",
    likes: 1,
    googleCalendarUrl:
      "http://www.google.com/calendar/event?action=TEMPLATE&text=10%20Years%20Bitcoin%20-%20Bitcoin%20Association%20in%20Davos%20%28during%20WEF%29&dates=20190122T130000Z/20190122T140000Z&location=Davos",
    icsUrl:
      "https://www.bitcoinassociation.ch/most-recent-events/2019/1/22/10-years-bitcoin-bitcoin-association-in-davos-during-wef?format=ical",
  },
];

function EventCard({ event }: { event: Event }) {
  return (
    <article className="flex flex-col md:flex-row gap-0 py-10 border-b border-gray-200 last:border-b-0">
      {/* Thumbnail Image */}
      <Link
        href={`/most-recent-events/${event.slug}`}
        className="flex-shrink-0 w-full md:w-[200px] h-[150px] relative overflow-hidden bg-gray-100"
      >
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </Link>

      {/* Date Badge */}
      <Link
        href={`/most-recent-events/${event.slug}`}
        className="hidden md:flex flex-col items-center justify-start flex-shrink-0 w-[80px] pt-1"
      >
        <div className="text-center">
          <div className="text-[#c75b4a] text-[11px] uppercase tracking-wider font-normal">
            {event.month}
          </div>
          <div className="text-[#c75b4a] text-[32px] font-light leading-tight">{event.day}</div>
          <div className="text-gray-500 text-[11px] mt-0.5">{event.time}</div>
        </div>
      </Link>

      {/* Event Info */}
      <div className="flex-1 pt-0 md:pt-0 mt-4 md:mt-0">
        {/* Title */}
        <h1 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
          <Link
            href={`/most-recent-events/${event.slug}`}
            className="hover:text-[#c75b4a] transition-colors"
          >
            {event.title}
          </Link>
        </h1>

        {/* Meta Info */}
        <ul className="text-[13px] text-gray-500 space-y-0.5 mb-3">
          <li>{event.date}</li>
          <li>
            {event.time}
            {event.endTime && ` - ${event.endTime}`}
          </li>
          {event.location && (
            <li>
              {event.locationUrl ? (
                <>
                  {event.location}{" "}
                  <a
                    href={event.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c75b4a] hover:underline"
                  >
                    (map)
                  </a>
                </>
              ) : (
                event.location
              )}
            </li>
          )}
          <li className="flex items-center gap-1">
            {event.googleCalendarUrl && (
              <a
                href={event.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                Google Calendar
              </a>
            )}
            {event.googleCalendarUrl && event.icsUrl && (
              <span className="text-gray-300 mx-1">|</span>
            )}
            {event.icsUrl && (
              <a
                href={event.icsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                ICS
              </a>
            )}
          </li>
        </ul>

        {/* Description */}
        <div className="text-[13px] text-gray-600 mb-3 whitespace-pre-line line-clamp-4 leading-relaxed">
          {event.description}
        </div>

        {/* View Event Button */}
        <Link
          href={`/most-recent-events/${event.slug}`}
          className="inline-block text-[13px] text-[#c75b4a] border border-[#c75b4a] px-4 py-2 hover:bg-[#c75b4a] hover:text-white transition-colors mb-4"
        >
          View Event &rarr;
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-4 text-[13px] text-gray-500">
          <button className="flex items-center gap-1.5 hover:text-gray-700 transition-colors">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
            </svg>
            Share
          </button>
        </div>
      </div>
    </article>
  );
}

export default function MostRecentEventsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Separator line at top - dark gray line like original */}
          <Separator className="bg-gray-300 mb-0" />

          {/* Events List */}
          <div>
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </main>

      <FooterSimple />
    </div>
  );
}
