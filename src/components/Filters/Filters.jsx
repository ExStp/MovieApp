import { Box, Button, Stack } from "@mui/material";
import { SortRating } from "./SortRating";
import { SortGenres } from "./SortGenres";
import { SortYear } from "./SortYear";
import { SearchQuery } from "./SearchQuery";
import { useDispatch } from "react-redux";
import { setDefaultFilters } from "../../features/filtersSlice";

export function Filters({ filters }) {
	const { searchQuery, sortRating, sortGenres, sortYear } = filters;
	const isSearchActive = searchQuery !== "";
	const dispatch = useDispatch();

	return (
		<Box
			sx={{
				height: "100%",
				padding: "32px 16px",
				overflow: "hidden",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Stack spacing={4}>
				<SearchQuery searchQuery={searchQuery} />
				<SortRating disabled={isSearchActive} sortRating={sortRating} />
				<SortGenres disabled={isSearchActive} sortGenres={sortGenres} />
				<SortYear disabled={isSearchActive} sortYear={sortYear} />
			</Stack>

			<Button size="large" variant="outlined" onClick={() => dispatch(setDefaultFilters())}>
				Сбросить
			</Button>
		</Box>
	);
}
