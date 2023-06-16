function IsIsogram3(str){
	return str
		.toLowerCase()
		.split("")
		.every((val, idx) => str.indexOf(val) === idx);
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2047%20-%20Challenge/47thChallenge.js