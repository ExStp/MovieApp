import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiToken =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTZlODNjMTNjNmViMDQ0OTc3ZTk1NzFhY2U0M2U0MSIsInN1YiI6IjY0OTE3NTRjNDJiZjAxMDBlNGEwNTQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5cNOMjLZ0tL54dy8U0BiGOEIZjON-YsTtNrXy6A5OLQ";

const baseUrl = "https://api.themoviedb.org/3/";

export const tmdbAPI = createApi({
	reducerPath: "tmdbAPI",
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers) => headers.set("authorization", `bearer ${apiToken}`),
	}),
	endpoints: (build) => ({
		fetchGetGenres: build.query({
			query: () => ({
				url: "genre/movie/list?language=ru",
			}),
		}),
	}),
});

export const { useFetchGetGenresQuery } = tmdbAPI;
