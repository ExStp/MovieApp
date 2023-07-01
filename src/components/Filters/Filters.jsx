import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { SortRating } from "./SortRating";
import { SortGenres } from "./SortGenres";
import API from "../../services/API";
import { SortYear } from "./SortYear";
import { useFilters, useFiltersDispatch } from "../../context/FiltersProvider";

export function Filters() {
	const [genreOptions, setGenreOptions] = useState(null);

	const filterValues = useFilters();
	const filterDispatch = useFiltersDispatch();

	

	useEffect(() => {
		API.fetchGenres().then((genres) => setGenreOptions(genres));
	}, []);

	return (
		<Container>
			<SortRating filterDispatch={filterDispatch} selectValue={filterValues.sortRating} />
			<SortGenres genreOptions={genreOptions} />
			<SortYear />
		</Container>
	);
}
