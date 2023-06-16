// Example
function asyncFunc1(callback) {
	setTimeout(() => {
		callback(1);
	}, 3000);
}
function asyncFunc2(callback) {
	setTimeout(() => {
		callback(2);
	}, 2000);
}
function asyncFunc3(callback) {
	setTimeout(() => {
		callback(3);
	}, 1000);
}
asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], result => {
	console.log(result); // 1, 2, 3 (prints results of each asynchronous function in order)
});

function asyncParallel(asyncFuncArr, callback) {
	const resultArr = new Array(asyncFuncArr.length);
	let resultCounter = 0;

	asyncFuncArr.forEach((async, index) => {
		async(value => {
			resultArr[index] = value;
			resultCounter++;
			if (resultCounter >= asyncFuncArr.length) {
				callback(resultArr);
			}
		});
	});
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md