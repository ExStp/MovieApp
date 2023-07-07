import { Box, Typography } from "@mui/material";
import { FilmDetailsTable } from "../components/FilmDetailsTable/FilmDetailsTable";
import API from "../services/TMDB/API";

export function MovieInfo({ filmDetails, filmCredits }) {
	const { backdrop_path, poster_path, title, original_title, overview } = filmDetails;

	const imgURL = API.URL.IMG.W400 + poster_path || backdrop_path;

	return (
		<Box sx={{ mt: 14 }}>
			<Typography variant="h4" mb="20px">
				{title}
			</Typography>
			<Typography variant="body1">{original_title}</Typography>
			<Typography variant="body1">{overview}</Typography>
			<Box sx={{ mt: 5, display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
				<FilmDetailsTable filmData={filmDetails} />
				<img src={imgURL} alt="Movie Poster" />
			</Box>
		</Box>
	);
}
