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
    <div>
      <ul className="grid grid-cols-3 gap-[40px]">

        {events.map((event: EventData) => (
          <EventItem key={event.id}
            event={event}
            className={"bg-white min-w-[300px] mt-[20px] "} />
        ))}

      </ul>
    </div>);
}

export default EventListings