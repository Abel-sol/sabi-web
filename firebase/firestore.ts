import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";

export async function getEvents(filters = {} ) {
  let q = query(collection(db,"events"));
  // q = applyQueryFilters(q, filters);
  try{

    const querySnapshot = await getDocs(q);

  } catch (e){
    console.log("There was an error getting the documents")
    console.error("Error getting documents: ", e);
  }
}
export async function addEvent() {
  const datas = {name: "test", location: "test Location", photo: "test photo", city: "test city", category: "test category"}//await generateEvent();

  try{

    await addDoc(collection(db, "events"), datas);
    console.log("data added successfully!!!")
  } catch(e){

    console.log("There was an error adding the document")
    console.error("Error adding document: ", e);
  } 
}