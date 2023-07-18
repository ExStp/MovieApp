import { createSlice } from "@reduxjs/toolkit";

export const initPaginator = {
	currentPage: 1,
	totalPages: 50,
};

const paginatorSlice = createSlice({
	name: "paginator",
	initialState: initPaginator,
	reducers: {
		setPaginatorTotalPages(state, action) {
			state.totalPages = action.payload;
		},
		setPaginatorCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
	},
});

export const { setPaginatorCurrentPage, setPaginatorTotalPages } = paginatorSlice.actions;
export default paginatorSlice.reducer;
