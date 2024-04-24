import { signIn } from "next-auth/react";
import Nav from "../NavBarComp/Nav";
import { Button } from "../ui/button";

const LandingPage = () => {

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-t from-white to-indigo-500">
      <Nav />
      <div className="flex min-h-screen w-1/2 text-black flex-col  items-start gap-2 pt-28 pl-32">
        <div className="flex flex-col gap-2">

          <h1 className="text-4xl font-bold">Sabi 🎉</h1>
          <p className="text-lg  font-semibold">Your one-stop destination for finding where to go out.<br />
            Book your tickets from the comfort of your home.</p>
          <div className="flex justify between gap-10 mt-5">
            <Button onClick={() => signIn("google", { callbackUrl: "/" })} className="bg-indigo-500 text-white p-2 rounded-xl hover:opacity-75 hover:bg-indigo-500 px-5 duration-75" >
              Sign in
            </Button>
            {/* <Button onClick={() => signIn(undefined)} className="bg-indigo-500 text-white p-2 rounded-xl hover:opacity-75 hover:bg-indigo-500 px-5 duration-75" >
              Login
            </Button> */}
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>);
}

export default LandingPage;