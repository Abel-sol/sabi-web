import Event from '@/components/Events/Event';
import { redirect } from 'next/navigation';
import { getEvents } from '../../../firebase/firestore';
import { EventData } from '../../../type';



const Page = async ({ params }: { params: { eventId: string } }) => {
  const data = await getEvents();
  let event: EventData[] = [];
  let ev;
  if (data) {
    event = Object.values(data);
    for (let i = 0; i < event.length; i++) {
      if (event[i].id === params.eventId) {
        ev = event[i];
        break;
      }
    }
  }
  if (!event.length || !data || !ev) {
    redirect("/");
  }

  return (
    <div>
      <Event
        eventData={ev} />
    </div>);
}

export default Page;