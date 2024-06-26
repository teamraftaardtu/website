import Footer from "@/components/footer"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
	title: "Team Raftaar",
	description: "DTU's velomobile making technical team",
	metadataBase: new URL("https://teamraftaar.com/"),
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className="font-primary antialiased bg-zinc-900">
				<Navbar />
				{children}
				<SpeedInsights />
				<Footer />
			</body>
		</html>
	)
}
