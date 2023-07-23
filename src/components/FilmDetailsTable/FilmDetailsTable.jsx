import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableRow, Box } from "@mui/material";
import { getFormattedTime, getFormattedBudget, getMappedArr } from "../../utils/func/formatData";

export function FilmDetailsTable({ styles, details }) {
	if (!details) return null;

	const {
		budget,
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
		{ label: "Дата релиза", value: new Date(release_date).toDateString() },
		{ label: "Длительность", value: getFormattedTime(runtime) },
		{ label: "Жанры", value: getMappedArr(genres) },
		{ label: "Производство компаний", value: getMappedArr(production_companies) },
		{ label: "Бюджет", value: getFormattedBudget(budget) },
		{ label: "Страны", value: getMappedArr(production_countries) },
		{ label: "Популярность", value: popularity },
		{ label: "Результат голосований", value: vote_average !== 0 ? vote_average : null },
		{ label: "Количество голосов", value: vote_count !== 0 ? vote_count : null },
	];

	const tableRows = rows.map(({ label, value }) => (
		<TableRow key={label}>
			<TableCell component="th" scope="row">
				{label}
			</TableCell>
			<TableCell>{value ?? "Нет данных"}</TableCell>
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
