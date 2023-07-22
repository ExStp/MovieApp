import { useEffect, useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../features/filtersSlice";

const EMPTY_STRING = "";

export function SearchQuery({ searchQuery, ...props }) {
	const [value, setValue] = useState(searchQuery);
	const dispatch = useDispatch();

	useEffect(() => {
		setValue(searchQuery);
	}, [searchQuery]);

	function handleSearchChange(event) {
		const newValue = event.target.value;
		setValue(newValue);
		if (newValue === EMPTY_STRING) handleClearSearch();
	}

	function handleSubmitSearch(event) {
		event.preventDefault();
		dispatch(setSearchQuery(value));
	}

	function handleClearSearch() {
		setValue(EMPTY_STRING);
		dispatch(setSearchQuery(EMPTY_STRING));
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
