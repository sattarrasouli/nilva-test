'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MouseEventHandler, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import DateLink from "./TabItem";

function DateTabs() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const date = searchParams.get('date')
    const targetRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [nextDates, setNextDates] = useState<string[]>([])
    const router = useRouter()

    useLayoutEffect(() => {
        const today = getFormattedDate()
        router.push(pathname + '?' + createQueryString('date', today))
    }, [])

    useEffect(() => {
        if (isVisible) {
            generateNextDates(10)
        }
    }, [isVisible])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { root: null, rootMargin: '0px', threshold: 0.5 }
        );
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    function getFormattedDate(offset = 0) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + offset);
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const today = getFormattedDate();
    const yesterday = getFormattedDate(-1);
    const nextDay = getFormattedDate(1);

    const moment = require('jalali-moment');

    const months = ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند"];
    function convertToPersianDate(today: string) {
        const gregorianMoment = moment(today, 'YYYY-MM-DD');
        const persianMonthNumber = gregorianMoment.format('jMM');
        const persianDayNumber = gregorianMoment.format('jD');
        const monthIndex = parseInt(persianMonthNumber, 10) - 1;
        const persianMonthName = months[monthIndex];
        return `${persianDayNumber} ${persianMonthName}`;
    }

    const navigateToDate = (date: string): MouseEventHandler<HTMLAnchorElement> => (event) => {
        event.preventDefault();
        const newPath = pathname + '?' + createQueryString('date', date);
        router.push(newPath);
    };

    const generateNextDates = (start: number) => {
        const today = new Date();
        const newDates: string[] = [];
        const startDate = nextDates.length === 0 ? today : new Date(nextDates[nextDates.length - 1]);

        for (let i = 1; i <= start; i++) {
            const nextDate = new Date(startDate);
            nextDate.setDate(startDate.getDate() + i);
            newDates.push(nextDate.toISOString().split('T')[0]);
        }
        setNextDates((prevDates) => [...prevDates, ...newDates]);
    };

    return (
        <div className='w-full text-TextGray scrollbar-thin mt-4 flex flex-row overflow-x-scroll'>
            <DateLink onClick={navigateToDate(getFormattedDate(-1))} label={'دیروز'} isActive={date === yesterday || false} />
            <DateLink onClick={navigateToDate(getFormattedDate())} label={'امروز'} isActive={date === today || false} />
            <DateLink onClick={navigateToDate(getFormattedDate(1))} label={'فردا'} isActive={date === nextDay || false} />
            {
                nextDates.map((day, number) => (
                    day === getFormattedDate(1) ? null : (
                        <DateLink key={number} onClick={navigateToDate(day)} label={convertToPersianDate(day)} isActive={date === day || false} />
                    )
                ))
            }
            <div ref={targetRef}>...</div>
        </div >
    );
}

export default DateTabs;
