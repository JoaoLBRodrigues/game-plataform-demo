import { useQuery } from "@tanstack/react-query";
import apiClient, { type IFetchResponse } from "../services/api-client";

export interface IGenre {
	id: number;
	name: string;
}

const UseGenre = () => useQuery({
	queryKey: ['genres'],
	queryFn: () => apiClient.get<IFetchResponse<IGenre>>('/genres').then(res=> res.data),
	staleTime: 24 * 60 * 60 * 1000, // 24h 
	//initialData: {count:genres.lenght, results: genres}
});

export default UseGenre;
