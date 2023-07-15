import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { DIALOG_WINDOWS, useDialogs } from "../../context/DialogsProvider";
import { AUTH_ACTIONS, useAuth } from "../../context/AuthProvider";
import { useNavbar } from "../../context/NavbarProvider";

export function AuthAvatarButton() {
	const closedMenuState = false;
	const [isMenuActive, setIsMenuActive] = useState(closedMenuState);
	const [isDialogOpen, setIsDialogOpen] = useDialogs();
	const [isNavbarActive, setIsNavbarActive] = useNavbar();
	const [auth, authDispatch] = useAuth();
	const anchorRef = useRef();

	const handleToggle = () => {
		setIsMenuActive(!isMenuActive);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setIsMenuActive(closedMenuState);
	};

	function openRegistrationDialog() {
		setIsDialogOpen(DIALOG_WINDOWS.registration_dialog);
		setIsMenuActive(closedMenuState);
	}

	function handleLogoutAuth() {
		authDispatch({ type: AUTH_ACTIONS.user_logout });
		setIsNavbarActive(false);
	}

	return (
		<Box>
			<IconButton ref={anchorRef} onClick={handleToggle} color="light">
				<AccountCircle />
			</IconButton>
			<Popper
				open={isMenuActive}
				anchorEl={anchorRef.current}
				placement="bottom"
				style={{ zIndex: 9999 }}
			>
				<Paper elevation={6} sx={{ marginRight: "20px" }}>
					<ClickAwayListener onClickAway={handleClose}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								padding: "8px 0",
								width: "100px",
							}}
						>
							{auth.isLogin ? (
								<Button onClick={handleLogoutAuth}>Выйти</Button>
							) : (
								<Button onClick={openRegistrationDialog}>Войти</Button>
							)}
						</Box>
					</ClickAwayListener>
				</Paper>
			</Popper>
		</Box>
	);
}
