import { icsDataUrl, icsFileName } from "@/lib/ics";
import { getEventUrl, type EventRecord } from "@/data/events";

interface IcsLinkProps {
  event: EventRecord;
  className?: string;
}

/** Downloads the event as an .ics file built at render time. */
export default function IcsLink({ event, className }: IcsLinkProps) {
  const href = icsDataUrl({
    uid: event.id,
    title: event.title,
    dateISO: event.dateISO,
    startTime: event.startTime,
    endTime: event.endTime,
    location: event.location,
    description: event.description,
    url: getEventUrl(event),
  });

  return (
    <a href={href} download={icsFileName(event.slug)} className={className}>
      ICS
    </a>
  );
}
