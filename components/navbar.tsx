"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import navLinks from "@/data/nav-links.json"
import LogoBlack from "./logo-black"
import LogoWhite from "./logo-white"
import dtu from "@/public/images/home/dtulogo.png"
import clsx from "clsx"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

export default function Navbar() {
	const pathname = usePathname()

	return (
		<nav className="flex flex-col items-stretch justify-between py-4 lg:py-0 gap-x-14 bg-neutral-200 text-slate-700 lg:flex-row lg:items-center lg:mt-0 border-t-[2rem] border-black md:px-20">
			<input type="checkbox" id="toggle" className="peer hidden" />
			<div className="flex items-center justify-between px-8 md:px-0">
				<a href="/" className="flex items-center gap-4">
					<LogoBlack />
				</a>
				<label htmlFor="toggle" className="cursor-pointer lg:hidden">
					<HamburgerMenuIcon className="h-10 w-10 text-black" />
				</label>
			</div>
			<ul className="hidden flex-col bg-neutral-200 text-2xl md:text-4xl font-accent tracking-wide font-bold text-black uppercase divide-y-2 lg:divide-y-0 shadow-sm peer-checked:flex lg:flex lg:flex-row lg:divide-x-2 divide-zinc-300 md:bg-transparent md:shadow-none">
				{navLinks.map(({ link, title }) => (
					<li key={link}>
						<a
							className={clsx(
								"block px-8 py-4 transition-colors duration-200 hover:text-white hover:bg-black lg:px-4",
								pathname === link ? "text-zinc-800" : "",
							)}
							href={link}
						>
							{title}
						</a>
					</li>
				))}
			</ul>
			<a
				href="http://dtu.ac.in/"
				aria-label="DTU website"
				className="flex items-center gap-4"
			>
				<Image src={dtu} alt="DTU Logo" height="56" width="56" className="hidden h-14 w-14 lg:block" />
			</a>
		</nav>
	)
}
