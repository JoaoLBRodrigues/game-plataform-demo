import { UseData } from "./UseData";
import type { IGenre } from "./UseGenre";

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
	genres?: IGenre[];
}

export const useGames = (selectedGenre: IGenre | null) =>
	UseData<IGames>("/games", { params: { genres: selectedGenre?.id } }, [
		selectedGenre?.id,
	]);
