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
            className={"w-72 bg-white shadow-md  rounded-xl duration-500 hover:scale-100 hover:shadow-xl hover:shadow-indigo-400"} />
        ))}

      </ul>
    </div>);
}

export default EventListings