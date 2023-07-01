import axios from "axios";

export default class API {
	static URL = {
		genres: "https://api.themoviedb.org/3/genre/movie/list?language=ru",
	};

	static bearerToken =
		"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTZlODNjMTNjNmViMDQ0OTc3ZTk1NzFhY2U0M2U0MSIsInN1YiI6IjY0OTE3NTRjNDJiZjAxMDBlNGEwNTQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5cNOMjLZ0tL54dy8U0BiGOEIZjON-YsTtNrXy6A5OLQ";

	static options = {
		headers: {
			accept: "application/json",
			Authorization: API.bearerToken,
		},
	};

	static async fetchGenres() {
		try {
			const response = await axios.get(API.URL.genres, API.options);
			if (!response.data) throw Error("Ошибка при получении данных");
			return response.data.genres;
		} catch (error) {
			console.log(error.message);
		}
	}
}

export { API };
