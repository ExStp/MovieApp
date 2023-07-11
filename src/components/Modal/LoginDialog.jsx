import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAuth } from "../../context/AuthProvider";

export default function LoginDialog({ isOpen, setIsOpen }) {
	const [auth, authDispatch] = useAuth();

	function handleClose() {
		setIsOpen(null);
	}

	function handleLoginAuth() {
		authDispatch({ type: "user_login" });
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
