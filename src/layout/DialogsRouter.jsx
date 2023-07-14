import { useState } from "react";
import RegistrationDialog from "../components/Modal/RegistrationDialog";
import LoginDialog from "../components/Modal/LoginDialog";
import { DIALOG_WINDOWS, useDialogs } from "../context/DialogsProvider";

export function DialogsRouter() {
	const [isOpen, setIsOpen] = useDialogs();

	switch (isOpen) {
		case DIALOG_WINDOWS.registration_dialog: {
			return <RegistrationDialog isOpen={true} setIsOpen={setIsOpen} />;
		}
		case DIALOG_WINDOWS.login_dialog: {
			return <LoginDialog isOpen={true} setIsOpen={setIsOpen} />;
		}
		default: {
			return null;
		}
	}
}
