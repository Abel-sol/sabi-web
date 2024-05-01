"use client"
import { useRouter } from "next/navigation";
import { EventData } from '../../../type';
import { Button } from "../ui/button";

type props = {
  eventData: EventData
}
const Event = ({ eventData }: props) => {
  const router = useRouter();
  if (!eventData) router.push("/");
  console.log(eventData);
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-0">
      <div className="flex flex-col gap-4">
        <img
          alt="Product Image"
          className="w-full rounded-lg object-cover aspect-square"
          height={600}
          src={eventData.photo ? eventData.photo : "/placeholder.svg"}
          width={600}
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{eventData.name}</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {eventData.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
            <p className="font-medium">{eventData.category}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
            <p className="font-medium">${eventData.price}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
            <p className="font-medium">{eventData.location}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
            <p className="font-medium">{eventData.date}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="w-full hover:bg-indigo-400 bg-indigo-500">Checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default Event;