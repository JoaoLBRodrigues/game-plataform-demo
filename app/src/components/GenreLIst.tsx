import { ListItemButton, ListItemText } from "@mui/material";
import UseGenre, { type IGenre } from "../hooks/UseGenre";

interface Props {
	setSelectedGenre: (genre: IGenre) => void;
	selected: IGenre | null;
}

export default function GenreLIst({ selected, setSelectedGenre }: Props) {
	const { data } = UseGenre();

	console.log(selected);
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
					onClick={() => setSelectedGenre(item)}
				>
					<ListItemText primary={item.name} />
				</ListItemButton>
			))}
		</>
	);
}
