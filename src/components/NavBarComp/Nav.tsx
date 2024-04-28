"use client"
import { NavigationMenuData } from "@/data";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import NewEvent from "../Events/NewEvent";
import Logo from "./Logo";
import NavItem from "./NavItem";

export default function Nav() {
	const session = useSession();
	const [toggle, setToggle] = useState(false);

	return (
		<nav className=" flex w-full justify-end items-center px-10 py-3 pb-0 bg-indigo-400 sticky top-0 z-50 mx-auto shadow-xl rounded-b-sm">
			<div className="flex w-full justify-between sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
				<Logo />
				<ul className="items-center space-x-8 hidden md:flex text-black">
					{NavigationMenuData.map((menu, idx) => {
						return (
							<NavItem key={idx} link={menu.link} primary={true} >
								{menu.name}
							</NavItem>
						);
					})}
					<NewEvent />
					<li>
						<button className="p-5 bg-blue-400 text-white " onClick={() => signOut()} >signout</button>
					</li>
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
						className={`${toggle ? "flex" : "hidden"
							} p-4 bg-indigo-500 absolute top-20 right-0 w-full md:w-auto my-2  rounded-xl sidebar`}
					>
						<div>


						</div>
						<ul className="list-none flex flex-col gap-2 justify-end items-start ml-7 flex-1 text-cyan-50">

							{NavigationMenuData.map((menu, idx) => {
								return (
									<NavItem key={idx} link={menu.link}>
										{menu.name}
									</NavItem>
								);
							})}
							<li>{session && <img src="" alt="profile" className="object-cover w-10 h-10 rounded-full" />}</li>
							{//TODO: add signout button
							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}