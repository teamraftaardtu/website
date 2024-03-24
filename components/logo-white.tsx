import Image from "next/image"
import logo from "@/public/logo-white.png"

export default function Logo() {
	return <Image priority alt="Team Raftaar logo" width="85" src={logo} className="md:hidden"/>
}
