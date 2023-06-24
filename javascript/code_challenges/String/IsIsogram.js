function IsIsogram(str) {
	var hash = {};
	str = str.toLowerCase();
	for (var i = 0; i < str.length; i++) {
		if (hash[str[i]]) {
			return false;
		}
		hash[str[i]] = true;
	}
	return true;
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2047%20-%20Challenge/47thChallenge.js