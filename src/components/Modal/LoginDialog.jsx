import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAuth } from "../../context/AuthProvider";
import API from "../../services/TMDB/API";

export default function LoginDialog({ isOpen, setIsOpen }) {
	const [auth, authDispatch] = useAuth();

	function handleClose() {
		setIsOpen(null);
	}

	async function handleLoginAuth() {
		const accountDetails = await API.fetchGetAccountDetails();
		authDispatch({ type: "user_login", accountId: accountDetails.id });
		setIsOpen(null);
	}

	function openRegistrationDialog() {
		setIsOpen("RegistrationDialog");
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
		</Dialog>
	);
}
