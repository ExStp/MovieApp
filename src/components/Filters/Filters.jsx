import * as React from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export function Filters({ open, handleDrawerClose, drawerWidth }) {

	const DrawerHeader = styled("div")(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	}));

	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: drawerWidth,
					boxSizing: "border-box",
				},
			}}
			variant="persistent"
			anchor="left"
			open={open}
		>
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</DrawerHeader>
			<Divider />
		</Drawer>
	);
}
