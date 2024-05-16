import { addDoc, collection } from 'firebase/firestore';
import { getServerSession } from 'next-auth';
import { db } from '../../../../../firebase/firebase';
export async function POST(req: Request) {
  const session = await getServerSession();
  // const secret = process.env.CHAPA_HASH_KEY!;

    // Retrieve the request's body 
    
    const event = await req.json();
    // Do something with event
    
    try{
      await addDoc(collection(db,"tickets"), {
        ...event
      });
    }catch(e){
      console.log(e);
      console.log("firebase error")
      return;
    } 
    // }
    return Response.json({status: 200});
}