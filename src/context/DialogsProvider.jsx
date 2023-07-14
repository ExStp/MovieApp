import { createContext, useState, useContext } from "react";

const DialogsContext = createContext(null);

export function DialogsProvider({ children }) {
	const [isOpen, setIsOpen] = useState(null);

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
