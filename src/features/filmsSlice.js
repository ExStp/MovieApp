import { createSlice } from "@reduxjs/toolkit";

export const initFilmsData = {
	favoriteFilmsId: null,
	filmsData: null,
};

const filmsSlice = createSlice({
	name: "films",
	initialState: initFilmsData,
	reducers: {
		setFavoriteFilmsId(state, action) {
			state.favoriteFilmsId = action.payload;
		},
		setFilmsData(state, action) {
			state.filmsData = action.payload;
		},
	},
});

export const { setFavoriteFilmsId, setFilmsData } = filmsSlice.actions;
export default filmsSlice.reducer;
