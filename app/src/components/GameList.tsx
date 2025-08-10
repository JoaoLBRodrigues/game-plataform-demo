import { Grid } from "@mui/material";
import GameCard, { type Props } from "./GameCard";
import { instance } from "../services/api-client";
import { useEffect, useState } from "react";

export default function GameList() {
	const [data, setData] = useState([]);

	useEffect(() => {
		instance({
			url: "games",
			method: "get",
		}).then((response) => {
			setData(response.data.results);
			console.log(response.data.results);
		});
	}, []);

	return (
		<Grid container size={12} spacing={1} my={5}>
			{data.map((item: Props, index: number) => (
				<Grid size={{ md: 3, xs: 12 }}>
					<GameCard
						key={index}
						name={item.name}
						background_image={item.background_image}
					/>
				</Grid>
			))}
		</Grid>
	);
}
