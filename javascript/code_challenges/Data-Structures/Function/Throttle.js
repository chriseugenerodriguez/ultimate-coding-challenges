function Throttle(fn, delay, context) {
	let timer;
	let lastArgs;
	return function (...args) {
		lastArgs = args;
		context = this ?? context;

		if (timer) return;

		timer = setTimeout(() => {
			fn.apply(context, lastArgs);
			clearTimeout(timer);
		}
			, delay);
	};
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md