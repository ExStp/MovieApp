/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import { MainPage } from "./pages/MainPage";
import { defaultTheme } from "./utils/themes/defaultTheme";


function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<MainPage />
		</ThemeProvider>
	);
}

export default App;
