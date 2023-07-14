import { Box, CircularProgress, Container, Pagination } from "@mui/material";
import { forwardRef } from "react";
import { useSmallerBreakpoint } from "../../utils/func/useSmallerBreakpoint";
import { MovieCards } from "./MovieCards";

export const MovieList = forwardRef((props, ref) => {
	const { paginator, setPaginator, moviesData, favoriteMovies, setFavoriteMovies } = props;
	const paginatorSize = useSmallerBreakpoint("sm") ? "medium" : "large";

	const handlePaginationChange = (event, page) => {
		setPaginator({ ...paginator, currentPage: page });
	};

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
					<MovieCards
						moviesData={moviesData}
						favoriteMovies={favoriteMovies}
						setFavoriteMovies={setFavoriteMovies}
					/>
				) : (
					<CircularProgress sx={{ mt: "40vh" }} />
				)}
			</Box>
			{moviesData?.length ? (
				<Box sx={{ margin: "74px 0px", display: "flex", justifyContent: "center" }}>
					<Pagination
						count={paginator.totalPages}
						page={paginator.currentPage}
						onChange={handlePaginationChange}
						size={paginatorSize}
					/>
				</Box>
			) : null}
		</Container>
	);
});
