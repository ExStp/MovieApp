import { FiltersProvider } from "../../context/FiltersProvider";
import { PaginatorProvider } from "../../context/PaginatorProvider";
import { NavbarProvider } from "../../context/NavbarProvider";
import { DialogsProvider } from "../../context/DialogsProvider";

export function MainPageProvider({ children }) {
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
