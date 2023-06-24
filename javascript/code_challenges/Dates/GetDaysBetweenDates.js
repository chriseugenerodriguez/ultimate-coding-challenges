const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function parseDate(str) {
	var mdy = str.split("/");
	return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

function GetDaysBetweenDates(dateText1, dateText2) {
	return Math.round(
		(parseDate(dateText2) - parseDate(dateText1)) / DAY_IN_MILLISECONDS
	);
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%208%20-%20Challenge/8thChallenge.js