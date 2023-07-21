import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { SortRating } from "./SortRating";
import { SortGenres } from "./SortGenres";
import { SortYear } from "./SortYear";
import { SearchQuery } from "./SearchQuery";

export function Filters({ filters }) {
	const { searchQuery, sortRating, sortGenres, sortYear } = filters;

	return (
		<Container>
			<SearchQuery searchQuery={searchQuery} />
			<SortRating sortRating={sortRating} />
			<SortGenres sortGenres={sortGenres} />
			<SortYear disabled={true} sortYear={sortYear} />
		</Container>
	);
}
