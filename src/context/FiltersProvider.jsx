import { createContext, useContext, useReducer } from "react";

const FiltersContext = createContext(null);

export function FiltersProvider({ children }) {
	const [filters, filtersDispatch] = useReducer(filterReducer, initFilters);

	return (
		<FiltersContext.Provider value={[filters, filtersDispatch]}>
			{children}
		</FiltersContext.Provider>
	);
}

export function useFilters() {
	return useContext(FiltersContext);
}

function filterReducer(filters, action) {
	switch (action.type) {
		case "searchQuery_changed": {
			return {
				...filters,
				searchQuery: action.newValue,
			};
		}
		case "sortRating_changed": {
			return {
				...filters,
				sortRating: action.newValue,
			};
		}
		case "sortGenres_changed": {
			console.log("sortGenres_changed");
			return filters;
		}
		case "sortYear_changed": {
			console.log("sortYear_changed");
			return filters;
		}
		default: {
			console.warn("FiltersProvider: Unknown action : " + action.type);
			return filters;
		}
	}
}

export const initFilters = {
	searchQuery: "",
	sortRating: "popular_list",
	sortGenres: [],
	sortYear: [10, 90],
};
