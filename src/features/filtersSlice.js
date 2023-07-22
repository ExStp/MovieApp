import { createSlice } from "@reduxjs/toolkit";

export const initFilters = {
	searchQuery: "",
	sortRating: "popularity.desc",
	sortGenres: [],
	sortYear: [1980, 2023],
	isDefault: true,
	sortYearArrange: [1900, 2023],
};

const filtersSlice = createSlice({
	name: "filters",
	initialState: initFilters,
	reducers: {
		setSearchQuery(state, action) {
			state.searchQuery = action.payload;
			state.isDefault = false;
		},
		setSortRating(state, action) {
			state.sortRating = action.payload;
			state.isDefault = false;
		},
		setSortGenres(state, action) {
			state.sortGenres = action.payload;
			state.isDefault = false;
		},
		setSortYear(state, action) {
			state.sortYear = action.payload;
			state.isDefault = false;
		},
		setDefaultFilters(state, action) {
			state.searchQuery = initFilters.searchQuery;
			state.sortRating = initFilters.sortRating;
			state.sortGenres = initFilters.sortGenres;
			state.sortYear = initFilters.sortYear;
			state.isDefault = true;
		},
	},
});

export const { setSearchQuery, setSortRating, setSortGenres, setSortYear, setDefaultFilters } =
	filtersSlice.actions;
export default filtersSlice.reducer;
