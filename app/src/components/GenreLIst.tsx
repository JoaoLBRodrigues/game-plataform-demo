import { ListItemButton, ListItemText } from "@mui/material";
import UseGenre, { type IGenre } from "../hooks/UseGenre";

interface Props {
	selectedGenre: (genre: IGenre) => void;
	selected: IGenre | null;
}

export default function GenreLIst({ selectedGenre, selected }: Props) {
	const { data } = UseGenre();

	return (
		<>
			{data.map((item) => (
				<ListItemButton
					key={item.id}
					component="a"
					href="#simple-list"
					sx={{
						border: "1px solid gray",
						backgroundColor: item.id === selected?.id ? "blue" : "",
					}}
					onClick={() => selectedGenre(item)}
				>
					<ListItemText primary={item.name} />
				</ListItemButton>
			))}
		</>
	);
}
