function SumOfDigits2(num) {
	let sum = 0;

	// Convert the number to a string so we can loop over its digits
	const numStr = num.toString();

	// Loop over each digit in the string and add it to the sum
	for (let i = 0; i < numStr.length; i++) {
		sum += parseInt(numStr[i]);
	}

	// Return the final sum
	return sum;
}

// https://github.com/ComputeNepal/js-coding-challenges/blob/main/solutions/ch_8_Sum_of_Digits/readme.md