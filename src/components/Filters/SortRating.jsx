import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSortRating } from "../../features/filtersSlice";

export function SortRating({ sortRating, ...props }) {
	const dispatch = useDispatch();

	function handleChangeSort(event) {
		const newValue = event.target.value;
		dispatch(setSortRating(newValue));
	}

	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Сортировать по</InputLabel>
			<Select
				{...props}
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={sortRating}
				label="Сортировать по"
				onChange={handleChangeSort}
			>
				<MenuItem value={"popularity.desc"}>Популярность</MenuItem>
				<MenuItem value={"vote_count.desc"}>Количество оценок</MenuItem>
				<MenuItem value={"revenue.desc"}>Прибыльность</MenuItem>
			</Select>
		</FormControl>
	);
}
