import socials from "@/data/social.json"
import navLinks from "@/data/nav-links.json"
import Image from "next/image"
import Container from "./container"

export default function Footer() {
	return (
		<footer className="border-t border-zinc-600">
			<Container className="flex flex-col items-center gap-12 text-center">
				<div className="flex gap-8">
					{navLinks.map(({ link, title }) => (
						<a
							key={link}
							className="text-slate-200 transition-colors hover:text-primary"
							href={link}
						>
							{title}
						</a>
					))}
				</div>
				<div className="flex gap-8">
					{socials.map(({ link, image, name }) => (
						<a
							key={link}
							className="social"
							href={link}
							target="_blank"
							rel="noopener"
							title={name}
						>
							<Image src={image} alt={name} width={28} height={28} />
						</a>
					))}
				</div>
				<p className="max-w-sm text-slate-200">
					© Team Raftaar • 2024
				</p>
			</Container>
		</footer>
	)
}
