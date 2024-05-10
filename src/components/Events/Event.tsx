"use client"
import { Chapa } from "chapa-nodejs";
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
  const [reference, setReference] = useState("");
  if (!eventData) router.push("/");

  // useEffect(() => {
  //   const tx = generateRef();
  //   setReference(tx);
  // }, []);

  const onSubmit = async () => {

    if (!session.data?.user) return;

    const chapa = new Chapa({
      secretKey: process.env.CHAPA_SECRET_KEY as string,
    });

    const tx_ref = await chapa.generateTransactionReference({
      prefix: 'TX', // defaults to `TX`
      size: 20, // defaults to `15`
    });
    // const response =
    await chapa.initialize({
      first_name: session.data.user.name ?? "",
      last_name: "s",
      email: session.data.user.email ?? "",
      currency: 'ETB',
      amount: eventData.price.toString(),
      tx_ref: tx_ref,
      callback_url: 'https://sabi-web.vercel.app/thankyou',
      customization: {
        title: 'Sabi payment',
        description: 'Test Description',
      },
    });

  }

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-0">
      <div className="flex flex-col gap-4">
        <img
          alt="product"
          className="w-full rounded-lg object-cover aspect-square"
          height={600}
          src={eventData.image ? eventData.image : "../../../public/placeholder-user.png"}
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
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="w-full hover:bg-indigo-400 bg-indigo-500">Checkout</Button>
            </DrawerTrigger>
            <DrawerContent className="w-full max-w-md" >
              <DrawerHeader >
                <DrawerTitle>Checkout</DrawerTitle>
                <DrawerDescription>Complete your purchase by placing an order.</DrawerDescription>
              </DrawerHeader>
              {/* 
              <ChapaInput
                eventName={eventData.name}
                price={eventData.price}
                fname={session.data?.user?.name ?? ""}
                email={session.data?.user?.email ?? ""}
              /> */}
              {/* <form method="POST" action="https://api.chapa.co/v1/hosted/pay" className="flex flex-col gap-5" >
                <input type="hidden" name="public_key" value="CHAPUBK_TEST-2ayggpjUwuEoRYFStQGlJFQekC0Qa6lR" />
                <input type="hidden" name="tx_ref" value={reference} />
                <input type="hidden" name="amount" value={eventData.price} />
                <input type="hidden" name="currency" value="ETB" />
                <input type="hidden" name="email" value={session.data?.user?.email ?? ""} />
                <input type="hidden" name="first_name" value={session.data?.user?.name ?? ""} />
                <input type="hidden" name="title" value={eventData.name} />
                <input type="hidden" name="description" value="Paying in Confidence with cahpa." />
                <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
                {/* <input type="hidden" name="callback_url" value="http://localhost:3000/thankyou" /> 
                <input type="hidden" name="return_url" value="http://localhost:3000/thankyou" />
                <input type="hidden" name="meta[title]" value="test" />

                <DrawerFooter>
                  <Button type="submit" size="lg" className="bg-indigo-500 hover:bg-indigo-400">Place Order</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </form> */}

              {/* <form method="POST" onSubmit={onSubmit} >
                <input type="hidden" name="public_key" value={process.env.CHAPA_PUBLIC_KEY} />
                <input type="hidden" name="tx_ref" value={reference} />
                <input type="hidden" name="amount" value={eventData.price ?? 0} />
                <input type="hidden" name="currency" value="ETB" />
                <input type="hidden" name="email" value={session.data?.user?.email ?? ""} />
                <input type="hidden" name="first_name" value={session.data?.user?.name ?? ""} />
                <input type="hidden" name="last_name" value="Goytom" /> 
                <input type="hidden" name="title" value="Let us do this" />
                <input type="hidden" name="description" value="Paying with Confidence with cha" />
                <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
                 <input type="hidden" name="callback_url" value="https://example.com/callbackurl" /> 
                <input type="hidden" name="return_url" value="http://localhost:3000/thankyou" />
                <input type="hidden" name="meta[title]" value="test" />
                 <button type="submit">Pay Now</button> 
              </form> */}
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