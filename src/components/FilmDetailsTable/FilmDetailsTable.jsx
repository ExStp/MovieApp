import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableRow, Box } from "@mui/material";
import { EMPTY_ARR } from "../../utils/constants/CONST";

export function FilmDetailsTable({ details }) {
	if (details === EMPTY_ARR) return;

	const {
		adult,
		release_date,
		runtime,
		genres,
		production_companies,
		production_countries,
		popularity,
		vote_average,
		vote_count,
	} = details;

	return (
		<Box sx={{ maxWidth: 480, minWidth: 220 }}>
			<TableContainer sx={{ backgroundColor: "transparent" }}>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell component="th" scope="row">
								Для взрослых
							</TableCell>
							<TableCell>{adult ? "Yes" : "No"}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Дата релиза
							</TableCell>
							<TableCell>{release_date}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Длительность
							</TableCell>
							<TableCell>{runtime} минут</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Жанры
							</TableCell>
							<TableCell>{genres.map((genre) => genre.name).join(", ")}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Производство компаний
							</TableCell>
							<TableCell>
								{production_companies.map((company) => company.name).join(", ")}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Страны
							</TableCell>
							<TableCell>
								{production_countries.map((country) => country.name).join(", ")}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Популярность
							</TableCell>
							<TableCell>{popularity}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Результат голосований
							</TableCell>
							<TableCell>{vote_average}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Количество голосов
							</TableCell>
							<TableCell>{vote_count}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
