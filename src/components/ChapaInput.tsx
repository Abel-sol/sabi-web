"use client"
import { generateRef } from "@/utils/tx_ref";
import { env } from "process";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { DrawerClose, DrawerFooter } from "./ui/drawer";

type props = {
    fname: string;
    price: number;
    email: string;
    eventName: string;
}

export default function ChapaInput({ email, fname, eventName, price }: props) {
    const [reference, setReference] = useState("");

    useEffect(() => {
        const tx = generateRef();
        setReference(tx);
    }, []);

    return (
        <>
            <form method="POST" action="https://api.chapa.co/v1/hosted/pay" className="flex flex-col gap-5" >
                <input type="hidden" name="public_key" value={env.CHAPA_PUBLIC_KEY as string} />
                <input type="hidden" name="tx_ref" value={reference} />
                <input type="hidden" name="amount" value={price} />
                <input type="hidden" name="currency" value="ETB" />
                <input type="hidden" name="email" value={email} />
                <input type="hidden" name="first_name" value={fname} />
                <input type="hidden" name="title" value={eventName} />
                <input type="hidden" name="description" value="Paying in Confidence with cahpa." />
                <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
                {/* <input type="hidden" name="callback_url" value="http://localhost:3000/thankyou" /> */}
                <input type="hidden" name="return_url" value="http://localhost:3000/thankyou" />
                <input type="hidden" name="meta[title]" value="test" />

                <DrawerFooter>
                    <Button type="submit" size="lg" className="bg-indigo-500 hover:bg-indigo-400">Place Order</Button>
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </form>
        </>
    )
}