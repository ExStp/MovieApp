import { Checkbox } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useState } from "react";
import API from "../../services/TMDB/API";

export function MovieFavoriteBtn({ movieId, isChecked }) {
	const [checked, setChecked] = useState(isChecked);

	const handleChange = (event) => {
		const isFavorite = event.target.checked;

		const options = {
			method: "POST",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTZlODNjMTNjNmViMDQ0OTc3ZTk1NzFhY2U0M2U0MSIsInN1YiI6IjY0OTE3NTRjNDJiZjAxMDBlNGEwNTQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5cNOMjLZ0tL54dy8U0BiGOEIZjON-YsTtNrXy6A5OLQ",
			},
			body: JSON.stringify({ media_type: "movie", media_id: movieId, favorite: isFavorite }),
		};

		fetch("https://api.themoviedb.org/3/account/20036970/favorite", options)
			.then((response) => response.json())
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
	};

	return (
		<Checkbox
			checked={checked}
			onChange={handleChange}
			icon={<StarOutlineIcon />}
			checkedIcon={<StarRateIcon />}
		/>
	);
}
