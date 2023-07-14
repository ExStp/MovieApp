import { ThemeProvider } from "@emotion/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./context/AppProvider";
import { DialogsRouter } from "./layout/DialogsRouter";
import { MainPage } from "./pages/MainPage/MainPage";
import { InfoPage } from "./pages/InfoPage/InfoPage";
import { defaultTheme } from "./utils/themes/defaultTheme";

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
