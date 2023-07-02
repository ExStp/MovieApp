import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import { MovieCard } from "../MovieCard/MovieCard";
import { useEffect, useRef, useState } from "react";
import API from "../../services/API";
// Удалил useTheme
import { usePaginator } from "../../context/PaginatorProvider";
import { useFilters } from "../../context/FiltersProvider";
import { useSmallerBreakpoint } from "../../utils/func/useSmallerBreakpoint";

export function MovieList() {
	const [moviesData, setMoviesData] = useState(null);
	const containerRef = useRef(null);
	const paginatorSize = useSmallerBreakpoint('sm') ? "medium" : "large";
	const [currentPage, setCurrentPage] = usePaginator();
	const [filters] = useFilters();

	useEffect(() => {
		if (filters.sortRating === "popular_list") {
			API.fetchPopularList(currentPage).then((response) => {
				setMoviesData(response);
				scrollUp();
			});
		}
		if (filters.sortRating === "top_rated_list") {
			API.fetchTopRatedList(currentPage).then((response) => {
				setMoviesData(response);
				scrollUp();
			});
		}

		console.log("useEffect");
	}, [currentPage, filters.sortRating]);

	function scrollUp() {
		if (!containerRef.current) return
			containerRef.current.scrollIntoView();
	}

	return (
		<Container>
			<Box
				ref={containerRef}
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-around",
					columnGap: "8px",
					rowGap: "16px",
				}}
			>
				{moviesData ? (
					moviesData.results.map((movie) => (
						<MovieCard key={movie.id} movieInfo={movie} />
					))
				) : (
					<CircularProgress />
				)}
			</Box>
			<Box sx={{ margin: "64px 0px", display: "flex", justifyContent: "center" }}>
				{moviesData ? (
					<Pagination
						count={50}
						page={currentPage}
						onChange={(event, page) => setCurrentPage(page)}
						size={paginatorSize}
					/>
				) : null}
			</Box>
		</Container>
	);
}
