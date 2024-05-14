import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export async function getEvents(filters = {} ) {
  let querySnapshot;
  try{
    let q = query(collection(db,"events"));
    // q = applyQueryFilters(q, filters);

     querySnapshot = await getDocs(q);

  } catch (e){
    console.log("There was an error getting the documents")
    console.error("Error getting documents: ", e);
    return {};
  }
  // return JSON.stringify(querySnapshot);
  return querySnapshot.docs.map(doc => {
		return {
			id: doc.id,
			...doc.data(),
			// Only plain objects can be passed to Client Components from Server Components
			// timestamp: serverTimestamp(),
		};
	});
}

export async function getTickets(id : string) {
  let querySnapshot;
  try{
    let q = query(collection(db,"tickets"), where("userId", "==", id));
    // q = applyQueryFilters(q, filters);

     querySnapshot = await getDocs(q);

  } catch (e){
    console.log("There was an error getting the documents")
    console.error("Error getting documents: ", e);
    return {};
  }
  // return JSON.stringify(querySnapshot);
  return querySnapshot.docs.map(doc => {
		return {
			
			...doc.data(),
			// Only plain objects can be passed to Client Components from Server Components
			// timestamp: serverTimestamp(),
		};
	});
}