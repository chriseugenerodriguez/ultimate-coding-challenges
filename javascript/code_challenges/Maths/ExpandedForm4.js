const ExpandedForm4 = (num) => {
	const numStr = String(num);
	let res = "";
	for (let i = 0; i < numStr.length; i++) {
		const placeValue = +numStr[i] * Math.pow(10, numStr.length - 1 - i);
		if (numStr.length - i > 1) {
			res += `${placeValue}+`;
		} else {
			res += placeValue;
		}
	}
	return res;
};

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2024%20-%20Challenge/24thChallenge.js