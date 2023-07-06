import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { MovieList } from "../../components/MovieList/MovieList";
import { Navbar } from "../../layout/Navbar";
import { Header } from "../../layout/Header";
import { Main } from "../../layout/Main";
import { Filters } from "../../components/Filters/Filters";
import { useSmallerBreakpoint } from "../../utils/func/useSmallerBreakpoint";
import { useFilters } from "../../context/FiltersProvider";
import { usePaginator } from "../../context/PaginatorProvider";
import API from "../../services/TMDB/API";
import { scrollUp } from "../../utils/func/scrollUp";
import { useNavbar } from "../../context/NavbarProvider";

export function MainPage() {
	const isSmallScreen = useSmallerBreakpoint("sm");
	const drawerWidth = isSmallScreen ? "100vw" : "360px";
	const [open, setOpen] = useNavbar();
	const containerRef = useRef(null);
	const [currentPage, setCurrentPage] = usePaginator();
	const [moviesData, setMoviesData] = useState(null);
	const [filters] = useFilters();

	useEffect(() => {
		API.fetchMovies(filters.sortRating, currentPage).then((response) => {
			setMoviesData(response);
			scrollUp(containerRef);
		});

		console.log("useEffect");
	}, [currentPage, filters.sortRating]);

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
			<Main
				open={open}
				drawerWidth={drawerWidth}
				isSmallScreen={isSmallScreen}
				ref={containerRef}
			>
				<MovieList
					currentPage={currentPage}
					moviesData={moviesData}
					setCurrentPage={setCurrentPage}
				/>
			</Main>
		</Box>
	);
}
