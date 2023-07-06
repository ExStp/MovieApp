import { FiltersProvider } from "../../context/FiltersProvider";
import { PaginatorProvider } from "../../context/PaginatorProvider";
import { NavbarProvider } from "../../context/NavbarProvider";

export function MainPageProvider({ children }) {
	return (
		<NavbarProvider>
			<FiltersProvider>
				<PaginatorProvider>{children}</PaginatorProvider>
			</FiltersProvider>
		</NavbarProvider>
	);
}
