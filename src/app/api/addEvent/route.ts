
import { addDoc, collection } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { db } from "../../../../firebase/firebase";

export async function POST(req: Request) {
  const session = await getServerSession();

  if (!session) 
    return new Response("Unauthorized", { status: 401 });
  
  const data = await req.json();

  try{
     await addDoc(collection(db, "events"), {
      ...data,
    });
    // for (const item of data){
    //   await addDoc(collection(db,"events"),item); // only when adding fake data
    // }

  } catch(e) {

    console.log("There was an error adding the document")
    console.error("Error adding document: ", e);
    return  Response.json({err: "Firebase Error"}, { status: 500 });

  }
  
  return Response.json( { status: 200,  "success": "Document added" });
}