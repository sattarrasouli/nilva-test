'use client'
import LoaderCss from '@/components/LoaderCss/LoaderCss';
import { ILeagues, IMatch } from '@/constants/interfaces/interfaces';
import useFetch from '@/hook/FetchApi/FetchApi';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { MatchItem } from './MatchItem';

const MatchSectionDropDown: React.FC = () => {
    const [openLeagues, setOpenLeagues] = useState<string[]>([]);
    const searchParams = useSearchParams()
    const date = searchParams.get('date')

    const { data, error, loading } = useFetch(
        `https://core-sport-api.zarebin.ir/api/football/fixtures/?date=${date}`
    );

    const handleDropDown = (leagueId: string) => {
        setOpenLeagues((prevOpenLeagues) =>
            prevOpenLeagues.includes(leagueId)
                ? prevOpenLeagues.filter((id) => id !== leagueId)
                : [...prevOpenLeagues, leagueId]
        );
    };

    return (
        <div className="flex flex-col w-full pb-14">
            {!loading && error && <p className='font-IranSansLight w-full text-center '>مشکلی پیش آمده! </p>}
            {loading && <div className='w-full mt-20 flex justify-center'><LoaderCss /></div>}
            {!loading && data && data?.all?.length === 0 && <p className='font-IranSansLight w-full text-center '> در حال حاضر مسابقه‌ای در این روز در دسترس نیست!</p>}
            {
                !loading && data &&
                data?.all?.map((league: ILeagues) => (
                    <div
                        key={league.id}
                        className={`flex flex-col my-3 text-left w-full bg-white shadow-md rounded-md overflow-hidden transition-max-height duration-500 ease-in-out ${openLeagues.includes(league.id) ? '' : 'max-h-14'
                            }`}
                    >
                        <button
                            onClick={() => handleDropDown(league.id)}
                            className="flex flex-row justify-between w-full border-b p-3 border-DefaultGray"
                        >
                            <div className="flex">
                                <img
                                    alt="team-logo"
                                    src={league.logo}
                                    loading="lazy"
                                    width={25}
                                    height={20}
                                    className="rounded-full"
                                />
                                <span className="font-IranSans text-lg mx-2 text-blue">{league.name}</span>
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-6 h-6 transition transform duration-300 ${openLeagues.includes(league.id) ? '' : 'rotate-180'
                                        }`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            </div>
                        </button>
                        {openLeagues.includes(league.id) && (
                            <div className="flex flex-col p-2">
                                {league.fixtures.map((match: IMatch) => (
                                    <MatchItem key={match.id} match={match} />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default MatchSectionDropDown;