import { UseData } from "./UseData";

export interface plataform {
	id: number;
	name: string;
	slug: string;
}

const UsePlataforrms = () => UseData<plataform>("/platforms/lists/parents");

export default UsePlataforrms;
