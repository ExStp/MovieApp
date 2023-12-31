import axios from "axios";

const apiToken =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTZlODNjMTNjNmViMDQ0OTc3ZTk1NzFhY2U0M2U0MSIsInN1YiI6IjY0OTE3NTRjNDJiZjAxMDBlNGEwNTQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5cNOMjLZ0tL54dy8U0BiGOEIZjON-YsTtNrXy6A5OLQ";

const apiConfig = {
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${apiToken}`,
	},
};

export default class API {
	static URL = {
		account: "/account/",
		movie: "/movie/",
		genres: "/genre/movie/list?language=ru",
		topRatedList: "/movie/top_rated?language=ru&page=",
		popularList: "/movie/popular?language=ru&page=",
		IMG: {
			W400: `https://image.tmdb.org/t/p/w400`,
			W300: `https://image.tmdb.org/t/p/w300`,
		},
	};

	static ERRORS = {
		CORS_ERROR: "Недоступен сервис API, перезапустите VPN",
		AUTH_FALSE: "Необходима авторизация",
	};

	static accountId = 20036970;

	static async fetchGetSortedMovies({ page, sort_by, with_genres, year_gte, year_lte }) {
		const params = new URLSearchParams({
			language: "ru",
			page,
			"primary_release_date.gte": `${year_gte}-01-01`,
			"primary_release_date.lte": `${year_lte}-01-01`,
			sort_by,
			with_genres,
		}).toString();
		try {
			const response = await axios.get(`/discover/movie?${params}`, apiConfig);
			if (!response.data) throw Error("Ошибка: fetchGetSortedMovies");
			return response.data;
		} catch (error) {
			console.error(error.message);
		}
	}

	static async fetchGetFavoriteMovies(page) {
		const favoriteMoviesUrl = `${API.URL.account}${API.accountId}/favorite/movies?language=en-US&page=${page}&sort_by=created_at.asc`;

		try {
			const response = await axios.get(favoriteMoviesUrl, apiConfig);
			if (!response.data) throw Error("Ошибка: fetchGetFavoriteMovies");
			return response.data;
		} catch (error) {
			console.error(error.message);
		}
	}

	static async fetchGetSearchMovie(query, page) {
		const encodedQuery = encodeURI(query);
		const URL = `${apiConfig.baseURL}/search/movie?query=${encodedQuery}&include_adult=false&language=ru&page=${page}`;
		try {
			const response = await axios.get(URL, apiConfig);
			if (!response.data) throw Error("Ошибка: fetchGetSearchMovie");
			return response.data;
		} catch (error) {
			console.error(error.message);
		}
	}
}

export { API };
