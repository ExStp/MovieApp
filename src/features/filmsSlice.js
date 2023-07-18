import { createSlice } from "@reduxjs/toolkit";

export const initFilmsData = {
	favoriteMovies: [],
};

const filmsSlice = createSlice({
	name: "films",
	initialState: initFilmsData,
	reducers: {
		setFavoriteFilms(state, action) {},
	},
});

export const { setFavoriteFilms } = filmsSlice.actions;
export default filmsSlice.reducer;
