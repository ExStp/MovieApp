import { createSlice } from "@reduxjs/toolkit";

const dialogsSlice = createSlice({
	name: "dialogs",
	initialState: { activeDialog: null },
	reducers: {
		setActiveDialog(state, action) {
			state.activeDialog = action.payload;
		},
	},
});

export const { setActiveDialog } = dialogsSlice.actions;
export default dialogsSlice.reducer;
