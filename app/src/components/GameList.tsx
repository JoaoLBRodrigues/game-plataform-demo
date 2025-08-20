import { type Platform } from "../hooks/useGames";
import { useState } from "react";
import { type IGenre } from "../hooks/UseGenre";
import GridGames from "./GridGames";
import { FormControl, Grid, MenuItem, Select } from "@mui/material";
import GenreLIst from "./GenreLIst";
import UsePlataforrms from "../hooks/usePlatforms";

export interface GameQuery {
	genre: IGenre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

export default function GameList() {
	//const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);
	//const [selectedPlatform, setSelectedGenre] = useState<IGenre | null>(null);

	const { data, error } = UsePlataforrms();

	if (error) return;
	console.log("platafor" + JSON.stringify(data));
	return (
		<>
			<Grid container justifyContent="center" mt={2} spacing={2}>
				<Grid
					size={3}
					display="flex"
					justifyContent="start"
					textAlign="start"
				>
					{/**Plataform */}
					<FormControl fullWidth>
						<Select id="demo-simple-select">
							<MenuItem value="" disabled>
								Select an platform
							</MenuItem>

							{data.map((p) => (
								<MenuItem value={10}>{p.name}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>

				<Grid
					size={3}
					display="flex"
					justifyContent="start"
					textAlign="start"
				>
					{/**Plataform */}
					<FormControl fullWidth>
						<Select id="demo-simple-select">
							<MenuItem value={10}>Relevant</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>
			<Grid container size={12} my={5}>
				<Grid size={{ md: 1, xs: 12 }}>
					<GenreLIst
						selected={selectedGenre}
						setSelectedGenre={(genre) => setSelectedGenre(genre)}
					/>
				</Grid>
				<Grid
					size={{ xs: 12, md: 11 }}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Grid container spacing={1} size={10}>
						<GridGames selectedGenre={selectedGenre} />
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}
