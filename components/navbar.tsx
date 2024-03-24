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
		<nav className="flex flex-col items-stretch justify-between gap-x-14 md:bg-neutral-200 text-slate-700 md:flex-row md:items-center mt-12 md:mt-0 md:border-t-[30px] border-black md:px-20">
			<input type="checkbox" id="toggle" className="peer hidden" />
			<div className="flex items-center justify-between px-8 md:px-0">
				<a href="/" className="flex items-center gap-4">
					<LogoBlack />
					<LogoWhite />
				</a>
				<label htmlFor="toggle" className="cursor-pointer md:hidden">
					<HamburgerMenuIcon className="h-8 w-8 text-white" />
				</label>
			</div>
			<ul className="hidden flex-col border-y bg-primary text-lg font-accent tracking-wide font-bold text-black uppercase shadow-sm peer-checked:flex md:flex md:flex-row md:divide-x divide-zinc-300 md:border-none md:bg-transparent md:shadow-none">
				{navLinks.map(({ link, title }) => (
					<li key={link}>
						<a
							className={clsx(
								"block px-8 py-5 transition-colors hover:text-white hover:bg-black md:px-4",
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
				<Image src={dtu} alt="DTU Logo" className="hidden h-14 w-14 md:block" />
			</a>
		</nav>
	)
}
