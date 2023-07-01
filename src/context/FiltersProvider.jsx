import { createContext, useContext, useReducer } from "react";

const FiltersContext = createContext(null);
const FiltersDispatchContext = createContext(null);

export function FilterProvider({ children }) {
	const [filters, dispatch] = useReducer(filterReducer, initFilters);

	return (
		<FiltersContext.Provider value={filters}>
			<FiltersDispatchContext.Provider value={dispatch}>
				{children}
			</FiltersDispatchContext.Provider>
		</FiltersContext.Provider>
	);
}

export function useFilters() {
	return useContext(FiltersContext);
}

export function useFiltersDispatch() {
	return useContext(FiltersDispatchContext);
}

function filterReducer(filters, action) {
	switch (action.type) {
		case "sortRating_changed":
			return {
				...filters,
				sortRating: action.newValue,
			};
		case "sortGenres_changed":
			console.log("sortGenres_changed");
			return filters;
		case "sortYear_changed":
			console.log("sortYear_changed");
			return filters;
		default:
			console.warn("FiltersProvider: Unknown action : " + action.type);
			return filters;
	}
}

export const initFilters = {
	sortRating: "popular_list",
	sortGenres: [],
	sortYear: [10, 90],
};
