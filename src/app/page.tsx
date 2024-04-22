import ChapaInput from "./components/ChapaInput";
import Nav from "./components/NavBarComp/Nav";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-t from-white to-indigo-500">
      <Nav />
      <div className="flex min-h-screen w-1/2 text-black flex-col  items-start gap-2 pt-28 pl-32">
        <div className="flex flex-col gap-2">

        <h1 className="text-4xl font-bold">Sabi 🎉</h1>
        <p className="text-lg  font-semibold">Your one-stop destination for finding where to go out.<br />
          Book your tickets while on your couch</p>
        <div className="flex justify between gap-10 mt-5">

        <button className="bg-blue-500 text-white p-2 rounded-md">
          Login
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Sign Up
        </button>
        </div>
        </div>
      </div>
      <div>

      </div>
    <ChapaInput />
    
    </main>
  );
}
