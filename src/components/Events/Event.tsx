"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EventData } from '../../../type';
import { Button } from "../ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
type props = {
  eventData: EventData
}
const Event = ({ eventData }: props) => {
  const router = useRouter();
  const session = useSession();
  const [event, setEvent] = useState({ ...eventData });
  if (!eventData) router.push("/");


  const onSubmit = async () => {

    if (!session.data?.user) return;

    const res = await fetch("/api/chapa", {
      method: "POST",
      body: JSON.stringify({
        ...event,
        id: session.data.user.id
      }),
      headers: {
        "Content-Type": "application/json"
      },
    })

    if (!res.ok) {
      return;
    }

    const data = await res.json();

    if (data.details.data?.checkout_url) {
      router.push(data.details.data.checkout_url);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-0">
      <div className="flex flex-col gap-4">
        <img
          alt="product"
          className="w-full rounded-lg object-cover aspect-square"
          height={600}
          src={event.image ? event.image : "../../../public/placeholder-user.png"}
          width={600}
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{event.name}</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {event.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
            <p className="font-medium">{event.category}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
            <p className="font-medium">${event.price}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
            <p className="font-medium">{event.location}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
            <p className="font-medium">{event.date}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Drawer >
            <DrawerTrigger asChild>
              <Button className="w-full hover:bg-indigo-400 bg-indigo-500">Checkout</Button>
            </DrawerTrigger>
            <DrawerContent className="w-full lg:max-w-2xl" >
              <DrawerHeader >
                <DrawerTitle className="text-center">Checkout</DrawerTitle>
                <DrawerDescription className="text-center">Complete your purchase by placing an order.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button type="submit" onClick={onSubmit} size="lg" className="bg-indigo-500 hover:bg-indigo-400">Place Order</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>

            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Event;