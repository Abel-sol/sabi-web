import Nav from "@/components/NavBarComp/Nav";
import Sidebar from "./_components/Sidebar";

const Page = () => {

  return (<div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
    <Sidebar />
    <Nav />
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">

    </div>

  </div>);
}

export default Page;