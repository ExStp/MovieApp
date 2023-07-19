import { Box, Typography } from "@mui/material";
import { FilmDetailsTable } from "../components/FilmDetailsTable/FilmDetailsTable";
import API from "../services/TMDB/API";

const EMPTY_OBJ = {}

export function MovieInfo({ movieInfo }) {
	if (movieInfo === EMPTY_OBJ) return null;
	const { details, credits } = movieInfo;

	const { backdrop_path, poster_path, title, original_title, overview } = details;
	const { cast, crew } = credits;
	const imgURL = API.URL.IMG.W400 + (poster_path || backdrop_path);

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
			<MovieTable details={details} imgURL={imgURL} />
		</Box>
	);
}

function MovieTable({ details, imgURL }) {
	return (
		<Box
			sx={{
				mb: 5,
				display: "flex",
				justifyContent: "space-between",
				columnGap: "10px",
				rowGap: "30px",
				"@media (max-width: 600px)": {
					flexDirection: "column-reverse",
					alignItems: "center",
				},
			}}
		>
			<FilmDetailsTable
				details={details}
				styles={{ flexBasis: "60%", maxWidth: 680, minWidth: 220 }}
			/>
			<Box
				sx={{
					flexBasis: "40%",
					maxWidth: "400px",
				}}
			>
				<img
					src={imgURL}
					alt="poster"
					style={{
						width: "auto",
						height: "auto",
						maxHeight: "100%",
						maxWidth: "100%",
						borderRadius: "6px",
					}}
				/>
			</Box>
		</Box>
	);
}
