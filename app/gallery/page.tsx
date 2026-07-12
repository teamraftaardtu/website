import Container from "@/components/container"

function Background() {
	return (
		<>
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_34rem)]" />
			<div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-15% to-zinc-900 to-50%" />
		</>
	)
}

export default function Gallery() {
	return (
		<main className="relative overflow-hidden bg-black text-white">
			<Background />
			<Container
				as="section"
				className="flex min-h-[65vh] items-center justify-center py-24 text-center"
			>
				<div className="max-w-3xl rounded-3xl border border-red-950/60 bg-zinc-950/80 px-8 py-12 shadow-2xl shadow-black/40 backdrop-blur-sm">
					<p className="mb-4 text-sm uppercase tracking-[0.4em] text-red-400">
						Gallery
					</p>
					<h1 className="font-accent text-5xl font-bold uppercase tracking-wide text-white md:text-6xl">
						Currently undergoing welding
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300 sm:text-xl">
						Our gallery is being built right now. Check back soon for finished
						photos and vehicle highlights.
					</p>
				</div>
			</Container>
		</main>
	)
}
