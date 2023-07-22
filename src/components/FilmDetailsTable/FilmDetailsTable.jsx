import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableRow, Box } from "@mui/material";

export function FilmDetailsTable({ styles, details }) {
	if (!details) return null;

	const {
		release_date,
		runtime,
		genres,
		production_companies,
		production_countries,
		popularity,
		vote_average,
		vote_count,
	} = details;
	
	const rows = [
		{ label: "Дата релиза", value: release_date },
		{ label: "Длительность", value: `${runtime} минут` },
		{ label: "Жанры", value: getMappedArr(genres) },
		{ label: "Производство компаний", value: getMappedArr(production_companies) },
		{ label: "Страны", value: getMappedArr(production_countries) },
		{ label: "Популярность", value: popularity },
		{ label: "Результат голосований", value: vote_average !== 0 ? vote_average : "нет данных" },
		{ label: "Количество голосов", value: vote_count !== 0 ? vote_count : "нет данных" },
	];

	const tableRows = rows.map((row) => (
		<TableRow key={row.label}>
			<TableCell component="th" scope="row">
				{row.label}
			</TableCell>
			{row.value && <TableCell>{row.value}</TableCell>}
		</TableRow>
	));

	return (
		<Box sx={styles}>
			<TableContainer sx={{ backgroundColor: "transparent" }}>
				<Table>
					<TableBody>{tableRows}</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}

const getMappedArr = (arr) => (arr.length ? arr.map((i) => i.name).join(", ") : "нет данных");

