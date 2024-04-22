import ChapaInput from "./components/ChapaInput";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-t from-white to-blue-300">
      <nav className=" flex w-full justify-end items-center px-10 py-5 bg-transparent sticky top-0 z-50 mx-auto">
        <div className="flex w-full justify-between sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="font-bold text-4xl">
          Sabi Logo
        </div>
        <div className="flex justify-between gap-10 text-black ">
          <ul className="items-center space-x-8 hidden md:flex ">
            <li className="hover:underline"> <a href="">Home</a></li>
            <li className="hover:underline"><a href="">Contact</a></li>
            <li className="hover:underline"><a href="">About Us</a></li>
            <li className="hover:underline"><a href="">Login</a></li>
            <li className="hover:underline"><a href="">Sign up</a></li>
          </ul>

        </div>
        </div>
      </nav>
      <div className="flex min-h-screen w-1/2 text-black flex-col  items-start gap-2 pt-28 px-10">
        <div className="flex flex-col gap-2">

        <h1 className="text-4xl font-bold">Sabi</h1>
        <p className="text-lg  font-semibold">Book your tickets while on your couch</p>
        <div className="flex justify between gap-10">

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
