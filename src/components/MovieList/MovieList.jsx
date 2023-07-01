import { Box, CircularProgress, Container } from "@mui/material";
import { MovieCard } from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";
import API from "../../services/API";

export function MovieList({}) {
	const [moviesData, setMoviesData] = useState(null);
	console.log(moviesData);

	useEffect(() => {
		API.fetchPopularList(1).then((response) => setMoviesData(response));
	}, []);

	return (
		<Container
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-around",
				columnGap: "8px",
				rowGap: "16px",
			}}
		>
			{moviesData ? (
				moviesData.results.map((movie) => <MovieCard key={movie.id} movieInfo={movie} />)
			) : (
				<CircularProgress />
			)}
		</Container>
	);
}
