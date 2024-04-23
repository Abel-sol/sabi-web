import Link from "next/link"
import { ReactNode } from "react"

interface NavItemProp {
    children: ReactNode,
    primary?: boolean,
    link: string
}
export default function NavItem ({children, primary, link} : NavItemProp){

    return (
        <li>
            <Link href={link}
                  className={`font-medium tracking-wide ${
					primary ? "md:text-black" : "md:text-gray-700 text-white"
				}  transition-colors duration-200 hover:text-deep-purple-accent-400`}>
                    {children}
            </Link>
        </li>
    )
}