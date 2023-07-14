import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function SortRating({ filterController, ...props }) {
	const { filters, filtersDispatch, FILTER_ACTIONS } = filterController;

	function handleChangeSort(event) {
		const newValue = event.target.value;
		filtersDispatch({ type: FILTER_ACTIONS.sortRating_changed, newValue });
	}

	return (
		<FormControl fullWidth sx={{ mt: "32px" }}>
			<InputLabel id="demo-simple-select-label">Сортировать по</InputLabel>
			<Select
				{...props}
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={filters.sortRating}
				label="Сортировать по"
				onChange={handleChangeSort}
			>
				<MenuItem value={"popular_list"}>Популярности</MenuItem>
				<MenuItem value={"top_rated_list"}>Рейтингу</MenuItem>
			</Select>
		</FormControl>
	);
}
