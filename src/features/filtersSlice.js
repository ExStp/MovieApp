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
		setDefaultFilters() {
			return initFilters;
		},
	},
});

export const { setSearchQuery, setSortRating, setSortGenres, setSortYear, setDefaultFilters } =
	filtersSlice.actions;
export default filtersSlice.reducer;
