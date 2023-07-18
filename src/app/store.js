import { configureStore } from "@reduxjs/toolkit";

import navbarReducer from "../features/navbarSlice";
import paginatorReducer from "../features/paginatorSlice";
import dialogsReducer from "../features/dialogsSlice";
import filtersReducer from "../features/filtersSlice";

export const store = configureStore({
	reducer: {
		navbar: navbarReducer,
		paginator: paginatorReducer,
		dialog: dialogsReducer,
		filters: filtersReducer
	},
});
