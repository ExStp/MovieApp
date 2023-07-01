import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { MovieList } from "../components/MovieList/MovieList";
import { Navbar } from "../layout/Navbar";
import { Header } from "../layout/Header";
import { Main } from "../layout/Main";
import { Filters } from "../components/Filters/Filters";
import { PaginatorProvider } from "../context/PaginatorProvider";

export function MainPage() {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const drawerWidth = isSmallScreen ? "100vw" : "360px";
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
			<Navbar drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose} open={open}>
				<Filters />
			</Navbar>
			<PaginatorProvider>
				<Main open={open} drawerWidth={drawerWidth} isSmallScreen={isSmallScreen}>
					<MovieList key={"MoviesList"} />
				</Main>
			</PaginatorProvider>
		</Box>
	);
}
