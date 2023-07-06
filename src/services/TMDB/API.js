import axios from "axios";

export default class API {
	static URL = {
		genres: "https://api.themoviedb.org/3/genre/movie/list?language=ru",
		topRatedList: "https://api.themoviedb.org/3/movie/top_rated?language=ru&page=",
		popularList: "https://api.themoviedb.org/3/movie/popular?language=ru&page=",
		IMG: {
			W400: `https://image.tmdb.org/t/p/w400`,
			W300: `https://image.tmdb.org/t/p/w300`
		}
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

	static async fetchMovies(type, page) {
		let moviesUrl = null;
		switch (type) {
			case "popular_list":
				moviesUrl = API.URL.popularList;
				break;
			case "top_rated_list":
				moviesUrl = API.URL.topRatedList;
				break;
			default:
				break;
		}
		try {
			const response = await axios.get(moviesUrl + String(page), API.options);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}
}

export { API };
