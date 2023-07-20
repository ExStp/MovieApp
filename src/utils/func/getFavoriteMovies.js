import { API } from "../../services/TMDB/API";

export async function getFavoriteMovies(page = 1, moviesArr = []) {
	try {
		const { total_pages, results } = await API.fetchGetFavoriteMovies(page);
		const movieIds = results.map((movie) => movie.id);
		moviesArr.push(...movieIds);

		if (page < total_pages) return getFavoriteMovies(page + 1, moviesArr);
		return moviesArr;
	} catch (error) {
		console.log(error.message);
		return [];
	}
}
