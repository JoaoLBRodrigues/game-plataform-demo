import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export interface Props {
	name: string;
	background_image: string;
}
export default function GameCard({ name, background_image }: Props) {
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
				image={background_image}
				alt="Paella dish"
			/>

			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
