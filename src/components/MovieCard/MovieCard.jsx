import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";

export function MovieCard({ movieInfo }) {
	const imgURL = `https://image.tmdb.org/t/p/w500${
		movieInfo?.poster_path || movieInfo?.backdrop_path
	}`;

	return (
		<Card
			sx={{
				width: 345,
				height: 545,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<CardActionArea sx={{ overflow: "hidden" }}>
				<CardMedia
					sx={{ width: "345px", height: "auto" }}
					component="img"
					src={imgURL}
					alt="green iguana"
				/>
			</CardActionArea>

			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{movieInfo.title}
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignContent: "center",
					}}
				>
					<Typography variant="body2" color="text.secondary">
						{"Рейтинг: " + movieInfo.vote_average}
					</Typography>
					<Button size="small" color="primary">
						Share
					</Button>
				</Box>
			</CardContent>
			{/* <CardActions></CardActions> */}
		</Card>
	);
}
