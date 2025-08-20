//import type { GameQuery } from "../components/GameList";
import { UseData } from "./UseData";
import type { IGenre } from "./UseGenre";
import type { plataform } from "./usePlatforms";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (
	selectedGenre: IGenre | null,
	selectedPlatform: plataform | null
) =>
	UseData<Game>(
		"/games",
		{
			params: {
				genres: selectedGenre?.id,
				platforms: selectedPlatform?.id,
				//ordering: gameQuery.sortOrder,
				//search: gameQuery.searchText,
			},
		},
		[selectedGenre, selectedPlatform]
	);

export default useGames;
