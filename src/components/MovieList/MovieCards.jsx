import { Typography } from "@mui/material";
import { MovieCard } from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";

export function MovieCards({ moviesData }) {
	const favoriteMoviesId = useSelector((state) => state.films.favoriteFilmsId);
	
	if (!moviesData?.length) {
		return (
			<Typography variant="body1" mt={8}>
				Ничего не найдено
			</Typography>
		);
	}
	return moviesData.map((movie) => (
		<MovieCard
			key={movie.id}
			movieInfo={movie}
			isFavorite={movie.isFavorite}
			favoriteMoviesId={favoriteMoviesId}
		/>
	));
}
