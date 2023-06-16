const num1 = 1, num2 = 10;
let i = num1;
const intervalId = setInterval(() => {
	console.log(i++);
	if (i === num2 + 1)
		clearInterval(intervalId);
}, 1000);

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md