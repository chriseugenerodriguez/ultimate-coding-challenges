const IsLyhn = (string) => {
	if (string.length <= 1) return false;
	string = string.split(" ").join("");
	let sum = 0;
	for (let i = 0; i < string.length; i++) {
		if (i % 2 == 0) {
			let temp = +string[i] + +string[i];
			if (temp > 9) temp - 9;
			sum += temp;
		}
	}
	return sum % 10 === 0 ? true : false;
};

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2038%20-%20Challenge/38thChallenge.js