
import { ApiKey } from "../assets/ApiKey";
import axios from "axios";

export interface IFetchResponse<T> {
	count: number;
	results: T[];
}

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: ApiKey,
	},
});
