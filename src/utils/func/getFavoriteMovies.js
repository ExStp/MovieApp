import { API } from "../../services/TMDB/API";

export async function getFavoriteMovies() {
	let arrFavoriteMovies = [];

	const moviesData = await API.fetchGetFavoriteMovies();
	moviesData.results.map((movie) => arrFavoriteMovies.push(movie.id));
	return arrFavoriteMovies;
}
