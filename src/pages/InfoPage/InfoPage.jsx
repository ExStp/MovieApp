import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { SimpleHeader } from "./../../components/SimpleHeader/SimpleHeader";
import API from "../../services/TMDB/API";
import { Alert, Box, CircularProgress, Container, Typography } from "@mui/material";
import { MovieInfo } from "../../layout/MovieInfo";
import { useAuth } from "../../context/AuthProvider";

export function InfoPage() {
	const { film_id } = useParams();
	const [filmDetails, setFilmDetails] = useState(null);
	const [filmCredits, setFilmCredits] = useState(null);
	const [auth, authDispatch] = useAuth();

	useEffect(() => {
		API.fetchGetDetails(film_id).then((data) => {
			setFilmDetails(data);
			console.log(data);
		});
		API.fetchGetCredits(film_id).then((data) => setFilmCredits(data));
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
		<Container sx={{ background: "", height: "100vh" }}>
			<SimpleHeader />
			{auth.isLogin ? (
				<MovieInfo filmCredits={filmCredits} filmDetails={filmDetails} />
			) : (
				<Box
					sx={{
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					<Alert severity="warning">Необходима авторизация</Alert>
				</Box>
			)}
		</Container>
	);
}
