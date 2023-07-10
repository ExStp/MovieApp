/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import { MainPage } from "./pages/MainPage/MainPage";
import { defaultTheme } from "./utils/themes/defaultTheme";
import { MainPageProvider } from "./pages/MainPage/MainPageProvider";
import { InfoPage } from "./pages/InfoPage/InfoPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DialogsRouter } from "./layout/DialogsRouter";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainPage />,
		},
		{
			path: "infoPage/:film_id",
			element: <InfoPage />,
		},
	]);

	return (
		<ThemeProvider theme={defaultTheme}>
			<MainPageProvider>
				<RouterProvider router={router} />
				<DialogsRouter />
			</MainPageProvider>
		</ThemeProvider>
	);
}

export default App;
