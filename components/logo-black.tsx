import Image from "next/image"
import logo from "@/public/logo-black.png"

export default function Logo() {
	return <Image priority alt="Team Raftaar logo" width="120" src={logo}/>
}
