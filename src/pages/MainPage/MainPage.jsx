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
import {
	initPaginator,
	setPaginatorCurrentPage,
	setPaginatorTotalPages,
} from "../../features/paginatorSlice";
import API from "../../services/TMDB/API";
import { scrollUp } from "../../utils/func/scrollUp";
import { getFavoriteMovies } from "../../utils/func/getFavoriteMovies";
import { EMPTY_ARR } from "../../utils/constants/CONST";
import { SimpleAlert } from "../../components/Alerts/SimpleAlert";
import { mapMoviesData } from "../../utils/func/mapMoviesData.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../features/navbarSlice";

const DEFAULT_STATE = null;
const EMPTY_STRING = "";

export function MainPage() {
	const dispatch = useDispatch();
	const [isFavoritesLoaded, setIsFavoritesLoaded] = useState(false);
	const [favoriteMovies, setFavoriteMovies] = useState(DEFAULT_STATE);
	const [moviesData, setMoviesData] = useState(DEFAULT_STATE);
	const containerRef = useRef(DEFAULT_STATE);
	const [error, setError] = useState(DEFAULT_STATE);

	const auth = useSelector(state => state.auth)
	const isNavbarOpen = useSelector((state) => state.navbar.isOpen);
	const { currentPage, totalPages } = useSelector((state) => state.paginator);
	const filters = useSelector((state) => state.filters);
	const { searchQuery, sortRating } = filters;

	const isSmallScreen = useSmallerBreakpoint("sm");
	const drawerWidth = isSmallScreen ? "100vw" : "360px";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const moviesData = await getFavoriteMovies();
				if (moviesData === EMPTY_ARR) throw Error(API.ERRORS.CORS_ERROR);
				setFavoriteMovies(moviesData);
				setIsFavoritesLoaded(true);
				setError(DEFAULT_STATE);
			} catch (error) {
				setError(error);
				setIsFavoritesLoaded(false);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		dispatch(setPaginatorCurrentPage(initPaginator.currentPage));
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
				dispatch(
					setPaginatorTotalPages(
						searchQuery.trim() === EMPTY_STRING
							? initPaginator.totalPages
							: movies.total_pages
					)
				);
				setMoviesData(mappedMovies);
				setError(DEFAULT_STATE);
				scrollUp(containerRef);
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}, [currentPage, favoriteMovies, searchQuery, isFavoritesLoaded, sortRating]);

	function handleNavbar() {
		if (!auth.isLogin) return;
		dispatch(toggleNavbar(!isNavbarOpen));
	}

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Header handleDrawerOpen={handleNavbar} open={isNavbarOpen} drawerWidth={drawerWidth} />
			<Navbar drawerWidth={drawerWidth} handleDrawerClose={handleNavbar} open={isNavbarOpen}>
				<Filters filters={filters} />
			</Navbar>
			<Main
				open={isNavbarOpen}
				drawerWidth={drawerWidth}
				isSmallScreen={isSmallScreen}
				ref={containerRef}
			>
				{error ? (
					<SimpleAlert placeholder={API.ERRORS.CORS_ERROR} severity="warning" />
				) : auth.isLogin ? (
					<MovieList
						currentPage={currentPage}
						totalPages={totalPages}
						setFavoriteMovies={setFavoriteMovies}
						moviesData={moviesData}
					/>
				) : (
					<SimpleAlert placeholder={API.ERRORS.AUTH_FALSE} severity="warning" />
				)}
			</Main>
		</Box>
	);
}
