import { EventData } from "../../../../type";
import { EventDetails } from "./EventDetails";
import { ImageCover } from "./ImageCover";

export function EventCards({ event }: { event: EventData }) {
  return (<div>
    <ImageCover photo={event.photo} name={event.name} />
    <EventDetails event={event} />
  </div>)
}