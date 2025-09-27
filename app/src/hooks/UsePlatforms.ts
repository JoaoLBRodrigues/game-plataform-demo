import { useQuery } from "@tanstack/react-query";

import apiClient, { type IFetchResponse } from "../services/api-client";

export interface plataform {
	id: number;
	name: string;
	slug: string;
}

const UsePlataforrms = () => useQuery({
	queryKey: ['plataforms'],
	queryFn: () => apiClient.get<IFetchResponse<plataform>>('/platforms/lists/parents').then(res=> res.data),
	staleTime: 24 * 60 * 60 * 1000, // 24h 
	//initialData: {count:genres.lenght, results: genres}
});

export default UsePlataforrms;
