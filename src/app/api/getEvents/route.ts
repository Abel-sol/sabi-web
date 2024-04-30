import { collection, getDocs, query } from 'firebase/firestore';
import { getServerSession } from "next-auth";
import { db } from '../../../../firebase/firebase';

export async function GET(request: Request){
  const session = await getServerSession();
  
  if (!session){
    return Response.json( {err:"Unauthorized", status: 401 });
  }
      
  let events;
  try {
    events = await getDocs(query(collection(db, "events")));
  } catch (e) {
    console.log("There was an error getting the documents")
    console.error("Error getting documents: ", e);
    return Response.json({err: "Firebase Error", status: 500 });
  }
  let doc = Object.entries(events)
  return  Response.json( { doc, status: 200 });
}