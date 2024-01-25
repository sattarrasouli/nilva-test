import { IMatch } from "@/constants/interfaces/interfaces";

interface MatchItemProps {
    match: IMatch;
}

export const MatchItem: React.FC<MatchItemProps> = ({ match }) => {
    const startTime = new Date(match.start_time);
    const formattedTime = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false, });

    return (
        <div className="flex justify-between p-2 my-2 border-b border-DefaultGray">
            <div className="flex w-40 flex-row items-center">
                <span className="font-IranSansLight mx-1 max-w-[100px] truncate">{match.home.name}</span>
                <img src={match.home.logo} width={25} height={20} alt="team-a-logo" className="rounded-full" />
            </div>

            <div className="flex w-20 flex-row items-center mx-1">
                <span className="font-IranSansLight">{formattedTime}</span>
            </div>

            <div className="flex w-40 flex-row items-center">
                <img src={match.away.logo} width={25} height={20} alt="team-b-logo" className="rounded-full" />
                <span className="font-IranSansLight mx-1 max-w-[100px] truncate">{match.away.name}</span>
            </div>
        </div>


    );
};
