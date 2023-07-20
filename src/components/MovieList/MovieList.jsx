import { Box, CircularProgress, Container, Pagination, Typography } from "@mui/material";
import { forwardRef } from "react";
import { useSmallerBreakpoint } from "../../utils/func/useSmallerBreakpoint";
import { MovieCards } from "./MovieCards";
import { useDispatch } from "react-redux";
import { setPaginatorCurrentPage } from "../../features/paginatorSlice";

export const MovieList = forwardRef((props, ref) => {
	const { currentPage, totalPages, moviesData } = props;
	const paginatorSize = useSmallerBreakpoint("sm") ? "medium" : "large";
	const dispatch = useDispatch();

	const handlePaginationChange = (_, page) => {
		dispatch(setPaginatorCurrentPage(page));
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
					/>
				) : (
					<CircularProgress sx={{ mt: "40vh" }} />
				)}
			</Box>
			{moviesData?.length ? (
				<Box sx={{ margin: "74px 0px", display: "flex", justifyContent: "center" }}>
					<Pagination
						count={totalPages}
						page={currentPage}
						onChange={handlePaginationChange}
						size={paginatorSize}
					/>
				</Box>
			) : null}
		</Container>
	);
});
