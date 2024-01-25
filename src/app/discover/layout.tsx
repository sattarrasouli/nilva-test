import HeaderTitle from "../../components/HeaderTitle/HeaderTitle"

export default function MatchesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="p-4">
                <HeaderTitle />
            </div>
            {children}
        </section>
    )
}