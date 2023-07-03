import { deepPurple, grey, indigo } from "@mui/material/colors";
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
		dark: {
			main: grey[600],
		},
		light: {
			main: grey[100]
		}
	},
	props: {
		MuiAppBar: {
			color: "transparent",
		},
	},
});
