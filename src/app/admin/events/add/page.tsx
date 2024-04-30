import Nav from "@/components/NavBarComp/Nav";
import Sidebar from "../../_components/Sidebar";
import AddEvent from "../_components/AddEvent";

const Page = () => {

  return (<div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
    <Sidebar />

    <Nav />
    <AddEvent />
  </div>);
}

export default Page;