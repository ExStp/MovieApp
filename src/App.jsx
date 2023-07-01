/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import { MainPage } from "./pages/MainPage";
import { defaultTheme } from "./utils/themes/defaultTheme";
import { FiltersProvider } from "./context/FiltersProvider";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<FiltersProvider>
				<MainPage />
			</FiltersProvider>
		</ThemeProvider>
	);
}

export default App;
