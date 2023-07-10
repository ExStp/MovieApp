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

export function FilmDetailsTable({ filmData }) {
	return (
		<Box sx={{ maxWidth: 480, minWidth: 220 }}>
			<TableContainer sx={{ backgroundColor: "transparent" }}>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell component="th" scope="row">
								Для взрослых
							</TableCell>
							<TableCell>{filmData.adult ? "Yes" : "No"}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Дата релиза
							</TableCell>
							<TableCell>{filmData.release_date}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Длительность
							</TableCell>
							<TableCell>{filmData.runtime} минут</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Жанры
							</TableCell>
							<TableCell>
								{filmData.genres.map((genre) => genre.name).join(", ")}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Производство компаний
							</TableCell>
							<TableCell>
								{filmData.production_companies
									.map((company) => company.name)
									.join(", ")}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Страны
							</TableCell>
							<TableCell>
								{filmData.production_countries
									.map((country) => country.name)
									.join(", ")}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Популярность
							</TableCell>
							<TableCell>{filmData.popularity}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Результат голосований
							</TableCell>
							<TableCell>{filmData.vote_average}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Количество голосов
							</TableCell>
							<TableCell>{filmData.vote_count}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
