"use client"
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import NavItem from "./NavItem";
import { NavigationMenuData } from "@/app/data";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

    return (
        <nav className=" flex w-full justify-end items-center px-10 py-5 bg-transparent sticky top-0 z-50 mx-auto">
        <div className="flex w-full justify-between sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="font-bold text-4xl">
          Sabi Logo
        </div>
        <ul className="items-center space-x-8 hidden md:flex text-black">
          {NavigationMenuData.map((menu, idx) => {
							return (
								<NavItem key={idx} link={menu.link} primary={true} >
									{menu.name}
								</NavItem>
							);
						})}
          </ul>
        <div className="md:hidden flex flex-1 justify-end items-center ">
        
						{!toggle ? (
							<IoMenu 
								className="w-6 h-6"
								onClick={() => setToggle((prev) => !prev)}
							/>
						) : (
							<IoMdClose 
								className="w-6 h-6"
								onClick={() => setToggle((prev) => !prev)}
							/>
						)}
						<div
							className={`${
								toggle ? "flex" : "hidden"
							} p-4 bg-indigo-500 absolute top-20 right-0 w-full md:w-auto my-2  rounded-xl sidebar`}
						>
							<ul className="list-none flex flex-col gap-2 justify-end items-start ml-7 flex-1 text-cyan-50">
								{NavigationMenuData.map((menu, idx) => {
									return (
										<NavItem key={idx} link={menu.link}>
											{menu.name}
										</NavItem>
									);
								})}
								
							</ul>
						</div>
					</div>
        <div className="flex justify-between gap-10 text-black sm:hidden">
          

        </div>
        </div>
      </nav>
    )
}