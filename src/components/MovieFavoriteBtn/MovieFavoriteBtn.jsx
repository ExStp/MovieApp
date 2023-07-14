import { Checkbox } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useState } from "react";
import API from "../../services/TMDB/API";

export function MovieFavoriteBtn(props) {
	const { movieId, isChecked, setFavoriteMovies } = props;
	const [checked, setChecked] = useState(isChecked);

	const handleChange = (event) => {
		const isFavorite = event.target.checked;
		setChecked(isFavorite);
		isFavorite
			? setFavoriteMovies((prevState) => [...prevState, movieId])
			: setFavoriteMovies((prevState) => prevState.filter((id) => id !== movieId));
		API.fetchPostFavoriteMovie(movieId, isFavorite);
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
