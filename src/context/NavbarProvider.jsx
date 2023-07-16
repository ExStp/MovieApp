import { createContext, useState, useContext } from "react";
import { DEFAULT_NAVBAR, DEFAULT_STATE } from "../utils/constants/CONST";

const NavbarContext = createContext(DEFAULT_STATE);

export function NavbarProvider({ children }) {
	const [open, setOpen] = useState(DEFAULT_NAVBAR);

	return <NavbarContext.Provider value={[open, setOpen]}>{children}</NavbarContext.Provider>;
}

export function useNavbar() {
	return useContext(NavbarContext);
}
