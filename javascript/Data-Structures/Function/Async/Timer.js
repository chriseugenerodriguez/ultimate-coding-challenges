function timer(init = 0, step = 1) {
	var intervalId;
	var count = init;
	function startTimer() {
		if (!intervalId) {
			intervalId = setInterval(() => {
				console.log(count);
				count += step;
			}, 1000);
		}
	}
	function stopTimer() {
		clearInterval(intervalId);
		intervalId = null;
	}
	return {
		startTimer,
		stopTimer,
	};
}
// driver code
const timerObj = timer(100, 10);
timerObj.startTimer();
setTimeout(() => {
	timerObj.stopTimer();
}, 5000);

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md