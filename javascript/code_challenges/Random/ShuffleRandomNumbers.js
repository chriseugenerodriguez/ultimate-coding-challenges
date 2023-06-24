function rangeGenFunc(start = 1, end = 0) {
	const arr = [];
	for (let i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}
const arr1 = rangeGenFunc(1, 10);                    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr1.sort(() => 0.5 - Math.random());                // [6, 8, 5, 10, 4, 3, 9, 2, 7, 1]


function* rangeGen(start = 1, end = 0) {
	for (let i = start; i <= end; i++) {
		yield i;
	}
}
let arr = [...rangeGen(1, 10)];                     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let shuffledArr = [];
const length = arr1.length;
for (let i = 0; i < length; i++) {
	shuffledArr.push(...arr1.splice(Math.floor(Math.random() * arr1.length), 1));
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/collections-challenges.md