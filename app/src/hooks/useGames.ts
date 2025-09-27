//import type { GameQuery } from "../components/GameList";
import {  useQuery } from "@tanstack/react-query";
import apiClient, { type IFetchResponse } from "../services/api-client";
import type { GameQuery } from "../components/GameList";

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

const useGames = (gameQuery: GameQuery) => useQuery<IFetchResponse<Game>, Error>({
	queryKey: ['games', gameQuery],
	queryFn: () => apiClient.get('/games', {
		params: {
			genres: gameQuery.genre?.id,
			platforms: gameQuery.platform?.id,
			//ordering: gameQuery.sortOrder,
			//search: gameQuery.searchText,
		},
	}).then(res => res.data)
})
export default useGames;
