import * as React from "react";
import { Container } from "@mui/material";
import { SortRating } from "./SortRating";
import { SortGenres } from "./SortGenres";

export function Filters() {
	return (
		<Container>
			<SortRating />
			<SortGenres />
		</Container>
	);
}

