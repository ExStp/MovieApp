import { useTheme, useMediaQuery } from "@mui/material";

export function useSmallerBreakpoint(size) {
	const theme = useTheme();
	return useMediaQuery(theme.breakpoints.down(String(size)));
}
