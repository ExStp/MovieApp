import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { MovieList } from "../components/MovieList/MovieList";
import { Filters } from "../components/Filters/Filters";
import { Header } from "../components/Header/Header";

export function MainPage() {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const drawerWidth = isSmallScreen ? "100vw" : "540px";
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Header
				handleDrawerOpen={handleDrawerOpen}
				open={open}
				drawerWidth={drawerWidth}
			></Header>
			<Filters drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose} open={open} />
			<MovieList open={open} drawerWidth={drawerWidth} isSmallScreen={isSmallScreen}/>
		</Box>
	);
}
