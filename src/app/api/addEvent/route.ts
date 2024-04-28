import { data } from "@/lib/fakeData";
import { addDoc, collection } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { db } from "../../../../firebase/firebase";

export async function POST(request: Request) {

  const session = await getServerSession();

  if (!session) 
    return new Response("Unauthorized", { status: 401 });

  try{
    // doc = await addDoc(collection(db, "events"), {
    //   ...data,
    // });
    for (const item of data){
      await addDoc(collection(db,"events"),item); // only when adding fake data
    }

  } catch(e) {

    console.log("There was an error adding the document")
    console.error("Error adding document: ", e);
    return new Response("Firebase Error", { status: 500 });

  }
  
  return Response.json( { status: 200,  "success": "Document added" });
}