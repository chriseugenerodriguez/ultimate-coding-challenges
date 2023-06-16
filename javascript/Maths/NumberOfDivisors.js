function NumberOfDivisors(num) {
	let cnt = 0;
	for (let i = 1; i <= Math.sqrt(num); i++) {
		if (num % i == 0) {
			// If divisors are equal,
			// count only one
			if (num / i == i) cnt++;
			// Otherwise count both
			else cnt = cnt + 2;
		}
	}
	return cnt;
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2044%20-%20Challenge/44thChallenge.js