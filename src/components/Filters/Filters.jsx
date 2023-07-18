import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { SortRating } from "./SortRating";
import { SortGenres } from "./SortGenres";
import API from "../../services/TMDB/API";
import { SortYear } from "./SortYear";
import { SearchQuery } from "./SearchQuery";

export function Filters({ filters }) {
	const [genreOptions, setGenreOptions] = useState(null);
	const { searchQuery, sortRating, sortGenres, sortYear } = filters;

	useEffect(() => {
		API.fetchGetGenres().then((genres) => setGenreOptions(genres));
	}, []);

	return (
		<Container>
			<SearchQuery searchQuery={searchQuery} />
			<SortRating sortRating={sortRating} />
			<SortGenres disabled={true} genreOptions={genreOptions} sortGenres={sortGenres} />
			<SortYear disabled={true} sortYear={sortYear} />
		</Container>
	);
}
