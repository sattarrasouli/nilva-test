import { MouseEventHandler } from "react";

export interface IData {
    favorites: any;
    all: League[];
    pinned: any[];
    live: any[];
}

interface League {
    fixtures: Fixture[];
    logo: string;
    id: string;
    api_id: string;
    name: string;
    season: string;
}

interface Fixture {
    home: Team;
    away: Team;
    id: string;
    api_id: string;
    status: string;
    elapsed: number | null;
    start_time: string;
    home_goals: number | null;
    away_goals: number | null;
    home_penalty_goals: any;
    away_penalty_goals: any;
    live_url: string | null;
    archive_url: string | null;
}

interface Team {
    logo: string;
    id: number;
    api_id: number;
    name: string;
    is_favorite: boolean | null;
}


export interface IMatch {
    home: {
        logo: string;
        name: string;
    };
    away: {
        logo: string;
        name: string;
    };
    id: string;
    start_time: string;
}

export interface ILeagues {
    fixtures: IMatch[];
    logo: string;
    id: string;
    name: string;
    season: string;
}

export interface DateLinkProps {
    label: string;
    onClick: MouseEventHandler<HTMLAnchorElement>;
    isActive: boolean;
}


export interface IconData {
    svg: string;
    text: string;
}

export interface IconsData {
    [key: string]: IconData;
}

export interface IconProps {
    name: string;
    fill: string;
}
