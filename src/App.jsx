import { ThemeProvider } from "@emotion/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DialogsRouter } from "./layout/DialogsRouter";
import { MainPage } from "./pages/MainPage/MainPage";
import { InfoPage } from "./pages/InfoPage/InfoPage";
import { defaultTheme } from "./utils/themes/defaultTheme";
import { Provider } from "react-redux";
import { store } from "./app/store";

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
		<Provider store={store}>
			<ThemeProvider theme={defaultTheme}>
				<RouterProvider router={router} />
				<DialogsRouter />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
