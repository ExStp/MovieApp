import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { SimpleHeader } from "./../../components/SimpleHeader/SimpleHeader";
import API from "../../services/TMDB/API";
import { Alert, Box, CircularProgress, Container, Typography } from "@mui/material";
import { MovieInfo } from "../../layout/MovieInfo";
import { useAuth } from "../../context/AuthProvider";
import { SimpleAlert } from "../../components/Alerts/SimpleAlert";
import { EMPTY_ARR } from "../../utils/constants/CONST";

export function InfoPage() {
	const { film_id } = useParams();
	const [filmDetails, setFilmDetails] = useState(EMPTY_ARR);
	const [filmCredits, setFilmCredits] = useState(EMPTY_ARR);
	const [auth, authDispatch] = useAuth();

	useEffect(() => {
		if (!auth.isLogin) return;
		const infoRequest = [API.fetchGetDetails(film_id), API.fetchGetCredits(film_id)];
		
		Promise.all(infoRequest).then(([details, credits]) => {
			setFilmDetails(details);
			setFilmCredits(credits);
		});
	}, [auth]);

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
				<SimpleAlert placeholder={"Необходима авторизация"} severity={"warning"} />
			)}
		</Container>
	);
}
