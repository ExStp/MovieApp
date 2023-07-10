import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthAvatarButton } from "../AuthAvatarButton/AuthAvatarButton";

export function SimpleHeader() {
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleChange = (event) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar
			position="fixed"
			elevation={5}
			sx={{
				background: "rgba(0, 0, 0, 0.85)",
				backdropFilter: "blur(12px)",
			}}
		>
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				<Link to={"/"}>
					<Button variant="text" startIcon={<ArrowBackIcon />} color="light" size="medium">
                        <Typography component='div' variant="h6">Фильмы</Typography>
					</Button>
				</Link>
				<AuthAvatarButton />
			</Toolbar>
		</AppBar>
	);
}
