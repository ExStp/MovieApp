/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import { MainPage } from "./pages/MainPage/MainPage";
import { defaultTheme } from "./utils/themes/defaultTheme";
import { MainPageProvider } from "./pages/MainPage/MainPageProvider";
import { InfoPage } from "./pages/InfoPage/InfoPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
	const MainPageRouter = (
		<MainPageProvider>
			<MainPage />
		</MainPageProvider>
	);

	const router = createBrowserRouter([
		{
			path: "/",
			element: MainPageRouter,
		},
		{
			path: "infoPage/:film_id",
			element: <InfoPage />,
		},
	]);

	return (
		<ThemeProvider theme={defaultTheme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
