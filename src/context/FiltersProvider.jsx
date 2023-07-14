import { createContext, useContext, useReducer } from "react";
import { EMPTY_ARR, EMPTY_STRING } from "../utils/constants/CONST";

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
		case FILTER_ACTIONS.searchQuery_changed: {
			return {
				...filters,
				searchQuery: action.newValue,
			};
		}
		case FILTER_ACTIONS.sortRating_changed: {
			return {
				...filters,
				sortRating: action.newValue,
			};
		}
		case FILTER_ACTIONS.sortGenres_changed: {
			return filters;
		}
		case FILTER_ACTIONS.sortYear_changed: {
			return filters;
		}
		default: {
			console.warn("FiltersProvider: Unknown action : " + action.type);
			return filters;
		}
	}
}

export const initFilters = {
	searchQuery: EMPTY_STRING,
	sortRating: "popular_list",
	sortGenres: EMPTY_ARR,
	sortYear: [10, 90],
};

export const FILTER_ACTIONS = {
	searchQuery_changed: "searchQuery_changed",
	sortRating_changed: "sortRating_changed",
	sortGenres_changed: "sortGenres_changed",
	sortYear_changed: "sortYear_changed,",
};
