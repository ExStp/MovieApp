import { Slider, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSortYear } from "../../features/filtersSlice";

const sortYearArrange = [1950, 2023];
const minYear = sortYearArrange[0];
const maxYear = sortYearArrange[1];
const minDistance = 10;

export function SortYear({ sortYear, ...props }) {
	const [value, setValue] = useState(sortYear);
	const dispatch = useDispatch();

	const handleChange = (_, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (newValue[1] - newValue[0] < minDistance) {
			if (activeThumb === 0) {
				const newRightValue = Math.max(newValue[0] + minDistance, newValue[1]);
				setValue([Math.max(newValue[0], minYear), Math.min(newRightValue, maxYear)]);
			} else {
				const newLeftValue = Math.min(newValue[1] - minDistance, newValue[0]);
				setValue([Math.max(newLeftValue, minYear), Math.min(newValue[1], maxYear)]);
			}
		} else {
			setValue([Math.max(newValue[0], minYear), Math.min(newValue[1], maxYear)]);
		}
	};

	return (
		<>
			<Slider
				sx={{
					color: "dark.main", // Change the color here to the desired color
					"& .MuiSlider-thumb": {
						backgroundColor: "dark.main", // Change the color of the thumb
					},
				}}
				{...props}
				getAriaLabel={() => "Minimum distance shift"}
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				getAriaValueText={() => `${value} год`}
				disableSwap
				min={minYear}
				max={maxYear}
			/>
			<Button onClick={() => dispatch(setSortYear(value))} variant="outlined" color="primary">
				Применить
			</Button>
		</>
	);
}
