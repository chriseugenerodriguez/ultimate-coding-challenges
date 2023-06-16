const totalGrains = () => {
	let ans = BigInt(0);
	for (let i = 0; i < 64; i++) {
		ans += BigInt(2 ** i);
	}
	return ans;
};

const grainsOn = (input) => {
	return BigInt(2 ** input - 1);
};

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2017%20-%20Challenge/17thChallenge.js