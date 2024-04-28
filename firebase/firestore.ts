import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";

export async function getEvents(filters = {} ) {
  let q = query(collection(db,"events"));
  // q = applyQueryFilters(q, filters);
  let querySnapshot;
  try{

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
export async function addEvent() {
  const datas = {name: "test", location: "test Location", photo: "test photo", city: "test city", category: "test category"}//await generateEvent();

  try{

    const docRef = await addDoc(collection(db, "events"), datas);
    return docRef;
  } catch(e){

    console.log("There was an error adding the document")
    console.error("Error adding document: ", e);
  } 
}