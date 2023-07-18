import { configureStore } from "@reduxjs/toolkit";

import navbarReducer from "../features/navbarSlice";
import paginatorReducer from "../features/paginatorSlice";

export const store = configureStore({
	reducer: {
		navbar: navbarReducer,
		paginator: paginatorReducer,
	},
});
