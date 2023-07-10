import { createContext, useState, useContext } from "react";

const DialogsContext = createContext(null);

export function DialogsProvider({ children }) {
	const [isOpen, setIsOpen] = useState(initDialogsState);

	return (
		<DialogsContext.Provider value={[isOpen, setIsOpen]}>{children}</DialogsContext.Provider>
	);
}

export function useDialogs() {
	return useContext(DialogsContext);
}

export const initDialogsState = null;
