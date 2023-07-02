/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import { MainPage } from "./pages/MainPage";
import { defaultTheme } from "./utils/themes/defaultTheme";
import { FiltersProvider } from "./context/FiltersProvider";
import { PaginatorProvider } from "./context/PaginatorProvider";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<FiltersProvider>
				<PaginatorProvider>
					<MainPage />
				</PaginatorProvider>
			</FiltersProvider>
		</ThemeProvider>
	);
}

export default App;
