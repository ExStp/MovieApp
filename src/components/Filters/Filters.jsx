import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { SortRating } from "./SortRating";
import { SortGenres } from "./SortGenres";
import API from "../../services/TMDB/API";
import { SortYear } from "./SortYear";
import { SearchQuery } from "./SearchQuery";

export function Filters({ filters, filtersDispatch }) {
	const [genreOptions, setGenreOptions] = useState(null);

	useEffect(() => {
		API.fetchGetGenres().then((genres) => setGenreOptions(genres));
	}, []);

	function handleSubmitSearchQuery(event) {
		filtersDispatch({ type: "searchQuey_changed", newValue: event.target.value });
	}

	return (
		<Container>
			<SearchQuery searchValue={filters.searchQuery} filtersDispatch={filtersDispatch} />
			<SortRating selectValue={filters.sortRating} filtersDispatch={filtersDispatch} />
			<SortGenres disabled={true} genreOptions={genreOptions} />
			<SortYear disabled={true} />
		</Container>
	);
}
