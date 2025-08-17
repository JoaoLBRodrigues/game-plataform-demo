import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import GameCard, { type Props } from "./GameCard";
import { useGames } from "../hooks/useGames";
import GenreLIst from "./GenreLIst";
import { useEffect, useState } from "react";
import { type IGenre } from "../hooks/UseGenre";

export default function GameList() {
	const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);
	const { error, data, isLoading } = useGames(selectedGenre);

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
				<Grid container size={12} my={5}>
					<Typography color="red">{error}</Typography>
					<Grid size={{ md: 1, xs: 12 }}>
						<GenreLIst
							selected={selectedGenre}
							selectedGenre={(genre) => setSelectedGenre(genre)}
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
							{data.map((item: Props, index: number) => (
								<Grid size={{ xs: 12, md: 3 }} key={index}>
									<GameCard
										name={item.name}
										background_image={item.background_image}
										parent_platforms={item.parent_platforms}
										metacritic={item.metacritic}
									/>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			)}
		</>
	);
}
