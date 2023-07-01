import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { SortRating } from "./SortRating";
import { SortGenres } from "./SortGenres";
import API from "../../services/API";

export function Filters() {
	const [genreOptions, setGenreOptions] = useState(null);

	useEffect(() => {
		API.fetchGenres().then((genres) => setGenreOptions(genres));
	}, []);

	return (
		<Container>
			<SortRating />
			<SortGenres genreOptions={genreOptions} />
		</Container>
	);
}
