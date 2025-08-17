import { CanceledError, type AxiosRequestConfig } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

interface IFetchResponse<T> {
	count: number;
	results: T[];
}

export const UseData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?: any[]
) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState();
	const [isLoading, setLoading] = useState(true);

	useEffect(
		() => {
			setLoading(true);
			const controller = new AbortController();
			apiClient
				.get<IFetchResponse<T>>(endpoint, {
					signal: controller.signal,
					...requestConfig,
				})
				.then((response) => {
					setData(response.data.results);
					console.log(response.data.results);
				})
				.then(() => setLoading(false))
				.catch((err) => {
					if (err instanceof CanceledError) return;
					setError(err.message);
				});

			return () => controller.abort();
		},
		deps ? [...deps] : [endpoint]
	);

	return { error, data, isLoading };
};
