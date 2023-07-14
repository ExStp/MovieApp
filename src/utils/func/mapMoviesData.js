export function mapMoviesData(movies, favoriteMovies) {
	return movies.results.map((movie) => {
		const isFavorite = favoriteMovies.includes(movie.id);
		return { ...movie, isFavorite };
	});
}
