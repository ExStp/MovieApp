import { Autocomplete, Box, CircularProgress, TextField } from "@mui/material";

export function SortGenres({ genreOptions, sortGenres, ...props }) {
	if (!genreOptions?.length) {
		return (
			<Box sx={{ display: "flex", justifyContent: "center", paddingTop: "32px" }}>
				<CircularProgress />
			</Box>
		);
	}
	return (
		<Autocomplete
			{...props}
			sx={{ width: "100%", paddingTop: "32px" }}
			multiple
			limitTags={4}
			id="multiple-limit-tags"
			options={genreOptions}
			getOptionLabel={(option) => option.name}
			renderInput={(params) => (
				<TextField {...params} label="Жанры" placeholder="Favorites" />
			)}
		/>
	);
}
