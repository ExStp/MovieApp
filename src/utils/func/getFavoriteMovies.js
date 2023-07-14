import { API } from "../../services/TMDB/API";

export async function getFavoriteMovies() {
	try {
		const initialPageResponse = await API.fetchGetFavoriteMovies(1);
		if (!initialPageResponse) {
			throw new Error("NetworkError");
		}

		const { total_pages, results } = initialPageResponse;
		const movieIds = results.map((movie) => movie.id);

		const additionalPagesRequests = [];
		for (let page = 2; page <= total_pages; page++) {
			additionalPagesRequests.push(API.fetchGetFavoriteMovies(page));
		}

		const additionalPagesResponses = await Promise.all(additionalPagesRequests);
		const additionalMovieIds = additionalPagesResponses
			.filter((response) => response.results)
			.flatMap((response) => response.results.map((movie) => movie.id));

		const moviesArr = [...movieIds, ...additionalMovieIds];
		return moviesArr;
	} catch (error) {
		console.log(error.message);
		return [];
	}
}
