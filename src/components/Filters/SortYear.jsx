import { Slider } from "@mui/material";
import { useState, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { setSortYear } from "../../features/filtersSlice";
import { debounce } from "lodash";

const sortYearArrange = [1950, 2023];
const minYear = sortYearArrange[0];
const maxYear = sortYearArrange[1];
const minDistance = 10;

export function SortYear({ sortYear, ...props }) {
	const [localValue, setLocalValue] = useState(sortYear);
	const dispatch = useDispatch();

	const debouncedDispatch = useRef(
		debounce((value) => {
			dispatch(setSortYear(value));
		}, 200)
	).current;

	const handleChange = useCallback(
		(_, newValue, activeThumb) => {
			if (!Array.isArray(newValue)) {
				return;
			}

			if (newValue[1] - newValue[0] < minDistance) {
				if (activeThumb === 0) {
					const newRightValue = Math.max(newValue[0] + minDistance, newValue[1]);
					setLocalValue([
						Math.max(newValue[0], minYear),
						Math.min(newRightValue, maxYear),
					]);
				} else {
					const newLeftValue = Math.min(newValue[1] - minDistance, newValue[0]);
					setLocalValue([
						Math.max(newLeftValue, minYear),
						Math.min(newValue[1], maxYear),
					]);
				}
			} else {
				setLocalValue([Math.max(newValue[0], minYear), Math.min(newValue[1], maxYear)]);
			}

			debouncedDispatch(localValue);
		},
		[debouncedDispatch, localValue]
	);

	return (
		<>
			<Slider
				sx={{
					color: "dark.main",
					"& .MuiSlider-thumb": {
						backgroundColor: "dark.main",
					},
				}}
				{...props}
				getAriaLabel={() => "Minimum distance shift"}
				value={localValue}
				onChange={handleChange}
				valueLabelDisplay="auto"
				getAriaValueText={() => `${localValue} год`}
				disableSwap
				min={minYear}
				max={maxYear}
			/>
		</>
	);
}
