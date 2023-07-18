import { FiltersProvider } from "./FiltersProvider";
import { AuthProvider } from "./AuthProvider";

export function AppProvider({ children }) {
	return (
		<AuthProvider>
			<FiltersProvider>{children}</FiltersProvider>
		</AuthProvider>
	);
}
