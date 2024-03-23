import Image from "next/image"
import logo from "@/public/logo.png"

export default function Logo() {
	return (
		<Image
			priority
			alt="Team Raftaar logo"
			width="100"
			src={logo}
		/>
	)
}
