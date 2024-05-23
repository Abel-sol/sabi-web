import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const LandingPage = () => {

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-t from-white to-indigo-500">
      <div className="flex flex-col sticky">
        <header className="flex h-14 lg:h-[60px] items-center gap-4  bg-indigo-500">
          <div className="flex-1">
            <h1 className="font-semibold text-4xl pl-2  text-white">Sabi🎉</h1>
          </div>
        </header>
      </div>
      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <div className="flex flex-col gap-2 mx-auto my-auto">

          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            Sabi 🎉
          </h1>
          <p className="mt-6 px-4 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            Your one-stop destination for finding where to go out and have fun.
            Book your tickets from the comfort of your home, workplace or anywhere.</p>
          <div className="mt-6 sm:mt-10 px-3 flex justify-center space-x-6 text-sm">
            <Button onClick={() => signIn("google", { callbackUrl: "/" })} className="bg-indigo-500 text-white  font-semibold h-12 px-6  w-full flex items-center justify-center sm:w-auto rounded-lg hover:opacity-75 hover:bg-indigo-500  duration-75" >
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