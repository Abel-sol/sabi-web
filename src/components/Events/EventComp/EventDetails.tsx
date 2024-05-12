import { EventData } from "../../../../type";
import { EventDatas } from "./EventDatas";

type detailsprops = {
  event: EventData
}
export const EventDetails = ({ event }: detailsprops) => (
  <div className="p-[20px]">
    <h2 className="font-bold">{event.name}</h2>
    <EventDatas category={event.category} time={event.time} price={event.price} />
  </div>
);