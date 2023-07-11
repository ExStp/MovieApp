import { API } from "../../services/TMDB/API";

export async function getFavoriteMovies() {
	try {
		const moviesData = await API.fetchGetFavoriteMovies();
		const arrFavoriteMovies = moviesData?.results.map((item) => item.id) || [];
		return arrFavoriteMovies;
	} catch (error) {
		console.error("Failed to get favorite movies:", error);
		return [];
	}
}
