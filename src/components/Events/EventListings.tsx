"use client"
import Link from "next/link";
import { useState } from "react";

type ev = {
  id: string;
  photo: string;
  name: string;
  location: string;
  city: string;
  category: string;
}

function EventListings({ initialEvents }: any) {
  const [events, setEvent] = useState(initialEvents);

  return (
    <div>
      <ul className="grid grid-cols-3 gap-[40px]">
        {events.map((event: ev) => (

          <EventItem key={event.id} events={event} className={"bg-white min-w-[300px] mt-[20px] "} />
        ))}
      </ul>
    </div>);
}

export default EventListings;


function EventItem({ event, className }: any) {

  return (
    <li className={`${className}`}>
      <Link href={`/events/${event.id}`}>
        <ActiveEvents event={event} />
      </Link>
    </li>
  )
}

function ActiveEvents({ event }: any) {
  return (<div>
    <ImageCover photo={event.photo} name={event.name} />
    <EventDetails event={event} />
  </div>)
}

const ImageCover = ({ photo, name }: any) => (
  <div className="w-full h-full object-cover max-h-[300px] min-h-[300px] relative">
    <img src={photo} alt={name} className="w-full h-full absolute object-cover" />
  </div>
);

const EventDetails = ({ event }: any) => (
  <div className="p-[20px]">
    <h2>{event.name}</h2>
    <EventMetadata event={event} />
  </div>
);

const EventMetadata = ({ event }: any) => (
  <div className="font-semibold text-black flex align-center justify-between">
    <p>
      {event.category} | {event.city}
    </p>
    <p>{"$".repeat(event.price)}</p>
  </div>
);