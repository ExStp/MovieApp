import { useState } from "react";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { MovieList } from "../components/MovieList/MovieList";
import { Navbar } from "../layout/Navbar";
import { Header } from "../layout/Header";
import { Main } from "../layout/Main";
import { Filters } from "../components/Filters/Filters";
import { PaginatorProvider } from "../context/PaginatorProvider";
import { useSmallerBreakpoint } from "../utils/func/useSmallerBreakpoint";

export function MainPage() {
	const isSmallScreen = useSmallerBreakpoint("sm");
	const drawerWidth = isSmallScreen ? "100vw" : "360px";
	const [open, setOpen] = useState(false);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Header
				handleDrawerOpen={() => setOpen(true)}
				open={open}
				drawerWidth={drawerWidth}
			></Header>
			<Navbar drawerWidth={drawerWidth} handleDrawerClose={() => setOpen(false)} open={open}>
				<Filters />
			</Navbar>
			<PaginatorProvider>
				<Main open={open} drawerWidth={drawerWidth} isSmallScreen={isSmallScreen}>
					<MovieList />
				</Main>
			</PaginatorProvider>
		</Box>
	);
}
