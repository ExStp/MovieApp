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
		<Box sx={{ maxWidth: 600, minWidth: 300 }}>
			<TableContainer sx={{ backgroundColor: "transparent" }}>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell component="th" scope="row">
								Adult
							</TableCell>
							<TableCell>{filmData.adult ? "Yes" : "No"}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Release Date
							</TableCell>
							<TableCell>{filmData.release_date}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Runtime
							</TableCell>
							<TableCell>{filmData.runtime} minutes</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Genres
							</TableCell>
							<TableCell>
								{filmData.genres.map((genre) => genre.name).join(", ")}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Production Companies
							</TableCell>
							<TableCell>
								{filmData.production_companies
									.map((company) => company.name)
									.join(", ")}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Production Countries
							</TableCell>
							<TableCell>
								{filmData.production_countries
									.map((country) => country.name)
									.join(", ")}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Popularity
							</TableCell>
							<TableCell>{filmData.popularity}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Vote Average
							</TableCell>
							<TableCell>{filmData.vote_average}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								Vote Count
							</TableCell>
							<TableCell>{filmData.vote_count}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
