import EventListings from "@/components/Events/EventListings";
import Nav from "@/components/NavBarComp/Nav";
import { getEvents } from "../../firebase/firestore";
import { EventData } from "../../type";


export default async function Home() {
  // const searchParams = useParams();
  const eventData = await getEvents();
  let arr: EventData[] = Object.values(eventData);



  return (
    <div className="flex flex-col  h-screen  bg-white">
      <Nav />

      <EventListings initialEvents={arr} />

      {/* TODO: will add searchParams to eventlistings for filtering events */}
    </div>
  );
}