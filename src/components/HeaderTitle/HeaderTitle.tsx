'use client'
import { iconsData } from "@/constants/icons/Icons";
import { usePathname } from "next/navigation";

function HeaderTitle() {

    const pathname = usePathname()
    const { svg, text } = iconsData[pathname.replace('/', '')]

    return (
        <div className='flex flex-row justify-between m-2 items-center'>
            <span>
                <p className='text-2xl font-bold font-IranSans'>{text}</p>
            </span>
            <span className='h-auto w-12'>
                <div dangerouslySetInnerHTML={{ __html: svg.replace('fill=\'#B2BBB4\'', `fill='${'#000'}'`) }} />
            </span>
        </div>
    )
}

export default HeaderTitle