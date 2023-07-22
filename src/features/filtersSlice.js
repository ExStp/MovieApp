import { createSlice } from "@reduxjs/toolkit";

export const initFilters = {
	searchQuery: "",
	sortRating: "popularity.desc",
	sortGenres: [],
	sortYear: [1980, 2023],
};

const filtersSlice = createSlice({
	name: "filters",
	initialState: initFilters,
	reducers: {
		setSearchQuery(state, action) {
			state.searchQuery = action.payload;
		},
		setSortRating(state, action) {
			state.sortRating = action.payload;
		},
		setSortGenres(state, action) {
			state.sortGenres = action.payload;
		},
		setSortYear(state, action) {
			state.sortYear = action.payload;
		},
		setDefaultFilters(state, action) {
			state.searchQuery = initFilters.searchQuery;
			state.sortRating = initFilters.sortRating;
			state.sortGenres = initFilters.sortGenres;
			state.sortYear = initFilters.sortYear;
		},
	},
});

export const { setSearchQuery, setSortRating, setSortGenres, setSortYear, setDefaultFilters } =
	filtersSlice.actions;
export default filtersSlice.reducer;
