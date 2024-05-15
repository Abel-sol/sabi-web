import { addDoc, collection } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { db } from "../../../../../firebase/firebase";

async function POST(req: Request) {
  const session = await getServerSession();
  if (!session) return;

  const data = await req.json();
  if (data.status !== "successful") {
    return Response.json({ status: 501, err: "Unseccessfull payment" })
  }
  try {
    await addDoc(collection(db, "tickets"), {
      tx_ref: data.tx_ref,
      userId: session.user.id, // Store the user's UID with the post
    });
  } catch (e) {
    console.log(e);
    return Response.json({ status: 500, err: "couldnt add ticket to database" });
  }

  return Response.json({ status: 200, "res": "successfull" });
}