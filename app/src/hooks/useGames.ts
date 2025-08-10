import apiClient from "../services/api-client";
import type { Props } from "../components/GameCard";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";

interface FetchGamesResponse {
	count: number;
	results: Props[];
}

export const useGames = () => {
	const [data, setData] = useState<Props[]>([]);
	const [error, setError] = useState();

	useEffect(() => {
		const controller = new AbortController();
		apiClient
			.get<FetchGamesResponse>("games", { signal: controller.signal })
			.then((response) => {
				setData(response.data.results);
				console.log(response.data.results);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			});

		return () => controller.abort();
	}, []);

	return { error, data };
};
