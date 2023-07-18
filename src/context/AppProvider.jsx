import { FiltersProvider } from "./FiltersProvider";
import { PaginatorProvider } from "./PaginatorProvider";
import { DialogsProvider } from "./DialogsProvider";
import { AuthProvider } from "./AuthProvider";

export function AppProvider({ children }) {
	return (
		<AuthProvider>
			<FiltersProvider>
				<PaginatorProvider>
					<DialogsProvider>{children}</DialogsProvider>
				</PaginatorProvider>
			</FiltersProvider>
		</AuthProvider>
	);
}
