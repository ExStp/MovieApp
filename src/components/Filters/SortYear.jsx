import { Box, Slider } from "@mui/material";
import { useState } from "react";

export function SortYear({...props}) {
	const [value, setValue] = useState([10, 90]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

    function valuetext(value) {
        return `${value} год`
    }

	return (
		<Box sx={{ width: '100%', pt: '32px' }}>
			<Slider
				{...props}
				color='dark'
				getAriaLabel={() => "Год фильма"}
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				getAriaValueText={valuetext}
			/>
		</Box>
	);
}
