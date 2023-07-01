import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function SortRating({ filterDispatch, selectValue }) {
	function handleChangeSort(event) {
		const newValue = event.target.value;
		filterDispatch({ type: "sortRating_changed", newValue });
	}

	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Сортировать по</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={selectValue}
				label="Сортировать по"
				onChange={handleChangeSort}
			>
				<MenuItem value={"popular_list"}>Популярности</MenuItem>
				<MenuItem value={"top_rated_list"}>Рейтингу</MenuItem>
			</Select>
		</FormControl>
	);
}
