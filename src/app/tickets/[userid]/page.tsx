import { getServerSession } from "next-auth";
import { getTickets } from "../../../../firebase/firestore";
import { TicketCard } from "../_component/ticketCard";

type Ticket = {
  id: string;
  name: string;
  user: string;
  date: string;
  time: string;
}

const Page = async () => {
  const session = await getServerSession();
  if (!session) return;
  const data = await getTickets(session.user.id);
  let tickets: Ticket[] = Object.values(data);

  return (<>
    <h1>Tickets</h1>
    <div className="flex flex-col justify-center items-center w-full">
      {tickets.map((item) => (
        <TicketCard
          key={item.id}
          name={item.name}
          user={item.user}
          date={item.date}
          time={item.time} />
      ))}
    </div>

  </>);
}

export default Page;