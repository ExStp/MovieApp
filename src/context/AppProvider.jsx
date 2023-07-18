import { AuthProvider } from "./AuthProvider";

export function AppProvider({ children }) {
	return <AuthProvider>{children}</AuthProvider>;
}
