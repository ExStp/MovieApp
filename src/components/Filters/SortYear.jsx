import { Box, Slider } from "@mui/material";
import { useState } from "react";

export function SortYear({ sortYear, ...props }) {
	const [value, setValue] = useState(sortYear);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%", pt: "32px" }}>
			<Slider
				{...props}
				color="dark"
				getAriaLabel={() => "Год фильма"}
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				getAriaValueText={() => `${value} год`}
			/>
		</Box>
	);
}
