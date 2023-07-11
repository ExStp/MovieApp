import { FiltersProvider } from "./FiltersProvider";
import { PaginatorProvider } from "./PaginatorProvider";
import { NavbarProvider } from "./NavbarProvider";
import { DialogsProvider } from "./DialogsProvider";

export function AppProvider({ children }) {
	return (
		<NavbarProvider>
			<FiltersProvider>
				<PaginatorProvider>
					<DialogsProvider>{children}</DialogsProvider>
				</PaginatorProvider>
			</FiltersProvider>
		</NavbarProvider>
	);
}