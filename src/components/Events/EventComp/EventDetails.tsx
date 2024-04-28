import { EventData } from "../../../../type";
import { EventDatas } from "./EventDatas";

type detailsprops = {
  event: EventData
}
export const EventDetails = ({ event }: detailsprops) => (
  <div className="p-[20px]">
    <h2>{event.name}</h2>
    <EventDatas catagory={event.catagory} city={event.city} price={event.price} />
  </div>
);