import { API } from "../../services/TMDB/API";

export async function getFavoriteMovies() {
	let moviesArr = [];
	const initPage = 1;
	const firstRequest = await API.fetchGetFavoriteMovies(initPage);
	const { total_pages, total_results } = firstRequest;
	const firstIterationArr = firstRequest?.results.map((item) => item.id) || [];

	for (let page = 2; page <= total_pages; page++) {
		console.log(`${page} из ${total_pages}`);

		const iterationRequest = await API.fetchGetFavoriteMovies(page);
		const iterationArr = iterationRequest?.results.map((movie) => movie.id) || [];
		moviesArr = [...moviesArr, ...iterationArr];
	}
	return [...moviesArr, ...firstIterationArr];
}
