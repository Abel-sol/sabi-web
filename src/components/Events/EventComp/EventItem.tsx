import Link from "next/link";
import { EventData } from "../../../../type";
import { EventCards } from "./EventCards";

type itemtype = {
  event: EventData;
  className: string;
}

export function EventItem({ event, className }: itemtype) {

  return (
    <li className={`${className}`}>
      <Link href={`/events/${event.id}`}>
        <EventCards event={event} />
      </Link>
    </li>
  )
}