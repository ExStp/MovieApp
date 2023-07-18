import { createSlice } from "@reduxjs/toolkit";

export const initActiveDialog = {
	activeDialog: null,
};

export const DIALOG_WINDOWS = {
	login_dialog: "login_dialog",
	registration_dialog: "registration_dialog",
};

const dialogsSlice = createSlice({
	name: "dialogs",
	initialState: initActiveDialog,
	reducers: {
		setActiveDialog(state, action) {
			state.activeDialog = action.payload;
		},
	},
});

export const { setActiveDialog } = dialogsSlice.actions;
export default dialogsSlice.reducer;
