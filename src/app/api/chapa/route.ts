import { Chapa } from "chapa-nodejs";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  const session = await getServerSession();

  if (!session) 
    return new Response("Unauthorized", { status: 401 });

  const data = await req.json();

  const chapa = new Chapa({
    secretKey: process.env.CHAPA_SECRET_KEY as string,
  });

  const tx_ref = await chapa.generateTransactionReference({
    prefix: 'TX', // defaults to `TX`
    size: 20, // defaults to `15`
  });
  let response;
 try{ 
  response = await chapa.initialize({
    first_name: session.user.name ?? "",
    last_name: "s",
    email: session.user.email ?? "",
    currency: 'ETB',
    amount: data.price.toString(),
    tx_ref: tx_ref,
    return_url: "https://sabi-web.vercel.com/thankyou",
    customization: {
      title: 'Sabi payment',
      description: 'Test Description',
    },
  });
} catch (e){
  console.log(e);
  return Response.json({response}, { status: 500 });
}

  return Response.json( { status: 200, "details" : response });
}