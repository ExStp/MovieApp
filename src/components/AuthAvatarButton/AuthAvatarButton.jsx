import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../features/navbarSlice";
import { DIALOG_WINDOWS, setActiveDialog } from "../../features/dialogsSlice";
import { userLogout } from "../../features/authSlice";

const DEFAULT_AUTH_MENU = false;

export function AuthAvatarButton() {
	const [isMenuActive, setIsMenuActive] = useState(DEFAULT_AUTH_MENU);
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const anchorRef = useRef();

	const handleToggle = () => {
		setIsMenuActive(!isMenuActive);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setIsMenuActive(DEFAULT_AUTH_MENU);
	};

	function openRegistrationDialog() {
		dispatch(setActiveDialog(DIALOG_WINDOWS.registration_dialog));
		setIsMenuActive(DEFAULT_AUTH_MENU);
	}

	function handleLogoutAuth() {
		dispatch(userLogout());
		dispatch(toggleNavbar(false));
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
