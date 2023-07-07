import { useState } from "react";
import { useParams } from "react-router-dom";

export function InfoPage() {
	const { film_id } = useParams();
	const [filmData, setFilmData] = useState();
	return <h1>{film_id}</h1>;
}
