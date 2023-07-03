import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { SortRating } from "./SortRating";
import { SortGenres } from "./SortGenres";
import API from "../../services/TMDB/API";
import { SortYear } from "./SortYear";
import { useFilters } from "../../context/FiltersProvider";

export function Filters() {
	const [genreOptions, setGenreOptions] = useState(null);

	const [filters, filtersDispatch] = useFilters();

	useEffect(() => {
		API.fetchGenres().then((genres) => setGenreOptions(genres));
	}, []);

	return (
		<Container>
			<SortRating filtersDispatch={filtersDispatch} selectValue={filters.sortRating} />
			<SortGenres genreOptions={genreOptions} />
			<SortYear />
		</Container>
	);
}
