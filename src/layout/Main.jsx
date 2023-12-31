import { styled } from "@mui/material/styles";
import { forwardRef } from "react";

export const Main = forwardRef((props, ref) => {
	const { open, drawerWidth, isSmallScreen, children } = props;

	const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
		({ theme, open }) => ({
			flexGrow: 1,
			padding: theme.spacing(3),
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			marginLeft: `-${drawerWidth}`,
			...(open && {
				transition: theme.transitions.create("margin", {
					easing: theme.transitions.easing.easeOut,
					duration: theme.transitions.duration.enteringScreen,
				}),
				marginLeft: 0,
			}),
		})
	);

	const DrawerHeader = styled("div")(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	}));

	if (open && isSmallScreen) return null;

	return (
		<Main open={open} sx={{ padding: "20px 0px", minHeight: "100vh" }} ref={ref}>
			<DrawerHeader />
			{children}
		</Main>
	);
});
