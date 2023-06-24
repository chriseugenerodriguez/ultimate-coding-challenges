function callbackExec(callback) {
	if (typeof callback === 'function') {
		setTimeout(() => {
			callback();
			console.log('Callback is executed after 2 seconds');
		}, 2000);
	}
}
function displayHello() {
	console.log('Hello');
}
callbackExec(displayHello);

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md