import { deepPurple, indigo } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: deepPurple[500],
		},
		secondary: {
			main: indigo[500],
		},
	},
	props: {
		MuiAppBar: {
			color: "transparent",
		},
	},
});
