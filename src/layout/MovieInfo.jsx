import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { FilmDetailsTable } from "../components/FilmDetailsTable/FilmDetailsTable";
import API from "../services/TMDB/API";

export function MovieInfo({ filmDetails, filmCredits }) {
	const { backdrop_path, poster_path, title, original_title, overview } = filmDetails;

	const imgURL = API.URL.IMG.W400 + poster_path || backdrop_path;

	return (
		<Box sx={{ mt: 14 }}>
			<Typography variant="h4" sx={{ mb: 4 }}>
				{title}
			</Typography>
			<Typography variant="body1" sx={{ mb: 2 }}>
				{original_title}
			</Typography>
			<Typography variant="body1" sx={{ mb: 4 }}>
				{overview}
			</Typography>
			<Box
				sx={{
					mb: 5,
					display: "flex",
					justifyContent: "space-between",
					flexWrap: "wrap",
					rowGap: '30px',
					"@media (max-width: 600px)": {
						flexDirection: "column-reverse",
						alignItems: "center",
					},
				}}
			>
				<FilmDetailsTable filmData={filmDetails} />
				<img
					src={imgURL}
					alt="Movie Poster"
					style={{
						width: "auto",
						height: "auto",
						maxHeight: "100%",
						maxWidth: "100%",
					}}
				/>
			</Box>
		</Box>
	);
}
