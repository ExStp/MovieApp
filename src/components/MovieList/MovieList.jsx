import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import { MovieCard } from "../MovieCard/MovieCard";
import { useEffect, useRef, useState } from "react";
import API from "../../services/API";
import { useTheme, useMediaQuery } from "@mui/material";
import { usePaginator } from "../../context/PaginatorProvider";

export function MovieList() {
	const [moviesData, setMoviesData] = useState(null);
	const containerRef = useRef(null);
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const paginatorSize = isSmallScreen ? "medium" : "large";
	const [currentPage, setCurrentPage] = usePaginator();

	const handlePageChange = (event, page) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		API.fetchPopularList(currentPage).then((response) => {
			setMoviesData(response);
			if (containerRef.current) {
				containerRef.current.scrollIntoView();
			}
		});
		console.log("useEffect");
	}, [currentPage]);

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
						onChange={handlePageChange}
						size={paginatorSize}
					/>
				) : null}
			</Box>
		</Container>
	);
}
