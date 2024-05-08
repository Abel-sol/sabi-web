"use client"
import { SearchIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Input } from "../ui/input";


export default function Nav() {
	const session = useSession();
	// const [toggle, setToggle] = useState(false);

	// return (
	// <nav className=" flex w-full justify-end items-center px-10 py-3 pb-0 bg-indigo-400 sticky top-0 z-50 mx-auto shadow-xl rounded-b-sm">
	// 	<div className="flex w-full justify-between sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
	// 		{header ? <div className={`${header ?? "hidden"} flex gap-2 items-center`}>
	// 			<Logo />
	// 			<h1 className="text-3xl font-bold text-white">{header}</h1>
	// 		</div> : <Logo />}
	// 		<ul className="items-center space-x-8 hidden md:flex text-black">
	// 			{NavigationMenuData.map((menu, idx) => {
	// 				return (
	// 					<NavItem key={idx} link={menu.link} primary={true} >
	// 						{menu.name}
	// 					</NavItem>
	// 				);
	// 			})}
	// 			<NewEvent />
	// 			<li>
	// 				<button className="p-5 bg-blue-400 text-white " onClick={() => signOut()} >signout</button>
	// 			</li>
	// 		</ul>
	// 		<div className="md:hidden flex flex-1 justify-end items-center ">

	// 			{!toggle ? (
	// 				<IoMenu
	// 					className="w-6 h-6"
	// 					onClick={() => setToggle((prev) => !prev)}
	// 				/>
	// 			) : (
	// 				<IoMdClose
	// 					className="w-6 h-6"
	// 					onClick={() => setToggle((prev) => !prev)}
	// 				/>
	// 			)}
	// 			<div
	// 				className={`${toggle ? "flex" : "hidden"
	// 					} p-4 bg-indigo-500 absolute top-20 right-0 w-full md:w-auto my-2  rounded-xl sidebar`}
	// 			>
	// 				<div>


	// 				</div>
	// 				<ul className="list-none flex flex-col gap-2 justify-end items-start ml-7 flex-1 text-cyan-50">

	// 					{NavigationMenuData.map((menu, idx) => {
	// 						return (
	// 							<NavItem key={idx} link={menu.link}>
	// 								{menu.name}
	// 							</NavItem>
	// 						);
	// 					})}
	// 					<li>{session && <img src="" alt="profile" className="object-cover w-10 h-10 rounded-full" />}</li>
	// 					{//TODO: add signout button
	// 					}
	// 				</ul>
	// 			</div>
	// 		</div>
	// 	</div>
	// </nav>

	// )

	return (
		<div className="flex flex-col sticky">
			<header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-indigo-500">
				<div className="flex-1">
					<h1 className="font-semibold text-4xl  text-white">Sabi🎉</h1>
				</div>
				<div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
					<form className="ml-auto flex-1 sm:flex-initial">
						<div className="relative">
							<SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
							<Input
								className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
								placeholder="Search..."
								type="search"
							/>
						</div>
					</form>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className="rounded-full" size="icon" variant="ghost">
								<img
									alt="Avatar"
									className="rounded-full"
									height="32"
									src={session.data?.user?.image ?? "/placeholder.svg"}
									style={{
										aspectRatio: "32/32",
										objectFit: "cover",
									}}
									width="32"
								/>
								<span className="sr-only">Toggle user menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Support</DropdownMenuItem>
							<DropdownMenuSeparator />
							{session ? <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem> :
								(<DropdownMenuItem onClick={() => signIn("google", { callbackUrl: "/" })}>Logout</DropdownMenuItem>)}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</header>
		</div>
	)
}