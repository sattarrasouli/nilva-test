import { DateLinkProps } from "@/constants/interfaces/interfaces";

const DateLink: React.FC<DateLinkProps> = ({ label, onClick, isActive }) => (
    <a
        onClick={onClick}
        className={`font-IranSans text-nowrap text-lg ml-10 ${isActive && 'border-b-[5px]'} border-TextGreen pb-3`}
    >
        {label}
    </a>
);

export default DateLink