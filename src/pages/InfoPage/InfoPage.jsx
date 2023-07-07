import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { SimpleHeader } from "./../../components/SimpleHeader/SimpleHeader";
import API from "../../services/TMDB/API";
import Typography from "@mui/material/Typography";
import { Box, CircularProgress, Container, Pagination } from "@mui/material";

export function InfoPage() {
	const { film_id } = useParams();
	const [filmDetails, setFilmDetails] = useState(null);
	const [filmCredits, setFilmCredits] = useState(null);

	useEffect(() => {
		API.fetchDetails(film_id).then((data) => {
			setFilmDetails(data);
			console.log(filmDetails);
		});
		API.fetchCredits(film_id).then((data) => setFilmCredits(data));
	}, []);
	
	if (!filmDetails || !filmCredits) {
		return (
			<Container>
				<SimpleHeader />
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<CircularProgress sx={{ mt: "40vh" }} />
				</Box>
			</Container>
		);
	}
	return (
		<Container>
			<SimpleHeader />
			<Box sx={{ mt: 12 }}>
				<Typography variant="h4">{filmDetails.title}</Typography>
			</Box>
		</Container>
	);
}
