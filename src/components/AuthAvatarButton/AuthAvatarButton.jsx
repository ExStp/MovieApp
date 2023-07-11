import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useDialogs } from "../../context/DialogsProvider";

export function AuthAvatarButton() {
	const [open, setOpen] = useState(false);
	const [isOpen, setIsOpen] = useDialogs();
	const anchorRef = useRef(null);

	const handleToggle = () => {
		setOpen(!open);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	};

	function openRegistrationDialog() {
		setIsOpen("RegistrationDialog");
		setOpen(false);
	}

	return (
		<Box>
			<IconButton ref={anchorRef} onClick={handleToggle} color="light">
				<AccountCircle />
			</IconButton>
			<Popper
				open={open}
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
							<Button onClick={openRegistrationDialog}>Войти</Button>
						</Box>
					</ClickAwayListener>
				</Paper>
			</Popper>
		</Box>
	);
}
