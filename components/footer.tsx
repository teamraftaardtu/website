import socials from "@/data/social.json"
import navLinks from "@/data/nav-links.json"
import Image from "next/image"
import Container from "./container"

export default function Footer() {
	return (
		<footer className="border-t border-zinc-600 bg-black">
			<Container className="flex flex-col items-center gap-9 text-center">
				<div className="flex gap-8">
					{navLinks.map(({ link, title }) => (
						<a
							key={link}
							className="text-slate-100 transition-colors hover:text-primary"
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

				<p className="text-neutral-200">
					© 2024 • Made with ❤️ by{" "}
					<a
						href="https://www.linkedin.com/in/priyanshusinha77/"
						className="underline underline-offset-4 transition-colors hover:decoration-primary"
					>
						Priyanshu Sinha
					</a>
				</p>
			</Container>
		</footer>
	)
}
