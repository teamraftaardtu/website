import Image from "next/image"
import Container from "@/components/container"
import kaze from "@/public/images/vehicles/Kaze.png"
import mach4 from "@/public/images/vehicles/Mach4.png"
import nimbus from "@/public/images/vehicles/Nimbus.png"
import pegasus from "@/public/images/vehicles/Pegasus.png"
import eurus from "@/public/images/vehicles/Eurus.png"
import falcon from "@/public/images/vehicles/Falcon.jpg"
import team from "@/public/images/team-min.jpeg"

export default function About() {
	return (
		<Container>
			<h1 className="mb-6 text-center font-accent text-4xl font-bold text-primary">
				Our Mission
			</h1>
			<div className="flex flex-col items-center gap-6 md:flex-row">
				<Image
					src={team}
					alt="Whole Team Pic"
					className="h-auto w-full rounded-lg md:w-1/2"
				/>
				<section className="mx-auto text-left text-lg text-slate-200">
					<p className="my-2 leading-snug">
						We are the Human Powered Vehicle Team consisting of undergraduate
						students who aim to give the world an alternative solution to the
						present-day energy crisis.
					</p>
					<p className="my-2 leading-snug">
						We study, design, develop, and manufacture the fully-faired
						recumbent bikes and trikes which can reach up to the highest speeds
						of 60 kmph solely by human power!!! The team rigorously researches
						about the human-powered vehicles and uses the best possible design,
						the best possible techniques, and the best possible materials for
						manufacturing.
					</p>
					<p className="my-2 leading-snug">
						From building fairing completely from carbon fiber to incorporating
						the internationally acclaimed landing gear system in the vehicle,
						Team Raftaar is redefining the way human-powered vehicles are
						perceived in India. Our unique manufacturing style, innovative
						design, detailed analysis, and advanced use of composites have been
						appreciated and awarded multiple times both in National and
						international competitions.
					</p>
					<p className="my-2 leading-snug">
						With each passing year, we as a team are getting closer and closer
						to our ultimate ambition of bringing HPVs closer to the everyday
						commuters as a sustainable alternative to other conventional modes
						of transport.
					</p>
				</section>
			</div>
			<h1 className="mb-4 mt-8 text-center font-accent text-4xl font-bold text-primary">
				Past Vehicles
			</h1>
			<div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-12">
				<div className="flex flex-col items-center overflow-hidden rounded-lg border border-zinc-500 bg-zinc-900">
					<Image
						src={kaze}
						alt="New"
						className="h-auto w-full object-cover object-top shadow-sm"
					/>
					<div>
						<p className="my-2 justify-self-center text-lg font-medium text-white">
							KAZE
						</p>
					</div>
				</div>

				<div className="flex flex-col items-center overflow-hidden rounded-lg border border-zinc-500 bg-zinc-900">
					<Image
						src={mach4}
						alt="New"
						className="h-auto w-full object-cover object-top shadow-sm"
					/>
					<div>
						<p className="my-2 justify-self-center text-lg font-medium text-white">
							MACH4
						</p>
					</div>
				</div>

				<div className="flex flex-col items-center overflow-hidden rounded-lg border border-zinc-500 bg-zinc-900">
					<Image
						src={nimbus}
						alt="New"
						className="h-auto w-full object-cover object-top shadow-sm"
					/>
					<div>
						<p className="my-2 justify-self-center text-lg font-medium text-white">
							NIMBUS
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center overflow-hidden rounded-lg border border-zinc-500 bg-zinc-900">
					<Image
						src={pegasus}
						alt="New"
						className="h-auto w-full object-cover object-top shadow-sm"
					/>
					<div>
						<p className="my-2 justify-self-center text-lg font-medium text-white">
							PEGASUS
						</p>
					</div>
				</div>

				<div className="flex flex-col items-center overflow-hidden rounded-lg border border-zinc-500 bg-zinc-900">
					<Image
						src={eurus}
						alt="New"
						className="h-auto w-full object-cover object-top shadow-sm"
					/>
					<div>
						<p className="my-2 justify-self-center text-lg font-medium text-white">
							EURUS
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center overflow-hidden rounded-lg border border-zinc-500 bg-zinc-900">
					<Image
						src={falcon}
						alt="New"
						className="h-auto w-full object-cover object-top shadow-sm"
					/>
					<div>
						<p className="my-2 justify-self-center text-lg font-medium text-white">
							FALCON
						</p>
					</div>
				</div>
			</div>
		</Container>
	)
}
