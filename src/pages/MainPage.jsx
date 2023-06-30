import { Container } from "@mui/material";
import { Header } from "../components/Header/Header";

export function MainPage() {
	return (
		<Container sx={{position: 'relative', height: '1000vh'}}>
			<Header />
		</Container>
	);
}
