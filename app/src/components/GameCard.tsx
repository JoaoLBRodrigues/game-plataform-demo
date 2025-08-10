import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { Platforms } from "./PlataformIcons";
import { Box } from "@mui/material";
import { resizeImage } from "../utils/resizeImage";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Props {
	name?: string;
	background_image: string;
	parent_platforms: [{ platform: Platform }];
	metacritic: number;
}

export default function GameCard({
	name,
	background_image,
	parent_platforms,
	metacritic,
}: Props) {
	const platforms = parent_platforms.map((item) => item.platform);
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
				title={name}
				//subheader="September 14, 2016"
			/>
			<CardMedia
				component="img"
				height="300"
				image={resizeImage(background_image)}
				alt="Paella dish"
			/>

			<CardActions disableSpacing>
				<Platforms platforms={platforms} />
				<Box
					justifyContent="end"
					display="flex"
					sx={{
						backgroundColor: "lightblue",
						padding: "5px",
						borderRadius: "8px",
					}}
				>
					{metacritic}
				</Box>
			</CardActions>
		</Card>
	);
}
