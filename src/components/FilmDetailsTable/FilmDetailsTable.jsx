import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Typography,
	Box,
} from "@mui/material";
import { EMPTY_ARR } from "../../utils/constants/CONST";

export function FilmDetailsTable({ details }) {
	if (details === EMPTY_ARR) return;

	return (
		<Box sx={{ maxWidth: 480, minWidth: 220 }}>
			<TableContainer sx={{ backgroundColor: "transparent" }}>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell component="th" scope="row">
								Для взрослых
							</TableCell>
							<TableCell>{details.adult ? "Yes" : "No"}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Дата релиза
							</TableCell>
							<TableCell>{details.release_date}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Длительность
							</TableCell>
							<TableCell>{details.runtime} минут</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Жанры
							</TableCell>
							<TableCell>
								{details.genres.map((genre) => genre.name).join(", ")}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Производство компаний
							</TableCell>
							<TableCell>
								{details.production_companies
									.map((company) => company.name)
									.join(", ")}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Страны
							</TableCell>
							<TableCell>
								{details.production_countries
									.map((country) => country.name)
									.join(", ")}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Популярность
							</TableCell>
							<TableCell>{details.popularity}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Результат голосований
							</TableCell>
							<TableCell>{details.vote_average}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Количество голосов
							</TableCell>
							<TableCell>{details.vote_count}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
