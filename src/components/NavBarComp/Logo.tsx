import { IoTicket } from "react-icons/io5";

const Logo = () => {

  return (
    <div className="flex justify-center items-center">
      <div className="bg-indigo-500 rounded-3xl rounded-bl-none rounded-tr-none px-4 py-2 flex justify-center items-center">
        <span className="text-white font-extrabold text-4xl flex ml-2">Sabi  <IoTicket className="mr-2" /></span>
      </div>
    </div>
  );
}

export default Logo;