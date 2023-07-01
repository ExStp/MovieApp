/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import { MainPage } from "./pages/MainPage";
import { defaultTheme } from "./utils/themes/defaultTheme";
import { FilterProvider } from "./context/FiltersProvider";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<FilterProvider>
				<MainPage />
			</FilterProvider>
		</ThemeProvider>
	);
}

export default App;
