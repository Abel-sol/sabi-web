import { EventData } from "../../../../type";
import { EventDatas } from "./EventDatas";

type detailsprops = {
  event: EventData
}
export const EventDetails = ({ event }: detailsprops) => (
  <div className="p-[20px]">
    <h2 className="font-bold">{event.name}</h2>
    <EventDatas category={event.category} location={event.location} price={event.price} />
  </div>
);