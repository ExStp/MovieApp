import axios from "axios";

export default class API {
	static URL = {
		genres: "https://api.themoviedb.org/3/genre/movie/list?language=ru",
		// topRatedList: "https://api.themoviedb.org/3/movie/popular?language=ru&page=",
		popularList: "https://api.themoviedb.org/3/movie/popular?language=ru&page=",
	};

	static bearerToken =
		"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTZlODNjMTNjNmViMDQ0OTc3ZTk1NzFhY2U0M2U0MSIsInN1YiI6IjY0OTE3NTRjNDJiZjAxMDBlNGEwNTQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5cNOMjLZ0tL54dy8U0BiGOEIZjON-YsTtNrXy6A5OLQ";

	static options = {
		headers: {
			accept: "application/json",
			Authorization: API.bearerToken,
		},
	};

	static async fetchGenres(page) {
		try {
			const response = await axios.get(`${API.URL.genres}${page}`, API.options);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data.genres;
		} catch (error) {
			console.log(error.message);
		}
	}

	// static async fetchTopRatedList() {
	// 	try {
	// 		const response = await axios.get(API.URL.topRatedList);
	// 		if (!response.data) throw Error("Ошибка при получении данных");
	// 		return response;
	// 	} catch (error) {
	// 		console.log(error.message);
	// 	}
	// }

	static async fetchPopularList(page) {
		try {
			const response = await axios.get(API.URL.popularList + String(page), API.options);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}
}

export { API };
