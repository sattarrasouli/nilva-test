'use client'

import Icon from "@/constants/icons/Icons"
import Link from "next/link"
import { usePathname } from "next/navigation"


function Dock() {
    const pathname = usePathname()

    return (
        <div className='fixed w-full bottom-0 flex flex-row justify-between items-end bg-white'>

            <Link href="profile" className='w-7 m-4 mt-1'>
                <Icon fill={pathname.includes('profile') ? "green" : '#B2BBB4'} name="profile" />
            </Link>

            <Link href="leagues" className='w-7 m-4 mt-1'>
                <Icon fill={pathname.includes('leagues') ? "green" : '#B2BBB4'} name="leagues" />
            </Link>

            <Link href="football" className='w-7 m-4 mt-1'>
                <Icon fill={pathname.includes('football') ? "green" : '#B2BBB4'} name="football" />
            </Link>

            <Link href="discover" className='w-7 m-4 mt-1'>
                <Icon fill={pathname.includes('discover') ? "green" : '#B2BBB4'} name="discover" />
            </Link>

            <Link href="matches" className='w-7 m-4 mt-1'>
                <Icon fill={pathname.includes('matches') ? "green" : '#B2BBB4'} name="matches" />
            </Link>
        </div >
    )
}

export default Dock
