import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";

interface Props {
	onSearch: (searchText: string) => void;
}

export const Search = ({ onSearch }: Props) => {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) onSearch(ref.current.value);
			}}
		>
			<TextField
				inputRef={ref}
				sx={{ width: "100%" }}
				placeholder="Search"
				id="demo-helper-text-aligned"
				slotProps={{
					input: {
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					},
				}}
			/>
		</form>
	);
};
