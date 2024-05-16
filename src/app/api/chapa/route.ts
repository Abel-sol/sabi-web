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

  const tx_ref  = await chapa.generateTransactionReference({
    prefix: 'TX', // defaults to `TX`
    size: 20, // defaults to `15`
  })

  // const tx_ref = await generateRef();

  // try {
  //   await addDoc(collection(db, 'tickets', session.user.id), {
  //     tx_ref: tx_ref,
  //   });
  // } catch(e){
  //   console.log(e);
  //   return Response.json( { status: 500,"Firebase Error" : e });
  // }
  
  let response;
  let name : string[] = session.user.name?.split(" ") ?? [];
  
 try{ 
  response = await chapa.initialize({
    first_name: name[0] ?? "",
    last_name: name[1] ?? "",
    email: session.user.email ?? "",
    currency: 'ETB',
    amount: data.price.toString(),
    tx_ref: tx_ref ,
    return_url: "https://sabi-web.vercel.app/thankyou",
    
    customization: {
      title: data.name, 
      description: 'Test Description',
    },
  })

} catch (e){
  console.log(e);
  return Response.json({response , e}, { status: 500 , "statusText" : "there is a problem with chapas server"});
}
  return Response.json({"details" : response},{status: 200});
}