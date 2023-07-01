import * as React from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Typography } from "@mui/material";

export function Navbar({ open, handleDrawerClose, drawerWidth, children }) {
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
				minWidth: "240px",
				width: drawerWidth,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					minWidth: "240px",
					width: drawerWidth,
					boxSizing: "border-box",
				},
			}}
			variant="persistent"
			anchor="left"
			open={open}
		>
			<DrawerHeader sx={{ justifyContent: "space-between" }}>
				<Typography variant="h5" color={"primary"}>
					Фильтры
				</Typography>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</DrawerHeader>
			{children}
		</Drawer>
	);
}
