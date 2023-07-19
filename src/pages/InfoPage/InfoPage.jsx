import { useParams } from "react-router-dom";
import { Box, CircularProgress, Container } from "@mui/material";
import { SimpleHeader } from "../../components/SimpleHeader/SimpleHeader";
import { MovieInfo } from "../../layout/MovieInfo";
import { SimpleAlert } from "../../components/Alerts/SimpleAlert";
import { useSelector } from "react-redux";
import { useFetchGetCreditsQuery, useFetchGetDetailsQuery } from "../../services/TMDB/tmdbService";
import { useEffect, useState } from "react";
import API from "../../services/TMDB/API";

const DEFAULT_STATE = null;

export function InfoPage() {
	const { film_id } = useParams();
	const [error, setError] = useState(DEFAULT_STATE);
	const auth = useSelector((state) => state.auth);

	const { data: details, isError: detailsError } = useFetchGetDetailsQuery(film_id);
	const { data: credits, isError: creditsError } = useFetchGetCreditsQuery(film_id);

	useEffect(() => {
		if (detailsError || creditsError) {
			setError(API.ERRORS.CORS_ERROR);
		} else {
			setError(DEFAULT_STATE);
		}
	}, [detailsError, creditsError]);

	if (error) {
		return (
			<Container>
				<SimpleHeader />
				<SimpleAlert placeholder={error} severity="warning" />
			</Container>
		);
	}

	if (!auth.isLogin) {
		return (
			<Container>
				<SimpleHeader />
				<SimpleAlert placeholder={API.ERRORS.AUTH_FALSE} severity="warning" />
			</Container>
		);
	}

	return (
		<Container>
			<SimpleHeader />
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				{details && credits ? (
					<MovieInfo movieInfo={{ details, credits }} />
				) : (
					<CircularProgress sx={{ mt: "40vh" }} />
				)}
			</Box>
		</Container>
	);
}
