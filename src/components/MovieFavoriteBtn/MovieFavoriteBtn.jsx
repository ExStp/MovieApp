import { Checkbox } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFavoriteFilmsId } from "../../features/filmsSlice";
import { useFetchPostFavoriteMovieMutation } from "../../services/TMDB/tmdbService";

export function MovieFavoriteBtn(props) {
	const { movieId, isChecked, favoriteMoviesId } = props;
	const [checked, setChecked] = useState(isChecked);
	const dispatch = useDispatch();

	const [postFavoriteMovie, { isError }] = useFetchPostFavoriteMovieMutation({});

	const handleChange = (event) => {
		const isFavorite = event.target.checked;
		setChecked(isFavorite);
		isFavorite
			? dispatch(setFavoriteFilmsId([...favoriteMoviesId, movieId]))
			: dispatch(setFavoriteFilmsId(favoriteMoviesId.filter((id) => id !== movieId)));
			
		postFavoriteMovie({ media_type: "movie", media_id: movieId, favorite: isFavorite });
		if (isError) setChecked(!isFavorite);
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
