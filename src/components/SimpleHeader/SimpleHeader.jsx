import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthAvatarButton } from "../AuthAvatarButton/AuthAvatarButton";

export function SimpleHeader() {
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
				<Link to={"/"} sx={{ textDecoration: "none" }}>
					<Button
						variant="text"
						startIcon={<ArrowBackIcon />}
						color="light"
						size="medium"
					>
						<Typography component="div" variant="h6">
							Фильмы
						</Typography>
					</Button>
				</Link>
				<AuthAvatarButton />
			</Toolbar>
		</AppBar>
	);
}
