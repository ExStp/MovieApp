import { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export function Header({ handleDrawerOpen, open, drawerWidth }) {
	const AppBar = styled(MuiAppBar, {
		shouldForwardProp: (prop) => prop !== "open",
	})(({ theme, open }) => ({
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		...(open && {
			width: `calc(100% - ${drawerWidth})`,
			marginLeft: `${drawerWidth}`,
			transition: theme.transitions.create(["margin", "width"], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		}),
	}));

	return (
		<AppBar position="fixed">
			<Toolbar open={open} sx={{ dispay: "flex", justifyContent: "space-between" }}>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Фильтры
					</Typography>
				</Box>

				<Box>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						color="inherit"
						onClick={() => console.log("auth click")}
					>
						<AccountCircle />
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
