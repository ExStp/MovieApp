import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Checkbox } from "@mui/material";
import API from "../../services/TMDB/API";
import { Link } from "react-router-dom";
import { MovieFavoriteBtn } from "../MovieFavoriteBtn/MovieFavoriteBtn";

export function MovieCard({ movieInfo, isFavorite, favoriteMovies, setFavoriteMovies }) {
	const { poster_path, backdrop_path, title, vote_average, id } = movieInfo;

	const imgURL = API.URL.IMG.W400 + poster_path || backdrop_path;

	return (
		<Card
			elevation={3}
			sx={{
				width: 345,
				height: 545,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				"@media (max-width: 380px)": {
					width: 280,
					height: 445,
				},
			}}
		>
			<CardActionArea sx={{ overflow: "hidden" }}>
				<CardMedia
					sx={{ width: "100%", height: "auto" }}
					component="img"
					src={imgURL}
					alt="Карточка фильма"
				/>
			</CardActionArea>

			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignContent: "center",
					}}
				>
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{ display: "flex", alignItems: "center", gap: "10px" }}
					>
						<MovieFavoriteBtn
							key={id}
							movieId={id}
							isChecked={isFavorite}
							favoriteMovies={favoriteMovies}
							setFavoriteMovies={setFavoriteMovies}
						/>
						{vote_average}
					</Typography>
					<Link to={`infoPage/${id}`}>
						<Button size="small" color="primary" variant="outlined">
							Подробнее
						</Button>
					</Link>
				</Box>
			</CardContent>
			{/* <CardActions></CardActions> */}
		</Card>
	);
}
