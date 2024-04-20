import {env} from "process";

export default function ChapaInput(){
    return(
        <>
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay" className="flex flex-col gap-5" >
        <input type="hidden" name="public_key" value={env.CHAPA_PUBLIC_KEY } />
        <input type="hidden" name="tx_ref" value="tx-6416yf38sfds9" />
        <input type="hidden" name="amount" value="40000" />
        <input type="hidden" name="currency" value="ETB" />
        <input type="hidden" name="email" value="abel@gamil.com" />
        <input type="hidden" name="first_name" value="jhon" />
        <input type="hidden" name="last_name" value="doe" />
        <input type="hidden" name="title" value="Let us do this" />
        <input type="hidden" name="description" value="Sabi Paying with Confidence with cahpa " />
        <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
        {/* <input type="hidden" name="callback_url" value="https://example.com/callbackurl" /> */}
        <input type="hidden" name="return_url" value="https://9000-monospace-sabi-app-1711817833498.cluster-hf4yr35cmnbd4vhbxvfvc6cp5q.cloudworkstations.dev/?monospaceUid=464342&embedded=0/thankyou" />
        <input type="hidden" name="meta[title]" value="test" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pay Now
        </button>
    </form>
        </>
    )
}