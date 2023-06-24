function IsEmptyObject(obj) {
	for (var x in obj) {
		return false;
	}
	return true;
}

// 2nd Solution
// return Object.keys(obj).length === 0;

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%209%20-%20Challenge/9thChallenge.js