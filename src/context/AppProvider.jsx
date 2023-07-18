import { FiltersProvider } from "./FiltersProvider";
import { DialogsProvider } from "./DialogsProvider";
import { AuthProvider } from "./AuthProvider";

export function AppProvider({ children }) {
	return (
		<AuthProvider>
			<FiltersProvider>
				<DialogsProvider>{children}</DialogsProvider>
			</FiltersProvider>
		</AuthProvider>
	);
}
