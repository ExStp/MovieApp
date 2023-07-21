import { createSlice } from "@reduxjs/toolkit";

export const initFilters = {
	searchQuery: "",
	sortRating: "popularity.desc",
	sortGenres: [],
	sortYear: [1950, 2023],
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
		}
	},
});

export const { setSearchQuery, setSortRating, setSortGenres } = filtersSlice.actions;
export default filtersSlice.reducer;
