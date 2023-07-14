import { createContext, useContext, useState } from "react";

const PaginatorContext = createContext(null);

export function PaginatorProvider({ children }) {
	const [paginator, setPaginator] = useState(initPaginator);

	return (
		<PaginatorContext.Provider value={[paginator, setPaginator]}>
			{children}
		</PaginatorContext.Provider>
	);
}

export function usePaginator() {
	return useContext(PaginatorContext);
}

export const initPaginator = {
	currentPage: 1,
	totalPages: 50,
}