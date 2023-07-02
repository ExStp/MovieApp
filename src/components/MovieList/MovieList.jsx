import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import { MovieCard } from "../MovieCard/MovieCard";
import { useEffect, useRef, useState } from "react";
import API from "../../services/API";
// Удалил useTheme
import { usePaginator } from "../../context/PaginatorProvider";
import { useFilters } from "../../context/FiltersProvider";
import { useSmallerBreakpoint } from "../../utils/func/useSmallerBreakpoint";

export function MovieList({ moviesData, currentPage, setCurrentPage }) {
	const paginatorSize = useSmallerBreakpoint("sm") ? "medium" : "large";



	return (
		<Container>
			<Box
				// ref={containerRef}
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
