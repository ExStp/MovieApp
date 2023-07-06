import { createContext, useState, useContext } from "react";

const NavbarContext = createContext(null);

export function NavbarProvider({ children }) {
	const [open, setOpen] = useState(false);

	return <NavbarContext.Provider value={[open, setOpen]}>{children}</NavbarContext.Provider>;
}

export function useNavbar() {
	return useContext(NavbarContext);
}
