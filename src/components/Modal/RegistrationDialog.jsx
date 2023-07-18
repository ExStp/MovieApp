import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DIALOG_WINDOWS, setActiveDialog } from "../../features/dialogsSlice";
import { useDispatch } from "react-redux";

export default function RegistrationDialog({ isOpen = true}) {
	const dispatch = useDispatch();

	function handleClose() {
		dispatch(setActiveDialog(null));
	}

	function openLoginDialog() {
		dispatch(setActiveDialog(DIALOG_WINDOWS.login_dialog));
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
			<DialogTitle>Регистрация</DialogTitle>
			<DialogContent>
				<DialogContentText>Получить токен</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Почта"
					type="email"
					fullWidth
					variant="outlined"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Отмена</Button>
				<Button onClick={openLoginDialog}>Отправить</Button>
			</DialogActions>
		</Dialog>
	);
}
