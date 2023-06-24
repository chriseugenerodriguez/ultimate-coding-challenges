function reverseString2(str) {
	// Split the string into an array of characters
	const chars = str.split("");

	// Reverse the array of characters
	const reversed = chars.reverse();

	// Join the array of characters back into a string
	const result = reversed.join("");

	// Return the reversed string
	return result;
}

// https://github.com/ComputeNepal/js-coding-challenges/blob/main/solutions/ch_5_Reverse_String/readme.md