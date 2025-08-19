import { Box, CircularProgress, Grid } from "@mui/material";
import GameCard from "./GameCard";
import { useEffect } from "react";
//import type { GameQuery } from "./GameList";
import useGames from "../hooks/useGames";
import type { IGenre } from "@/hooks/UseGenre";

interface Props {
	//gameQuery: GameQuery;
	selectedGenre: IGenre | null;
}

export default function GridGames({ selectedGenre }: Props) {
	const { data, isLoading } = useGames(selectedGenre);

	useEffect(() => {}, []);
	return (
		<>
			{isLoading ? (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						minHeight: "100vh",
					}}
				>
					<CircularProgress />
				</Box>
			) : (
				<>
					<Grid container spacing={1} size={10}>
						{data.map((game) => (
							<Grid size={{ xs: 12, md: 3 }} key={game.id}>
								<GameCard game={game} />
							</Grid>
						))}
					</Grid>
				</>
			)}
		</>
	);
}
