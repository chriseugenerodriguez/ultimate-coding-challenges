async1()
	.then(
		() => {
			console.log('Async1 success');
		},
		() => {
			console.log('Async1 failure');
		}
	)
	.then(async2)
	.then(
		() => {
			console.log('Async2 success');
		},
		() => {
			console.log('Async2 failure');
		}
	)
	.then(async3)
	.then(
		() => {
			console.log('Async3 success');
		},
		() => {
			console.log('Async3 failure');
		}
	);

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md