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
	const [error, setError] = useState(null);

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
		const fetchData = async () => {
			try {
				const moviesData = await getFavoriteMovies();
				if (moviesData === EMPTY_ARR) throw Error(API.ERRORS.CORS_ERROR);
				setFavoriteMovies(moviesData);
				setIsFavoritesLoaded(true);
				setError(null);
			} catch (error) {
				setError(error);
				setIsFavoritesLoaded(false);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		setPaginator(initPaginator);
	}, [searchQuery]);

	useEffect(() => {
		if (!isFavoritesLoaded || !favoriteMovies) return;

		const fetchData = async () => {
			try {
				let movies;
				if (searchQuery.trim() === EMPTY_STRING) {
					movies = await API.fetchGetMovies(sortRating, currentPage);
				} else {
					movies = await API.fetchGetSearchMovie(searchQuery, currentPage);
				}
				if (!movies) throw new Error(API.ERRORS.CORS_ERROR);

				const mappedMovies = mapMoviesData(movies, favoriteMovies);
				setPaginator((prevState) => ({
					...prevState,
					totalPages:
						searchQuery.trim() === EMPTY_STRING
							? initPaginator.totalPages
							: movies.total_pages,
				}));
				setMoviesData(mappedMovies);
				setError(null);
				scrollUp(containerRef);
			} catch (error) {
				setError(error);
			}
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
					error ? (
						<SimpleAlert placeholder={API.ERRORS.CORS_ERROR} severity="warning" />
					) : (
						<MovieList
							paginator={paginator}
							setPaginator={setPaginator}
							setFavoriteMovies={setFavoriteMovies}
							moviesData={moviesData}
						/>
					)
				) : (
					<SimpleAlert placeholder={API.ERRORS.AUTH_FALSE} severity="warning" />
				)}
			</Main>
		</Box>
	);
}
