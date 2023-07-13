import { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import API from "../../services/TMDB/API";

export function SearchQuery({ searchValue, filtersDispatch }) {
	const [value, setValue] = useState(searchValue);

	function handleSearchChange(event) {
		setValue(event.target.value);
	}

	function handleSubmitSearch(event) {
		event.preventDefault();
		filtersDispatch({ type: "searchQuery_changed", newValue: value });
		API.fetchGetSearchMovie(value, 1);
	}

	function handleClearSearch() {
		setValue("");
		filtersDispatch({ type: "searchQuery_changed", newValue: "" });
	}

	return (
		<form onSubmit={handleSubmitSearch}>
			<TextField
				fullWidth
				value={value}
				onChange={handleSearchChange}
				placeholder="Поиск фильма"
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							{value && (
								<IconButton onClick={handleClearSearch}>
									<Clear />
								</IconButton>
							)}
							<IconButton type="submit">
								<Search />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</form>
	);
}
