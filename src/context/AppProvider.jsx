import { FiltersProvider } from "./FiltersProvider";
import { PaginatorProvider } from "./PaginatorProvider";
import { NavbarProvider } from "./NavbarProvider";
import { DialogsProvider } from "./DialogsProvider";
import { AuthProvider } from "./AuthProvider";

export function AppProvider({ children }) {
	return (
		<AuthProvider>
			<NavbarProvider>
				<FiltersProvider>
					<PaginatorProvider>
						<DialogsProvider>{children}</DialogsProvider>
					</PaginatorProvider>
				</FiltersProvider>
			</NavbarProvider>
		</AuthProvider>
	);
}
