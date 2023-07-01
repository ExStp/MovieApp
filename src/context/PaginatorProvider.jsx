import { createContext, useContext, useState } from "react";

const PaginatorContext = createContext(null);

export function PaginatorProvider({ children }) {
	const initPage = 1;
	const [currentPage, setCurrentPage] = useState(initPage);

	return (
		<PaginatorContext.Provider value={[currentPage, setCurrentPage]}>
			{children}
		</PaginatorContext.Provider>
	);
}

export function usePaginator() {
	return useContext(PaginatorContext);
}
