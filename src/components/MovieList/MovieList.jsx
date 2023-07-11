import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import { MovieCard } from "../MovieCard/MovieCard";
import { forwardRef } from "react";
// Удалил useTheme
import { useSmallerBreakpoint } from "../../utils/func/useSmallerBreakpoint";

export const MovieList = forwardRef((props, ref) => {
	const { favoriteMoviesArr, moviesData, currentPage, setCurrentPage } = props;
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
					moviesData.results.map((movie) =>
						favoriteMoviesArr.includes(movie.id) ? (
							<MovieCard key={movie.id} movieInfo={movie} isFavorite={true} />
						) : (
							<MovieCard key={movie.id} movieInfo={movie} isFavorite={false} />
						)
					)
				) : (
					<CircularProgress sx={{ mt: "40vh" }} />
				)}
			</Box>
			{moviesData ? (
				<Box sx={{ margin: "74px 0px", display: "flex", justifyContent: "center" }}>
					<Pagination
						count={50}
						page={currentPage}
						onChange={(event, page) => setCurrentPage(page)}
						size={paginatorSize}
					/>
				</Box>
			) : null}
		</Container>
	);
});
