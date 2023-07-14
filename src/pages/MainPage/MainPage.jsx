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
import { initPaginator, usePaginator } from "../../context/PaginatorProvider";
import API from "../../services/TMDB/API";
import { scrollUp } from "../../utils/func/scrollUp";
import { useNavbar } from "../../context/NavbarProvider";
import { useAuth } from "../../context/AuthProvider";
import { getFavoriteMovies } from "../../utils/func/getFavoriteMovies";
import { EMPTY_ARR, EMPTY_STRING } from "../../utils/constants/CONST";
import { SimpleAlert } from "../../components/Alerts/SimpleAlert";
import { mapMoviesData } from "../../utils/func/mapMoviesData.js";

export function MainPage() {
	const [isFavoritesLoaded, setIsFavoritesLoaded] = useState(false);
	const [favoriteMovies, setFavoriteMovies] = useState(EMPTY_ARR);
	const [moviesData, setMoviesData] = useState(null);
	const containerRef = useRef(null);

	const [paginator, setPaginator] = usePaginator();
	const [filters, filtersDispatch] = useFilters();
	const [auth, authDispatch] = useAuth();
	const [open, setOpen] = useNavbar();

	const searchQuery = filters.searchQuery;
	const sortRating = filters.sortRating;
	const currentPage = paginator.currentPage;
	const isSmallScreen = useSmallerBreakpoint("sm");
	const drawerWidth = isSmallScreen ? "100vw" : "360px";

	useEffect(() => {
		getFavoriteMovies().then((moviesData) => {
			setFavoriteMovies(moviesData);
			setIsFavoritesLoaded(true);
		});
	}, []);

	useEffect(() => {
		setPaginator(initPaginator);
	}, [searchQuery]);

	useEffect(() => {
		if (!isFavoritesLoaded || !favoriteMovies) return;

		const fetchData = async () => {
			let movies;
			if (searchQuery.trim() === EMPTY_STRING) {
				movies = await API.fetchGetMovies(sortRating, currentPage);
			} else {
				movies = await API.fetchGetSearchMovie(searchQuery, currentPage);
			}

			const mappedMovies = mapMoviesData(movies, favoriteMovies);
			setPaginator((prevState) => ({
				...prevState,
				totalPages:
					searchQuery.trim() === EMPTY_STRING
						? initPaginator.totalPages
						: movies.total_pages,
			}));
			setMoviesData(mappedMovies);
			scrollUp(containerRef);
		};

		fetchData();
	}, [currentPage, favoriteMovies, searchQuery, isFavoritesLoaded, sortRating]);

	function handleNavbarOpen() {
		if (!auth.isLogin) return;
		setOpen(true);
	}

	function handleNavbarClose() {
		setOpen(false);
	}

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Header handleDrawerOpen={handleNavbarOpen} open={open} drawerWidth={drawerWidth} />
			<Navbar drawerWidth={drawerWidth} handleDrawerClose={handleNavbarClose} open={open}>
				<Filters filters={filters} filtersDispatch={filtersDispatch} />
			</Navbar>
			<Main
				open={open}
				drawerWidth={drawerWidth}
				isSmallScreen={isSmallScreen}
				ref={containerRef}
			>
				{auth.isLogin ? (
					<MovieList
						paginator={paginator}
						setPaginator={setPaginator}
						favoriteMovies={favoriteMovies}
						setFavoriteMovies={setFavoriteMovies}
						moviesData={moviesData}
					/>
				) : (
					<SimpleAlert placeholder="Необходима авторизация" severity="warning" />
				)}
			</Main>
		</Box>
	);
}
