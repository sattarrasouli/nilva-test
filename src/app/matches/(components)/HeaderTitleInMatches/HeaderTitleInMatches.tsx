import Image from "next/image";
import ClockIcon from '@/assets/img/clock1.svg'

function HeaderTitleInMatches() {

    return (
        <div className='flex flex-row justify-between m-1 items-center bg-white'>
            <span>
                <p className='text-2xl font-bold font-IranSans'>نتایج زنده</p>
            </span>
            <span className='h-auto w-12'>
                <Image alt="icon-matches" src={ClockIcon} />
            </span>
        </div>
    )
}

export default HeaderTitleInMatches;