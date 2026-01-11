import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface RoadshowEvent {
  id: string;
  title: string;
  date: string;
  dayOfWeek: string;
  day: string;
  month: string;
  startTime: string;
  endTime: string;
  startTime24: string;
  endTime24: string;
  location?: string;
  mapLink?: string;
  description: string[];
  signupLink: string;
  signupText: string;
  href: string;
  hasImage?: boolean;
  imageUrl?: string;
}

const roadshowEvents: RoadshowEvent[] = [
  {
    id: "basel",
    title: "BAS Roadshow - Basel",
    date: "2025-09-21",
    dayOfWeek: "Sunday",
    day: "21",
    month: "Sept",
    startTime: "6:30 pm",
    endTime: "10:30 pm",
    startTime24: "18:30",
    endTime24: "22:30",
    description: [
      "The Bitcoin Association Switzerland invites you: Roadshow in Basel on September, 21, 2025",
      "Time: 18:00 22:30",
      "The Bitcoin Association Switzerland is launching its official Roadshow 2025, and the next stop will take place in the great city of Basel!",
    ],
    signupLink: "https://luma.com/7pewjjp3",
    signupText: "Sign up for the roadshow event in Lausanne",
    href: "/roadshow-2025/2025/9/21/bas-roadshow-basel",
  },
  {
    id: "lake-zurich",
    title: "BAS Roadshow Lake Zurich",
    date: "2025-03-21",
    dayOfWeek: "Friday",
    day: "21",
    month: "Mar",
    startTime: "6:30 pm",
    endTime: "11:00 pm",
    startTime24: "18:30",
    endTime24: "23:00",
    description: [
      "The Roadshow is coming to Lake Zurich!",
      "The Bitcoin Association Switzerland invites you to the next BAS Roadshow - this time on a boat in Rapperswil on March 21, 2025, starting at 6:30 PM.",
    ],
    signupLink: "https://lu.ma/pa1cmg9y",
    signupText: "Sign up for the roadshow event in Lake Zurich",
    href: "/roadshow-2025/2025/3/21/bas-roadshow-lake-zurich",
  },
  {
    id: "lausanne",
    title: "BAS Roadshow - Lausanne",
    date: "2025-02-21",
    dayOfWeek: "Friday",
    day: "21",
    month: "Feb",
    startTime: "6:00 pm",
    endTime: "11:00 pm",
    startTime24: "18:00",
    endTime24: "23:00",
    location: "BAS Roadshow",
    mapLink: "http://maps.google.com/?q=%20Lausanne",
    description: [
      "The Bitcoin Association Switzerland invites you: Roadshow in Lausanne on February 21, 2025",
      "The Bitcoin Association Switzerland is launching its official Roadshow 2025, and the next stop will take place in the vibrant city of Lausanne!",
    ],
    signupLink: "https://lu.ma/t5cz4fos",
    signupText: "Sign up for the roadshow event in Lausanne",
    href: "/roadshow-2025/2025/2/21/bas-roadshow-lausanne",
    hasImage: true,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/6bb0f5c0-1021-4992-9b30-032a5cd98c92/BAS+Roadshow+2025.jpg",
  },
  {
    id: "bern",
    title: "BAS Roadshow - Bern",
    date: "2025-01-21",
    dayOfWeek: "Tuesday",
    day: "21",
    month: "Jan",
    startTime: "6:00 pm",
    endTime: "8:00 pm",
    startTime24: "18:00",
    endTime24: "20:00",
    mapLink: "https://maps.app.goo.gl/4JqGTXYT8Xe3ZnbR8",
    description: [
      "The Bitcoin Association Switzerland invites you: Roadshow in Bern on January, 21, 2025",
      "Time: 18:00 23:00",
      "The Bitcoin Association Switzerland is launching its first official Roadshow 2025, and the first stop will take place in the capital - Bern!",
    ],
    signupLink: "https://luma.com/8tsyroom",
    signupText: "Sign up for the roadshow event in Bern",
    href: "/roadshow-2025/2025/1/21/bas-roadshow-bern",
  },
];

