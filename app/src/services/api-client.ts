import { apiKey } from "../assets/ApiKey";
import axios from "axios";

export const instance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: apiKey,
	},
});
