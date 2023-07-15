import { Alert, Box } from "@mui/material";

export function SimpleAlert({ severity, placeholder }) {
	return (
		<Box
			sx={{
				position: "fixed",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
			}}
		>
			<Alert sx={{ width: "90vw", maxWidth: "400px" }} severity={severity}>
				{placeholder}
			</Alert>
		</Box>
	);
}
