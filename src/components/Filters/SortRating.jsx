import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function SortRating() {
	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Сортировать по</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={""}
				label="Сортировать по"
				onChange={(e) => console.log(e)}
			>
				<MenuItem value={"popularity"}>Популярности</MenuItem>
				<MenuItem value={"rating"}>Рейтингу</MenuItem>
			</Select>
		</FormControl>
	);
}
