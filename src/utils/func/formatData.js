const getFormattedTime = (minutes) => {
	if (minutes === 0) return null;
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	const formattedHours = String(hours).padStart(2, "0");
	const formattedMinutes = String(remainingMinutes).padStart(2, "0");

	return `${formattedHours} : ${formattedMinutes}`;
};

const getFormattedBudget = (budget) => {
	if (!budget) return null;

	return budget?.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
	});
};

const getMappedArr = (arr) => (arr?.length ? arr.map((i) => i.name).join(", ") : null);

export { getFormattedTime, getFormattedBudget, getMappedArr };
