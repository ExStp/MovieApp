import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import { MovieCard } from "../MovieCard/MovieCard";
import { forwardRef } from "react";
// Удалил useTheme
import { useSmallerBreakpoint } from "../../utils/func/useSmallerBreakpoint";
import { ModeNight } from "@mui/icons-material";

export const MovieList = forwardRef((props, ref) => {
	const {
		moviesData,
		currentPage,
		setCurrentPage,
		favoriteMovies,
		setFavoriteMovies,
		totalPages,
	} = props;
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
					moviesData.map((movie) => (
						<MovieCard
							key={movie.id}
							movieInfo={movie}
							isFavorite={movie.isFavorite}
							favoriteMovies={favoriteMovies}
							setFavoriteMovies={setFavoriteMovies}
						/>
					))
				) : (
					<CircularProgress sx={{ mt: "40vh" }} />
				)}
			</Box>
			{moviesData ? (
				<Box sx={{ margin: "74px 0px", display: "flex", justifyContent: "center" }}>
					<Pagination
						count={totalPages}
						page={currentPage}
						onChange={(event, page) => setCurrentPage(page)}
						size={paginatorSize}
					/>
				</Box>
			) : null}
		</Container>
	);
});
