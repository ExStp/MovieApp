import { createContext, useState, useContext } from "react";
import { DEFAULT_STATE } from "../utils/constants/CONST";

const DialogsContext = createContext(DEFAULT_STATE);

export function DialogsProvider({ children }) {
	const [isOpen, setIsOpen] = useState(DEFAULT_STATE);

	return (
		<DialogsContext.Provider value={[isOpen, setIsOpen]}>{children}</DialogsContext.Provider>
	);
}

export function useDialogs() {
	return useContext(DialogsContext);
}

export const DIALOG_WINDOWS = {
	login_dialog: "login_dialog",
	registration_dialog: "registration_dialog",
};
