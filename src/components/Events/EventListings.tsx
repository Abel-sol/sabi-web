"use client"
import { useState } from "react";
import { EventData } from '../../../type';
import { EventItem } from "./EventComp/EventItem";

type props = {
  initialEvents: EventData[];
}

function EventListings({ initialEvents }: props) {

  const [events, setEvent] = useState(initialEvents);
  // console.log(events);
  return (
    <div >
      <ul className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

        {events.map((event: EventData) => (
          <EventItem key={event.id}
            event={event}
            className={"w-80 bg-slate-100 shadow-md  rounded-xl duration-500 hover:scale-105 hover:shadow-xl"} />
        ))}

      </ul>
    </div>);
}

export default EventListings