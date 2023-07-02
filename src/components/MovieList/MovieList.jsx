import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import { MovieCard } from "../MovieCard/MovieCard";
import { forwardRef } from "react";
// Удалил useTheme
import { useSmallerBreakpoint } from "../../utils/func/useSmallerBreakpoint";

export const MovieList = forwardRef(({ moviesData, currentPage, setCurrentPage }, ref) => {
	const paginatorSize = useSmallerBreakpoint("sm") ? "medium" : "large";

	return (
		<Container ref={ref}>
			<Box
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
});
