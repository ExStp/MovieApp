import { useState } from "react";
import RegistrationDialog from "../components/Modal/RegistrationDialog";
import LoginDialog from "../components/Modal/LoginDialog";
import { useDialogs } from "../context/DialogsProvider";

export function DialogsRouter() {
	const [isOpen, setIsOpen] = useDialogs();

	switch (isOpen) {
		case "RegistrationDialog": {
			return <RegistrationDialog isOpen={true} setIsOpen={setIsOpen} />;
		}
		case "LoginDialog": {
			return <LoginDialog isOpen={true} setIsOpen={setIsOpen} />;
		}
		default: {
			return null;
		}
	}
}
