import Image from "next/image"
import kaze from "@/public/images/home/Kaze.png"
import team from "@/public/images/home/team.jpeg"
import winner from "@/public/images/home/winner.jpeg"
import collage from "@/public/images/home/collage.png"
import solidWorks from "@/public/images/sponsors/solidworks.png"
import ansys from "@/public/images/sponsors/ansys.png"
import creo from "@/public/images/sponsors/creo.png"
import vactech from "@/public/images/sponsors/vactech.png"
import codingninjas from "@/public/images/sponsors/ninjas.png"
import altair from "@/public/images/sponsors/altair.png"
import vehicle from "@/public/images/home/vehicle-transformed.webp"
import Container from "@/components/container"
import Link from "next/link"

function Photos() {
	return (
		<div className="-z-10 mt-8 flex max-w-6xl items-start gap-12">
			<Image
				src={kaze}
				alt="Picture of Team Raftaar with KAZE"
				placeholder="blur"
				className="hidden h-48 w-80 translate-y-12 -rotate-6 transform rounded-lg object-cover shadow-xl lg:block hover:translate-y-0"
			/>
			<Image
				src={team}
				alt="Picture of teammates of Team Raftaar"
				placeholder="blur"
				className="hidden h-48 w-96 translate-y-8 -rotate-1 transform rounded-lg object-cover shadow-xl md:block"
			/>
			<Image
				src={winner}
				alt="Picture of Team Raftaar collecting their trophy"
				placeholder="blur"
				className="h-48 w-96 md:w-80 md:translate-y-8 mb-4 md:mb-0 md:rotate-2 transform rounded-lg object-cover shadow-xl"
			/>
		</div>
	)
}

function Background() {
	return (
		<>
			<div
				style={{
					backgroundColor: "rgb(240,146,48)",
					backgroundImage:
						"linear-gradient(rgb(224, 129, 27) 1px, transparent 1px), linear-gradient(to right, rgb(224, 129, 27) 1px, transparent 1px)",
					backgroundSize: "80px 80px",
				}}
				className="absolute inset-0 -z-10"
			/>
			<div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-15% to-zinc-900 to-50%" />
		</>
	)
}

