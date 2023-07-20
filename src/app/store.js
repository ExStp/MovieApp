import { configureStore } from "@reduxjs/toolkit";

import { tmdbAPI } from "../services/TMDB/tmdbService";
import filmsSlice from "../features/filmsSlice";
import navbarSlice from "../features/navbarSlice";
import paginatorSlice from "../features/paginatorSlice";
import dialogsSlice from "../features/dialogsSlice";
import filtersSlice from "../features/filtersSlice";
import authSlice from "../features/authSlice";

export const store = configureStore({
	reducer: {
		navbar: navbarSlice,
		paginator: paginatorSlice,
		dialog: dialogsSlice,
		filters: filtersSlice,
		auth: authSlice,
		films: filmsSlice,
		[tmdbAPI.reducerPath]: tmdbAPI.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbAPI.middleware),
});
