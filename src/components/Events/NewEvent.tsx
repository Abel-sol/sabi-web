
const NewEvent = () => {
  async function addEvent() {

    const res = await fetch("/api/addEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (!res.ok) {
      return;
    }
  }

  return (
    <li>
      <button className="p-5 bg-indigo-500 text-white " onClick={() => { addEvent(); console.log("btn presssed") }} >add data</button>
    </li>);
}

export default NewEvent;