import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import { MovieCard } from "../MovieCard/MovieCard";
import { forwardRef } from "react";
// Удалил useTheme
import { useSmallerBreakpoint } from "../../utils/func/useSmallerBreakpoint";
import { ModeNight } from "@mui/icons-material";
import { usePaginator } from "../../context/PaginatorProvider";

export const MovieList = forwardRef((props, ref) => {
	const { paginator, setPaginator, moviesData, favoriteMovies, setFavoriteMovies } = props;
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
						count={paginator.totalPages}
						page={paginator.currentPage}
						onChange={(event, page) =>
							setPaginator({ ...paginator, currentPage: page })
						}
						size={paginatorSize}
					/>
				</Box>
			) : null}
		</Container>
	);
});
