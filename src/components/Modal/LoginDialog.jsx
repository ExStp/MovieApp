import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import API from "../../services/TMDB/API";
import { Backdrop, CircularProgress } from "@mui/material";
import { DIALOG_WINDOWS, setActiveDialog } from "../../features/dialogsSlice";
import { useDispatch } from "react-redux";
import { userLogin } from "../../features/authSlice";

const DEFAULT_BACKDROP = false;

export default function LoginDialog({ isOpen = true }) {
	const [isBackdropOpen, setIsBackdropOpen] = useState(DEFAULT_BACKDROP);
	const dispatch = useDispatch();

	function handleClose() {
		dispatch(setActiveDialog(null));
	}

	async function handleLoginAuth() {
		setIsBackdropOpen(!DEFAULT_BACKDROP);

		try {
			const accountDetails = await API.fetchGetAccountDetails();
			if (!accountDetails) throw Error(API.ERRORS.CORS_ERROR);
			dispatch(userLogin(accountDetails.id));
			// authDispatch({ type: AUTH_ACTIONS.user_login, accountId: accountDetails.id });
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(setActiveDialog(null));
			setIsBackdropOpen(DEFAULT_BACKDROP);
		}
	}

	function openRegistrationDialog() {
		dispatch(setActiveDialog(DIALOG_WINDOWS.registration_dialog));
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
