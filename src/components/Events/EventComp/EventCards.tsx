import { EventData } from "../../../../type";
import { EventDetails } from "./EventDetails";
import { ImageCover } from "./ImageCover";

export function EventCards({ event }: { event: EventData }) {
  return (<div>
    <ImageCover image={event.image} name={event.name} />
    <EventDetails event={event} />
  </div>)
}