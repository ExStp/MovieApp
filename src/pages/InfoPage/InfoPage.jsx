import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Container } from "@mui/material";
import { SimpleHeader } from "./../../components/SimpleHeader/SimpleHeader";
import API from "../../services/TMDB/API";
import { MovieInfo } from "../../layout/MovieInfo";
import { SimpleAlert } from "../../components/Alerts/SimpleAlert";
import { useSelector } from "react-redux";

const DEFAULT_STATE = null;

export function InfoPage() {
	const { film_id } = useParams();
	const [movieInfo, setMovieInfo] = useState(DEFAULT_STATE);
	const auth = useSelector((state) => state.auth);
	const [error, setError] = useState(DEFAULT_STATE);

	useEffect(() => {
		const fetchMovieInfo = async () => {
			try {
				const [details, credits] = await Promise.all([
					API.fetchGetDetails(film_id),
					API.fetchGetCredits(film_id),
				]);
				if (!details || !credits) throw Error(API.ERRORS.CORS_ERROR);
				setMovieInfo({ details, credits });
				setError(DEFAULT_STATE);
			} catch (error) {
				setError(error);
				setMovieInfo(DEFAULT_STATE);
			}
		};

		fetchMovieInfo();
	}, [auth, film_id]);

	if (error) {
		return (
			<Container>
				<SimpleHeader />
				<SimpleAlert placeholder={API.ERRORS.CORS_ERROR} severity="warning" />
			</Container>
		);
	}

	if (!auth.isLogin) {
		return (
			<Container>
				<SimpleHeader />
				<SimpleAlert placeholder={API.ERRORS.AUTH_FALSE} severity={"warning"} />
			</Container>
		);
	}

	return (
		<Container>
			<SimpleHeader />
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				{movieInfo ? (
					<MovieInfo movieInfo={movieInfo} />
				) : (
					<CircularProgress sx={{ mt: "40vh" }} />
				)}
			</Box>
		</Container>
	);
}
