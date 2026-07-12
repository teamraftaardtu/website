import team from "@/data/team.json"
import alumni from "@/data/alumni.json"
import Image from "next/image"
import Container from "@/components/container"
import sortBy from "lodash-es/sortBy"

interface SocialsProps {
	person: Person
}
function Socials({ person }: SocialsProps) {
	const socials = ["linkedin", "website", "email", "instagram", "behance"] as const

	return (
		<div className="mt-4 flex gap-2">
			{socials.map(
				(social) =>
					person[social] && (
						<a
							key={social}
							href={
								social === "email" ? `mailto:${person[social]}` : person[social]
							}
							target="_blank"
							rel="noopener noreferrer"
							className="mr-2 rounded-sm bg-red-600 p-0.5 shadow-sm shadow-red-950/60 transition-colors hover:bg-red-500"
						>
							<Image
								src={`/vectors/social/${social}.svg`}
								alt={social}
								width={18}
								height={18}
							/>
						</a>
					),
			)}
		</div>
	)
}

interface Person {
	name: string
	class: string
	por: string
	image: string
	linkedin?: string
	website?: string
	email?: string
	instagram?: string
	behance?: string
}
function People({
	people,
	order,
}: {
	people: Person[]
	order: "asc" | "desc"
}) {
	const results = sortBy(people, ["class"]).map((person) => (
		<div
			className="group flex items-center gap-4 rounded-lg border border-red-950/70 bg-zinc-950/80 p-3 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-red-600/80 hover:bg-zinc-950 md:flex-col md:items-start"
			key={person.name}
		>
			<Image
				src={`/images/team/${person.image}`}
				alt={`Picture of ${person.name}`}
				width="200"
				height="200"
				className="h-24 w-24 rounded-lg border border-red-900/60 object-cover object-top shadow-lg shadow-red-950/40 transition duration-300 group-hover:border-red-500 md:h-44 md:w-full"
			/>
			<div>
				<p className="text-lg font-medium text-white">
					{person.name} ‘{person.class}
				</p>
				<p className="text-base font-bold text-red-400">{person.por}</p>
				<Socials person={person} />
			</div>
		</div>
	))
	if (order === "desc") results.reverse()

	return (
		<div className="mt-12 grid gap-6 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
			{results}
		</div>
	)
}

export default function Team() {
	return (
		<Container className="bg-black bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_34rem)]">
			<section className="rounded-lg border border-red-950/70 bg-zinc-950/70 p-5 shadow-xl shadow-black/40">
				<h1 className="mb-4 text-center font-accent text-4xl font-bold tracking-wide text-red-500">
					FACULTY ADVISOR
				</h1>
				<div className="flex items-center justify-center gap-4 md:flex-col">
					<Image
						src="/images/team/raghav.jpeg"
						alt="Picture of Raghvendra Gautam"
						width="200"
						height="200"
						className="h-24 w-24 rounded-lg border border-red-900/60 object-cover object-top shadow-lg shadow-red-950/40 md:h-44 md:w-44"
					/>
					<div>
						<p className="text-lg font-medium text-white">
							Dr. Raghvendra Gautam
						</p>
					</div>
				</div>
			</section>
			<h1 className="mb-4 mt-6 text-center font-accent text-5xl font-bold tracking-wide text-red-500">
				CORE MEMBERS
			</h1>
			<p className="mx-auto max-w-2xl text-center text-lg text-zinc-300 sm:text-xl">
				We&apos;re a small team of facilitators with an ambitious mission and a
				proven track record of asking, &quot;How hard can it be?&quot; right
				before finding out.
			</p>
			<People people={team} order="asc" />
			<h2 className="mb-4 mt-16 text-center font-accent text-5xl font-bold tracking-wide text-red-500">
				ALUMNI
			</h2>
			<People people={alumni} order="asc" />
		</Container>
	)
}
