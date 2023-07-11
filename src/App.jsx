/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import { MainPage } from "./pages/MainPage/MainPage";
import { defaultTheme } from "./utils/themes/defaultTheme";
import { AppProvider } from "./context/AppProvider";
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
			<AppProvider>
				<RouterProvider router={router} />
				<DialogsRouter />
			</AppProvider>
		</ThemeProvider>
	);
}

export default App;
