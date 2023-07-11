import { Checkbox } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useState } from "react";

export function MovieFavoriteBtn({ movieId, isChecked }) {
	const [checked, setChecked] = useState(false);

	const handleChange = (event) => {
		setChecked(event.target.checked);
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
