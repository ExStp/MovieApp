import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Container } from "@mui/material";
import { SimpleHeader } from "./../../components/SimpleHeader/SimpleHeader";
import API from "../../services/TMDB/API";
import { MovieInfo } from "../../layout/MovieInfo";
import { useAuth } from "../../context/AuthProvider";
import { SimpleAlert } from "../../components/Alerts/SimpleAlert";
import { EMPTY_OBJ } from "../../utils/constants/CONST";

export function InfoPage() {
	const { film_id } = useParams();
	const [movieInfo, setMovieInfo] = useState(EMPTY_OBJ);
	const [auth, authDispatch] = useAuth();

	useEffect(() => {
		if (!auth.isLogin) return;
		const infoRequest = [API.fetchGetDetails(film_id), API.fetchGetCredits(film_id)];

		Promise.all(infoRequest).then(([details, credits]) => {
			setMovieInfo({ details, credits });
		});
	}, [auth]);

	if (!auth.isLogin) {
		return (
			<Container>
				<SimpleHeader />
				<SimpleAlert placeholder={"Необходима авторизация"} severity={"warning"} />
			</Container>
		);
	}

	return (
		<Container>
			<SimpleHeader />
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				{movieInfo === EMPTY_OBJ ? (
					<CircularProgress sx={{ mt: "40vh" }} />
				) : (
					<MovieInfo movieInfo={movieInfo} />
				)}
			</Box>
		</Container>
	);
}
