import Nav from "@/components/NavBarComp/Nav";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DollarSignIcon } from "lucide-react";
import Link from "next/link";
import { IoAdd } from "react-icons/io5";
import { getEvents } from "../../../../firebase/firestore";
import { EventData } from "../../../../type";
import Sidebar from "../_components/Sidebar";

const Page = async () => {
  const events = await getEvents();
  let eventArr: EventData[] = Object.values(events);

  async function addEvent() {

    const res = await fetch("/api/addEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (!res.ok) {
      return;
    }
  }
  return (<div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
    <Sidebar />
    <div className="flex flex-col">

      <Nav />
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <Card >
            <Link href="/admin/events/add" >
              <CardHeader className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Add Events
                </div>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                {/* <div className="text-sm text-gray-500 dark:text-gray-400">{event.date}</div> */}
                <IoAdd size={24} />
              </CardContent>
            </Link>
          </Card>
          {eventArr.map((event) => (
            <Card key={event.id}>
              <CardHeader className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{event.name}</div>
                <DollarSignIcon className="h-6 w-6 text-primary" />
              </CardHeader>
              <CardContent>
                {/* <div className="text-sm text-gray-500 dark:text-gray-400">{event.date}</div> */}
                <div className="text-3xl font-bold">{event.catagory}</div> {/* TODO: refactor typo to category */}
                <div className="text-3xl font-bold">${event.price}</div>
              </CardContent>
            </Card>
          ))}

        </div>
        <div className="border shadow-sm rounded-lg p-2">

        </div>
      </div>
    </div>

  </div>);
}

export default Page;