'use client'
import { Suspense } from 'react';
import SearchInput from "@/components/SearchInputInHeader/SearchInput"
import HeaderTitleInMatches from "./(components)/HeaderTitleInMatches/HeaderTitleInMatches"
import DateTabs from "./(components)/TabsSection/Tabs"
import LoaderCss from "@/components/LoaderCss/LoaderCss"

export default function MatchesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Suspense fallback={<LoaderCss />}>
            <section>
                <div className="p-4 pb-0 bg-white">
                    <HeaderTitleInMatches />
                    <SearchInput />
                    <DateTabs />
                </div>
                {children}
            </section>
        </Suspense>
    )
}