function EventCard({ event }: { event: RoadshowEvent }) {
  return (
    <article className="flex gap-6 py-8">
      {/* Date Tag */}
      <Link href={event.href} className="flex-shrink-0">
        <div className="w-20 text-center">
          <div className="text-[#c75b4a] text-xs uppercase tracking-wider font-medium">
            {event.month}
          </div>
          <div className="text-[#c75b4a] text-3xl font-light">{event.day}</div>
          <div className="text-gray-400 text-xs mt-1">
            <span className="hidden sm:inline">{event.startTime}</span>
            <span className="sm:hidden">{event.startTime24}</span>
          </div>
        </div>
      </Link>

      {/* Event Info */}
      <div className="flex-1">
        {/* Title */}
        <h2 className="text-xl font-normal text-gray-900 mb-3">
          <Link
            href={event.href}
            className="hover:text-[#c75b4a] transition-colors"
          >
            {event.title}
          </Link>
        </h2>

        {/* Meta Info */}
        <ul className="text-xs text-gray-500 space-y-1 mb-4">
          <li>
            {event.dayOfWeek} {event.day}{" "}
            {new Date(event.date).toLocaleString("en-GB", { month: "long" })}{" "}
            {new Date(event.date).getFullYear()}
          </li>
          <li>
            <span className="hidden sm:inline">
              {event.startTime} - {event.endTime}
            </span>
            <span className="sm:hidden">
              {event.startTime24} - {event.endTime24}
            </span>
          </li>
          {event.location && (
            <li>
              {event.location}{" "}
              {event.mapLink && (
                <a
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c75b4a] hover:underline"
                >
                  (map)
                </a>
              )}
            </li>
          )}
          {!event.location && event.mapLink && (
            <li>
              Location:{" "}
              <a
                href={event.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c75b4a] hover:underline"
              >
                (map)
              </a>
            </li>
          )}
          <li className="flex gap-2 items-center">
            <a
              href={`http://www.google.com/calendar/event?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.date.replace(/-/g, "")}T${event.startTime24.replace(":", "")}00Z/${event.date.replace(/-/g, "")}T${event.endTime24.replace(":", "")}00Z`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c75b4a] hover:underline"
            >
              Google Calendar
            </a>
            <span className="text-gray-300">|</span>
            <a href={`${event.href}?format=ical`} className="text-[#c75b4a] hover:underline">
              ICS
            </a>
          </li>
        </ul>

        {/* Description */}
        <div className="text-sm text-gray-600 space-y-3 mb-4">
          {event.description.map((paragraph, index) => (
            <p key={index}>
              {index === 0 ? <strong>{paragraph}</strong> : paragraph}
            </p>
          ))}
          <p>
            <strong>{event.signupText}</strong>{" "}
            <a
              href={event.signupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c75b4a] hover:underline font-semibold"
            >
              here
            </a>
          </p>
          <p>
            <strong>Best regards,</strong>
            <br />
            The BAS Board
          </p>
        </div>

        {/* Roadshow Image (only for Lausanne event) */}
        {event.hasImage && event.imageUrl && (
          <div className="my-6">
            <Image
              src={event.imageUrl}
              alt="BAS Roadshow 2025"
              width={905}
              height={1280}
              className="max-w-full h-auto"
            />
          </div>
        )}

        {/* View Event Button */}
        <Button
          asChild
          variant="outline"
          className="text-xs uppercase tracking-wider border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-800 rounded-none px-6"
        >
          <Link href={event.href}>View Event &rarr;</Link>
        </Button>

        {/* Actions Row */}
        <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            0 Likes
          </span>
          <button className="flex items-center gap-1 hover:text-gray-600 transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            Share
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Roadshow2025Page() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Past Events Divider */}
          <Separator className="mb-0" />

          {/* Events List */}
          <div className="divide-y divide-gray-200">
            {roadshowEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
