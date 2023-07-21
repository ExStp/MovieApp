import { Stack } from "@mui/material";
import { SortRating } from "./SortRating";
import { SortGenres } from "./SortGenres";
import { SortYear } from "./SortYear";
import { SearchQuery } from "./SearchQuery";

export function Filters({ filters }) {
	const { searchQuery, sortRating, sortGenres, sortYear } = filters;
	const isSearchActive = searchQuery !== "";

	return (
		<Stack spacing={4} sx={{ padding: "0 16px", overflow: "hidden"}}>
			<SearchQuery searchQuery={searchQuery} />
			<SortRating disabled={isSearchActive} sortRating={sortRating} />
			<SortGenres disabled={isSearchActive} sortGenres={sortGenres} />
			<SortYear disabled={isSearchActive} sortYear={sortYear} />
		</Stack>
	);
}
