import { Grid, Typography } from "@mui/material";
import GameCard, { type Props } from "./GameCard";
import { useGames } from "../hooks/useGames";

export default function GameList() {
	const { error, data } = useGames();
	return (
		<Grid container size={12} spacing={1} my={5}>
			<Typography color="red">{error}</Typography>
			{data.map((item: Props, index: number) => (
				<Grid size={{ md: 3, xs: 12 }}>
					<GameCard
						key={index}
						name={item.name}
						background_image={item.background_image}
						parent_platforms={item.parent_platforms}
						metacritic={item.metacritic}
					/>
				</Grid>
			))}
		</Grid>
	);
}
