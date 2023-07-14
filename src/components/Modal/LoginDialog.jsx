import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AUTH_ACTIONS, useAuth } from "../../context/AuthProvider";
import API from "../../services/TMDB/API";
import { Backdrop, CircularProgress } from "@mui/material";
import { DIALOG_WINDOWS } from "../../context/DialogsProvider";

export default function LoginDialog({ isOpen, setIsOpen }) {
	const [isBackdropOpen, setSsBackdropOpen] = useState(false);
	const [auth, authDispatch] = useAuth();

	function handleClose() {
		setIsOpen(null);
	}

	async function handleLoginAuth() {
		setSsBackdropOpen(true);
		const accountDetails = await API.fetchGetAccountDetails();
		authDispatch({ type: AUTH_ACTIONS.user_login, accountId: accountDetails.id });
		setIsOpen(null);
		setSsBackdropOpen(false);
	}

	function openRegistrationDialog() {
		setIsOpen(DIALOG_WINDOWS.registration_dialog);
	}

	return (
		<Dialog
			open={isOpen}
			onClose={handleClose}
			sx={{
				backdropFilter: "blur(8px)",
				backgroundColor: "rgba(0, 0, 0, 0.4)",
			}}
		>
			<DialogTitle>Аутентификация</DialogTitle>
			<DialogContent>
				<DialogContentText>Введите токен</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Токен"
					type="text"
					fullWidth
					variant="outlined"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={openRegistrationDialog}>Назад</Button>
				<Button onClick={handleLoginAuth}>Отправить</Button>
			</DialogActions>

			<Backdrop sx={{ color: "#fff", zIndex: 9999 }} open={isBackdropOpen}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Dialog>
	);
}
