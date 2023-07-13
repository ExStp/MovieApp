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

	static accountId = 20036970;

	static async fetchGetGenres(page) {
		try {
			const response = await axios.get(`${API.URL.genres}${page}`, apiConfig);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data.genres;
		} catch (error) {
			console.log(error.message);
		}
	}

	static async fetchGetMovies(type, page) {
		const moviesUrl = type === "popular_list" ? API.URL.popularList : API.URL.topRatedList;
		try {
			const response = await axios.get(moviesUrl + String(page), apiConfig);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}

	static async fetchGetDetails(film_id) {
		const detailsURL = `${API.URL.movie}${film_id}?language=ru`;
		try {
			const response = await axios.get(detailsURL, apiConfig);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}

	static async fetchGetCredits(film_id) {
		const detailsURL = `${API.URL.movie}${film_id}/credits?language=ru`;
		try {
			const response = await axios.get(detailsURL, apiConfig);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}

	static async fetchGetAccountDetails() {
		const accountDetailsUrl = `${API.URL.account}${API.accountId}`;
		try {
			const response = await axios.get(accountDetailsUrl, apiConfig);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}

	static async fetchGetFavoriteMovies(page) {
		const favoriteMoviesUrl = `${API.URL.account}${API.accountId}/favorite/movies?language=en-US&page=${page}&sort_by=created_at.asc`;
		try {
			const response = await axios.get(favoriteMoviesUrl, apiConfig);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}

	static async fetchPostFavoriteMovie(movieId, isFavorite) {
		const URL = `${API.URL.account}${API.accountId}/favorite`;
		const body = {
			media_type: "movie",
			media_id: movieId,
			favorite: isFavorite,
		};
		try {
			const response = await axios.post(URL, body, apiConfig);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}

	static async fetchGetSearchMovie(query, page) {
		const encodedQuery = encodeURI(query);
		const URL = `${apiConfig.baseURL}/search/movie?query=${encodedQuery}&include_adult=false&language=ru&page=${page}`;
		try {
			const response = await axios.get(URL, apiConfig);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}
}

export { API };
