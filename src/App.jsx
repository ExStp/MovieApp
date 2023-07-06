/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import { MainPage } from "./pages/MainPage/MainPage";
import { defaultTheme } from "./utils/themes/defaultTheme";
import { MainPageProvider } from "./pages/MainPage/MainPageProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<MainPageProvider>
				<MainPage />
			</MainPageProvider>
		</ThemeProvider>
	);
}

export default App;
