import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { Box, Switch } from "@mui/material";

function TopBar() {
	const label = { inputProps: { "aria-label": "Switch demo" } };
	const [checked, setChecked] = React.useState<boolean>(false);

	React.useEffect(() => {
		if (checked) {
			document.body.style.backgroundColor = "#070623";
		} else {
			document.body.style.backgroundColor = "#cfcfd6";
		}
	}, [checked]);

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<AdbIcon
						sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
					/>
					<Typography
						variant="h6"
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						GameApp
					</Typography>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							textAlign: "end",
							width: "100%",
						}}
					>
						<Switch
							checked={checked}
							onChange={() => setChecked(!checked)}
							{...label}
							color="default"
						/>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default TopBar;
