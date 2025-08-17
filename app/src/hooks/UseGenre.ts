import { UseData } from "./UseData";

export interface IGenre {
	id: number;
	name: string;
}

const UseGenre = () => UseData<IGenre>("/genres");

export default UseGenre;
