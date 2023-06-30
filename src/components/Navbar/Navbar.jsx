import * as React from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Typography } from "@mui/material";
import { Filters } from "../Filters/Filters";

export function Navbar({ open, handleDrawerClose, drawerWidth }) {
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
				minWidth: "360px",
				width: drawerWidth,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					minWidth: "360px",
					width: drawerWidth,
					boxSizing: "border-box",
				},
			}}
			variant="persistent"
			anchor="left"
			open={open}
		>
			<DrawerHeader sx={{justifyContent: 'space-between'}}>
				<Typography variant="h5" color={'primary'}>Фильтры</Typography>
				<IconButton onClick={handleDrawerClose} >
					<ChevronLeftIcon/>
				</IconButton>
			</DrawerHeader>
			<Filters />
		</Drawer>
	);
}
