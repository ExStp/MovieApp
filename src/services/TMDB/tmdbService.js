import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

class API {
	static URL = {
		base: "https://api.themoviedb.org/3/",
		IMG: {
			W400: `https://image.tmdb.org/t/p/w400`,
			W300: `https://image.tmdb.org/t/p/w300`,
		},
	};

	static config = {
		token: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTZlODNjMTNjNmViMDQ0OTc3ZTk1NzFhY2U0M2U0MSIsInN1YiI6IjY0OTE3NTRjNDJiZjAxMDBlNGEwNTQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5cNOMjLZ0tL54dy8U0BiGOEIZjON-YsTtNrXy6A5OLQ",
		accountId: 20036970,
	};

	static headers = {
		accept: "application/json",
		authorization: `Bearer ${API.config.token}`,
	};

	static error = {
		CORS_ERROR: "Недоступен сервис API, перезапустите VPN",
		AUTH_FALSE: "Необходима авторизация",
	};
}

export const tmdbAPI = createApi({
	reducerPath: "tmdbAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: API.URL.base,
		prepareHeaders: (headers) => {
			headers.set("accept", API.headers.accept);
			headers.set("authorization", API.headers.authorization);
		},
	}),
	endpoints: (build) => ({
		fetchGetGenres: build.query({
			query: () => "genre/movie/list?language=ru",
			keepUnusedDataFor: 9000,
		}),
		fetchGetDetails: build.query({
			query: (film_id) => `movie/${film_id}?language=ru`,
			keepUnusedDataFor: 300,
		}),
		fetchGetCredits: build.query({
			query: (film_id) => `movie/${film_id}/credits?language=ru`,
			keepUnusedDataFor: 300,
		}),
		fetchGetAccountDetails: build.query({
			query: () => `account/${API.config.accountId}`,
		}),
		// fetchGetFavoriteMovies: build.query({
		// 	query: (page) => `account/${API.config.accountId}/favorite/movies?language=en-US&page=${page}&sort_by=created_at.asc`
		// })
		
	}),
});

export const {
	useFetchGetGenresQuery,
	useFetchGetDetailsQuery,
	useFetchGetCreditsQuery,
	useFetchGetAccountDetailsQuery,
	useFetchGetFavoriteMoviesQuery
} = tmdbAPI;
