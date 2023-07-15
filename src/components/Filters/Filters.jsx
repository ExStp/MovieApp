import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { SortRating } from "./SortRating";
import { SortGenres } from "./SortGenres";
import API from "../../services/TMDB/API";
import { SortYear } from "./SortYear";
import { SearchQuery } from "./SearchQuery";
import { FILTER_ACTIONS } from "../../context/FiltersProvider";
import { DEFAULT_STATE } from "../../utils/constants/CONST";

export function Filters({ filters, filtersDispatch }) {
	const [genreOptions, setGenreOptions] = useState(DEFAULT_STATE);
	const filterController = { filters, filtersDispatch, FILTER_ACTIONS };

	useEffect(() => {
		API.fetchGetGenres().then((genres) => setGenreOptions(genres));
	}, []);

	return (
		<Container>
			<SearchQuery filterController={filterController} />
			<SortRating filterController={filterController} />
			<SortGenres disabled={true} filterController={filterController} genreOptions={genreOptions} />
			<SortYear disabled={true} />
		</Container>
	);
}
