import RegistrationDialog from "../components/Modal/RegistrationDialog";
import LoginDialog from "../components/Modal/LoginDialog";
import { DIALOG_WINDOWS } from "../features/dialogsSlice";
import { useSelector } from "react-redux";

export function DialogsRouter() {
	const activeDialog = useSelector((state) => state.dialog.activeDialog);

	switch (activeDialog) {
		case DIALOG_WINDOWS.registration_dialog: {
			return <RegistrationDialog />;
		}
		case DIALOG_WINDOWS.login_dialog: {
			return <LoginDialog />;
		}
		default: {
			return null;
		}
	}
}
