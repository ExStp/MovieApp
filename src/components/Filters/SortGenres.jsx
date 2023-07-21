import { Autocomplete, Box, CircularProgress, TextField } from "@mui/material";
import { useFetchGetGenresQuery } from "../../services/TMDB/tmdbService";

export function SortGenres({ sortGenres, ...props }) {
	const { data, isError, isLoading } = useFetchGetGenresQuery();
	const genreOptions = data?.genres;

	if (isLoading) {
		return (
			<Box sx={{ display: "flex", justifyContent: "center", paddingTop: "32px" }}>
				<CircularProgress />
			</Box>
		);
	}
	if (isError) {
		return (
			<Box sx={{ display: "flex", justifyContent: "center", paddingTop: "32px" }}>
				<h3>Не удалось загрузить</h3>
			</Box>
		);
	}
	return (
		<Autocomplete
			multiple
			limitTags={4}
			id="multiple-limit-tags"
			defaultChecked={[]}
			options={genreOptions}
			getOptionLabel={(option) => option.name}
			renderInput={(params) => (
				<TextField {...params} label="Жанры" placeholder="Favorites" />
			)}
		/>
	);
}
