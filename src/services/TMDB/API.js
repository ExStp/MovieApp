import axios from "axios";

export default class API {
	static URL = {
		account: "https://api.themoviedb.org/3/account/",
		movie: "https://api.themoviedb.org/3/movie/",
		genres: "https://api.themoviedb.org/3/genre/movie/list?language=ru",
		topRatedList: "https://api.themoviedb.org/3/movie/top_rated?language=ru&page=",
		popularList: "https://api.themoviedb.org/3/movie/popular?language=ru&page=",
		IMG: {
			W400: `https://image.tmdb.org/t/p/w400`,
			W300: `https://image.tmdb.org/t/p/w300`,
		},
	};

	static accountId = 20036970;

	static bearerToken =
		"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTZlODNjMTNjNmViMDQ0OTc3ZTk1NzFhY2U0M2U0MSIsInN1YiI6IjY0OTE3NTRjNDJiZjAxMDBlNGEwNTQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5cNOMjLZ0tL54dy8U0BiGOEIZjON-YsTtNrXy6A5OLQ";

	static options = {
		headers: {
			accept: "application/json",
			Authorization: API.bearerToken,
		},
	};

	static async fetchGetGenres(page) {
		try {
			const response = await axios.get(`${API.URL.genres}${page}`, API.options);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data.genres;
		} catch (error) {
			console.log(error.message);
		}
	}

	static async fetchGetMovies(type, page) {
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

	static async fetchGetDetails(film_id) {
		let detailsURL = `${API.URL.movie}${film_id}?language=ru`;

		try {
			const response = await axios.get(detailsURL, API.options);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}

	static async fetchGetCredits(film_id) {
		let detailsURL = `${API.URL.movie}${film_id}/credits?language=ru`;

		try {
			const response = await axios.get(detailsURL, API.options);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}

	static async fetchGetAccountDetails() {
		let accountDetailsUrl = API.URL.account + API.accountId;

		try {
			const response = await axios.get(accountDetailsUrl, API.options);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}

	static async fetchGetFavoriteMovies(page) {
		let favoriteMoviesUrl = `https://api.themoviedb.org/3/account/${API.accountId}/favorite/movies?language=en-US&page=${page}&sort_by=created_at.asc`;

		try {
			const response = await axios.get(favoriteMoviesUrl, API.options);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}

	static async fetchPostFavoriteMovie(movieId, isFavorite) {
		const URL = "https://api.themoviedb.org/3/account/20036970/favorite";
		const body = {
			media_type: "movie",
			media_id: movieId,
			favorite: isFavorite,
		};

		try {
			const response = await axios.post(URL, body, API.options);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	}

	static async fetchGetSearchMovie(query, page) {
		const encodedQuery = encodeURI(query);
		const URL = `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&include_adult=false&language=ru&page=${page}`;

		try {
			const response = await axios.get(URL, API.options);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data
		} catch (error) {
			console.log(error.message);
		}
	}
}

export { API };
