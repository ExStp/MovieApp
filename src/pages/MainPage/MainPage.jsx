import { useEffect, useRef, useState } from "react";
import { Alert, Typography, useTheme } from "@mui/material";
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
import { getCookieAuth, useAuth } from "../../context/AuthProvider";
import { getFavoriteMovies } from "../../utils/func/getFavoriteMovies";
import { EMPTY_ARR, EMPTY_STRING } from "../../utils/constants/CONST";
import { SimpleAlert } from "../../components/Alerts/SimpleAlert";

export function MainPage() {
	const isSmallScreen = useSmallerBreakpoint("sm");
	const drawerWidth = isSmallScreen ? "100vw" : "360px";
	const containerRef = useRef(null);
	const [moviesData, setMoviesData] = useState(null);
	const [currentPage, setCurrentPage] = usePaginator();
	const [open, setOpen] = useNavbar();
	const [filters, filtersDispatch] = useFilters();
	const [auth, authDispatch] = useAuth();
	const [favoriteMovies, setFavoriteMovies] = useState(EMPTY_ARR);
	const [isFavoritesLoaded, setIsFavoritesLoaded] = useState(false);
	const [totalPages, setTotalPages] = useState(null);
	const sortRating = filters.sortRating;
	const searchQuery = filters.searchQuery;
	//TODO: передалать totalPages - вынести в контекст

	useEffect(() => {
		getFavoriteMovies().then((moviesData) => {
			setFavoriteMovies(moviesData);
			setIsFavoritesLoaded(true);
		});
	}, []);

	useEffect(() => {
		setCurrentPage(1);
	}, [searchQuery]);

	useEffect(() => {
		if (searchQuery.trim() === EMPTY_STRING) return;
		if (!isFavoritesLoaded || !favoriteMovies) return;
		API.fetchGetSearchMovie(searchQuery, currentPage).then((movies) => {
			const mappedMovies = movies.results.map((movie) => {
				const isFavorite = favoriteMovies.includes(movie.id);
				return { ...movie, isFavorite };
			});
			setMoviesData(mappedMovies);
			scrollUp(containerRef);
		});
	}, [currentPage, favoriteMovies, searchQuery, isFavoritesLoaded, sortRating]);

	useEffect(() => {
		if (searchQuery.trim() !== EMPTY_STRING) return;
		if (!isFavoritesLoaded || !favoriteMovies) return;
		API.fetchGetMovies(sortRating, currentPage).then((movies) => {
			const mappedMovies = movies.results.map((movie) => {
				const isFavorite = favoriteMovies.includes(movie.id);
				return { ...movie, isFavorite };
			});
			setMoviesData(mappedMovies);
			scrollUp(containerRef);
		});
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
			<Header
				handleDrawerOpen={handleNavbarOpen}
				open={open}
				drawerWidth={drawerWidth}
			></Header>
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
						totalPages={totalPages}
						favoriteMovies={favoriteMovies}
						setFavoriteMovies={setFavoriteMovies}
						moviesData={moviesData}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				) : (
					<SimpleAlert placeholder={"Необходима авторизация"} severity={"warning"} />
				)}
			</Main>
		</Box>
	);
}

function getMappedFavoriteMovies(movies, favoriteMovies) {
	return movies.map((movie) => ({
		...movie,
		isFavorite: favoriteMovies.includes(movie.id),
	}));
}
