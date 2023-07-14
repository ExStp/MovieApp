import { Typography } from "@mui/material";
import { MovieCard } from "../MovieCard/MovieCard";

export function MovieCards({ moviesData, favoriteMovies, setFavoriteMovies }) {
	if (moviesData?.length === 0) {
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
			favoriteMovies={favoriteMovies}
			setFavoriteMovies={setFavoriteMovies}
		/>
	));
}
