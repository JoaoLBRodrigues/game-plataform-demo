import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { Platforms } from "./PlataformIcons";
import { Box } from "@mui/material";
import { resizeImage } from "../utils/resizeImage";
import type { Game } from "../hooks/useGames";

interface Props {
	game: Game;
}

export default function GameCard({ game }: Props) {
	return (
		<Card>
			<CardHeader
				/** 
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
                    */
				title={game.name}
				//subheader="September 14, 2016"
			/>
			<CardMedia
				component="img"
				height="300"
				image={resizeImage(game.background_image)}
				alt="Paella dish"
			/>

			<CardActions disableSpacing>
				<Platforms platforms={game.parent_platforms} />
				<Box
					justifyContent="end"
					display="flex"
					sx={{
						backgroundColor: "lightblue",
						padding: "5px",
						borderRadius: "8px",
					}}
				>
					{game.metacritic}
				</Box>
			</CardActions>
		</Card>
	);
}
