import {
	FaXbox,
	FaPlaystation,
	FaLaptop,
	FaApple,
	FaLinux,
	FaWindows,
} from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { Box, Icon } from "@mui/material";
import type { IconType } from "react-icons";
import type { Platform } from "../hooks/useGames";

interface Props {
	platforms: Platform[];
}

export const Platforms = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		computer: FaLaptop,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: GiConsoleController,
		windows: FaWindows,
		apple: FaApple,
		linux: FaLinux,
		android: FaWindows, // Corrected typo from 'andoid' to 'android'
	};

	return (
		<Box display="flex" px={1}>
			{platforms.map((platform) => {
				const IconComponent = iconMap[platform.slug];
				return IconComponent ? (
					<Icon key={platform.slug} style={{ padding: "5px" }}>
						<IconComponent />
					</Icon>
				) : null;
			})}
		</Box>
	);
};