export default function Home() {
	return (
		<main>
			<Background />
			<Container
				as="section"
				className="flex flex-col items-start pb-0 sm:items-center sm:text-center"
			>
				<Link
					href="https://join.teamraftaar.in/"
					className="mx-auto transform whitespace-nowrap rounded-full bg-zinc-100 px-4 py-1 text-base font-bold text-slate-700 transition-transform duration-500 hover:translate-x-2"
				>
					Apply to Team Raftaar »
				</Link>
				<div className="flex flex-col md:gap-20 md:justify-between items-center lg:flex-row">
					<Image
						priority
						src={vehicle}
						alt=""
						className="-z-10 mt-16 h-auto w-5/6 rotate-6 lg:hidden hover:rotate-0 transition ease-in-out duration-300"
					/>
					<div>
						<h1 className="mt-8 max-w-xl text-center font-accent text-5xl [word-spacing:-10px] md:[word-spacing:-20px] font-bold uppercase italic !leading-[1.15] text-slate-200 drop-shadow-lg lg:text-left md:text-8xl">
							We are{" "}
							<span className="shiny text-orange-300 drop-shadow-lg [word-spacing:-25px] md:[word-spacing:-50px]">
								speed ⚡️
							</span>
						</h1>
						<p className="mx-auto mb-6 mt-8 max-w-[45ch] text-center text-lg text-slate-100 sm:text-xl lg:text-left md:ml-3">
							Team Raftaar is the Hybrid Human Powered Vehicle developing team
							of Delhi Technological University established in 2011.
						</p>
					</div>
					<Image
						priority
						src={vehicle}
						alt=""
						className="my-16 hidden h-auto w-[500px] rotate-6 lg:block hover:rotate-0 transition ease-in-out duration-300"
					/>
				</div>
				<Photos />
			</Container>

			<div className="mx-auto flex flex-col items-center justify-between gap-3 border-t border-zinc-600 bg-zinc-950 px-8 py-24 text-slate-100 lg:flex-row md:px-28">
				<section className="max-w-2xl">
					<div className="mb-8 flex flex-col items-baseline gap-2">
						<h2 className="font-accent text-3xl uppercase tracking-wide font-bold text-primary md:text-5xl">
							Major Achievements
						</h2>
						<p className="text-2xl text-white">and counting...</p>
					</div>
					<div className="flex flex-row items-center gap-3 text-lg">
						<span>🏆</span>
						<p className="my-2 text-lg">
							Secured 1st position in the design event of eHPVC at the ASME EFx
							India 2023.
						</p>
					</div>
					<div className="flex flex-row items-center gap-3 text-lg">
						<span>🏆</span>
						<p className="my-2 text-lg">
							Secured 2nd position in analysis, 6th position in Design event and
							6th position in Men Drag event at ASME E-fest, HPVC 2020
							Asia-Pacific hosted by Marwadi university, Rajkot.
						</p>
					</div>
					<div className="flex flex-row items-center gap-3 text-lg">
						<span>🏆</span>
						<p className="my-2 text-lg">
							Secured 1st position in analysis and 5th in design in ASME E fest
							2019 at VIT Vellore.
						</p>
					</div>
					<div className="flex flex-row items-center gap-3 text-lg">
						<span>🏆</span>
						<p className="my-2 text-lg">
							Winners of the innovation category at ASME E-Fest HPVC 2018 North
							America at Pennsylvania state university, USA. Also secured the
							5th position in design.
						</p>
					</div>
					<div className="flex flex-row items-center gap-3 text-lg">
						<span>🏆</span>
						<p className="my-2 text-lg">
							Secured 1st position in men and women drag race and 3rd position
							in design at ASME HPVC Asia pacific 2018. Also secured the overall
							runners up position.
						</p>
					</div>
					<div className="flex flex-row items-center gap-3 text-lg">
						<span>🏆</span>
						<p className="my-2 text-lg">
							Winners of the innovation category at ASME E-Fest HPVC 2018 North
							America at Pennsylvania state university, USA. Also secured the
							5th position in design.
						</p>
					</div>
					<div className="flex flex-row items-center gap-3 text-lg">
						<span>🏆</span>
						<p className="my-2 text-lg">
							Overall winners of the ASME HPVC Asia Pacific 2015 and 2017.
						</p>
					</div>
					<div className="flex flex-row items-center gap-3 text-lg">
						<span>🏆</span>
						<p className="my-2 text-lg">
							Secured overall 12th position in ASME HPVC North America west
							2016.
						</p>
					</div>
				</section>
				<Image src={collage} alt="Collage" className="w-full lg:w-[40%]" />
			</div>
			<div className="relative -z-20 border-t border-zinc-600 bg-zinc-900 bg-[url(/images/home/back.jpeg)] bg-cover px-8 py-12">
				<div className="absolute inset-0 -z-10 bg-black/50"></div>
				<section className="mx-auto max-w-3xl">
					<hr className="mx-auto h-1 w-12 border-0 bg-primary" />
					<h2 className="py-2 text-center text-4xl font-accent font-bold text-white md:text-8xl">
						SPONSORS
					</h2>
					<hr className="mx-auto h-1 w-12 border-0 bg-primary" />
					<div className="mt-10 flex flex-col items-center justify-center gap-5 md:flex-row md:flex-wrap md:gap-10">
						<Image src={solidWorks} alt="Solid Works" className="h-12 w-auto" />
						<Image src={ansys} alt="Ansys" className="h-12 w-auto" />
						<Image src={altair} alt="Altair" className="h-12 w-auto" />
						<Image
							src={codingninjas}
							alt="Coding Ninjas"
							className="h-16 w-auto"
						/>
						<Image src={vactech} alt="Vactech" className="h-16 w-auto" />
						<Image src={creo} alt="Creo" className="h-16 w-auto" />
					</div>
				</section>
			</div>
		</main>
	)
}
