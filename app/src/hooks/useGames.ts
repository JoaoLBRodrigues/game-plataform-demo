import { UseData } from "./UseData";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface IGames {
	name?: string;
	background_image: string;
	parent_platforms: [{ platform: Platform }];
	metacritic: number;
}

export const useGames = () => UseData<IGames>("/games");
