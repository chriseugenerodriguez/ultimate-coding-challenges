function Factorial2(num) {
	// Handle the case where the input is 0
	if (num === 0) {
		return 1;
	}

	let result = 1;

	// Multiply all numbers from 1 to num
	for (let i = 1; i <= num; i++) {
		result *= i;
	}

	return result;
}

// https://github.com/ComputeNepal/js-coding-challenges/blob/main/solutions/ch_10_Factorial_of_Number/readme.md