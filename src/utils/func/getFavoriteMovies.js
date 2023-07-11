import { API } from "../../services/TMDB/API";

export async function getFavoriteMovies() {
	let arrFavoriteMovies = [];

	API.fetchGetFavoriteMovies().then((moviesData) => {
		moviesData?.results.forEach((item) => {
			arrFavoriteMovies.push(item.id);
		});
	});
	return arrFavoriteMovies
}
