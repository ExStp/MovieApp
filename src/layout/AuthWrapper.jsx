import { SimpleHeader } from "../components/SimpleHeader/SimpleHeader";
import { Box, CircularProgress, Container } from "@mui/material";

export function AuthWrapper({ form }) {
	return (
		<Container>
			<SimpleHeader />
			<Box sx={{ mt: 14 }}>{form}</Box>
		</Container>
	);
}
