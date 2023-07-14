import { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import API from "../../services/TMDB/API";
import { EMPTY_STRING } from "../../utils/constants/CONST";

export function SearchQuery({ filterController, ...props }) {
	const { filters, filtersDispatch, FILTER_ACTIONS } = filterController;
	const [value, setValue] = useState(filters.searchQuery);

	function handleSearchChange(event) {
		const newValue = event.target.value;
		setValue(newValue);
		if (newValue === EMPTY_STRING) handleClearSearch();
	}

	function handleSubmitSearch(event) {
		event.preventDefault();
		filtersDispatch({ type: FILTER_ACTIONS.searchQuery_changed, newValue: value });
		API.fetchGetSearchMovie(value, 1);
	}

	function handleClearSearch() {
		setValue(EMPTY_STRING);
		filtersDispatch({ type: FILTER_ACTIONS.searchQuery_changed, newValue: EMPTY_STRING });
	}

	return (
		<form onSubmit={handleSubmitSearch}>
			<TextField
				{...props}
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
