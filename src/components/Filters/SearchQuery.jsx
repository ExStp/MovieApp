import { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import API from "../../services/TMDB/API";

export function SearchQuery({ searchValue, filtersDispatch }) {
	const [value, setValue] = useState(searchValue);

	function handleSearchChange(event) {
		setValue(event.target.value);
	}

	function handleSubmitSearch() {
		filtersDispatch({ type: "searchQuery_changed", newValue: value });
		API.fetchGetSearchMovie(value, 1);
	}

	function handleKeyPress(event) {
		if (event.key !== "Enter") return;
		handleSubmitSearch();
	}

	return (
		<TextField
			fullWidth
			value={value}
			onChange={handleSearchChange}
			onKeyPress={handleKeyPress}
			placeholder="Поиск фильма"
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton onClick={handleSubmitSearch}>
							<Search />
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
}
