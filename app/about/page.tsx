import Image from "next/image"
import Container from "@/components/container"
import kaze from "@/public/images/vehicles/Kaze.png"
import mach4 from "@/public/images/vehicles/Mach4.png"
import nimbus from "@/public/images/vehicles/Nimbus.png"
import pegasus from "@/public/images/vehicles/Pegasus.png"
import eurus from "@/public/images/vehicles/Eurus.png"
import falcon from "@/public/images/vehicles/Falcon.jpg"
import vayu from "@/public/images/vehicles/VAYU.png"
import pinaka from "@/public/images/vehicles/Pinaka.png"
import mission from "@/public/images/home/mission.png"

export default function About() {
	return (
		<Container>
			<h1 className="mb-6 text-center tracking-wide font-accent text-4xl font-bold text-primary">
				OUR MISSION
			</h1>
			<div className="flex flex-col items-center gap-6 md:flex-row">
				<Image
					src={mission}
					alt="Whole Team Pic"
					className="h-auto w-full rounded-lg md:w-[500px]"
				/>
				<section className="mx-auto text-left text-lg text-slate-200">
					<p className="my-2 leading-snug">
						Team Raftaar is DTU&apos;s Human Powered Vehicle team, a group of
						students obsessed with answering one very important question: how
						fast can a bicycle go if engineers refuse to leave it alone?
					</p>
					<p className="my-2 leading-snug">
						We design, build, and race fully faired recumbent bicycles and
						tricycles that can reach speeds of up to 60 km/h using nothing but
						human power. Every vehicle is the result of months of design,
						analysis, manufacturing, testing, redesigning, and occasionally
						discovering new ways not to build a bike.
					</p>
					<p className="my-2 leading-snug">
						From aerodynamic fairings and lightweight structures to innovative
						engineering solutions, we are constantly pushing the limits of speed,
						efficiency, and performance. What starts as sketches, simulations,
						and ambitious ideas eventually becomes a machine capable of competing
						with some of the best human powered vehicles in the country.
					</p>
					<p className="my-2 leading-snug">
						Over the years, our work has earned recognition at national and
						international competitions, but our biggest achievement is building
						vehicles that make people stop and ask, &quot;Wait, that&apos;s a
						bicycle?&quot;
					</p>
					<p className="my-2 leading-snug">
						At Team Raftaar, we like to think great engineering is just about
						how well you weld stuff. The judges usually disagree.
					</p>
				</section>
			</div>

			<h1 className="mb-4 mt-12 text-center font-accent tracking-wide text-4xl font-bold text-primary">
				PAST VEHICLES
			</h1>

			<div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-12">
				{[
					{ src: kaze, name: "KAZE" },
					{ src: mach4, name: "MACH4" },
					{ src: nimbus, name: "NIMBUS" },
					{ src: pegasus, name: "PEGASUS" },
					{ src: eurus, name: "EURUS" },
					{ src: falcon, name: "FALCON" },
					{ src: vayu, name: "VAYU" },
					{ src: pinaka, name: "PINAKA" },
				].map((vehicle, index) => (
					<div
						key={index}
						className="flex flex-col items-center overflow-hidden rounded-lg border border-zinc-500 bg-zinc-800"
					>
						<Image
							src={vehicle.src}
							alt={vehicle.name}
							className="h-auto w-full object-cover object-top shadow-sm"
						/>
						<div>
							<p className="my-2 justify-self-center text-lg font-medium text-white">
								{vehicle.name}
							</p>
						</div>
					</div>
				))}
			</div>
		</Container>
	)
}
