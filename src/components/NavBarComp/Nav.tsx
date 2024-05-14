"use client"
import { SearchIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Input } from "../ui/input";


export default function Nav() {
	const session = useSession();


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
							<Link href={`/tickets/${session.data?.user?.id}`} >
								<DropdownMenuItem >
									Tickets
								</DropdownMenuItem>
							</Link>
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