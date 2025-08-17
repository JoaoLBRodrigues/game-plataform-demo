import { ListItemButton, ListItemText } from "@mui/material";
import UseGenre from "../hooks/UseGenre";

export default function GenreLIst() {
	const { data } = UseGenre();
	return (
		<>
			{data.map((item) => (
				<ListItemButton
					component="a"
					href="#simple-list"
					sx={{ border: "1px solid gray" }}
				>
					<ListItemText primary={item.name} />
				</ListItemButton>
			))}
		</>
	);
}
