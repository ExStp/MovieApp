import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Typography } from "@mui/material";

export function Navbar(props) {
	const { open, handleDrawerClose, drawerWidth, children } = props;

	const DrawerHeader = styled("div")(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	}));

	return (
		<Drawer
			sx={{
				boxShadow: open
					? "5px 0px 8px 0px rgba(0,0,0,0.14), 1px 0px 14px 0px rgba(0,0,0,0.12)"
					: "none",
				minWidth: "240px",
				width: drawerWidth,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					borderRight: "none",
					minWidth: "240px",
					width: drawerWidth,
					boxSizing: "border-box",
				},
			}}
			variant="persistent"
			anchor="left"
			open={open}
		>
			<DrawerHeader
				sx={{
					justifyContent: "space-between",
					background: "rgba(0, 0, 0, 0.85)",
					backdropFilter: "blur(12px)",
				}}
			>
				<Typography variant="h5" color={"white"}>
					Фильтры
				</Typography>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon color="light" fontSize="medim" />
				</IconButton>
			</DrawerHeader>
			{children}
		</Drawer>
	);
}
