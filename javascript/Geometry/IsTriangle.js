function IsTriangle(a, b, c) {
	if (a + b > c) {
		if (b + c > a) {
			if (a + c > b) return true;
		}
	}
	return false;
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2049%20-%20Challenge/49thChallenge.js