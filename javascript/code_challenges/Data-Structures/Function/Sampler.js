function Sampler(fn, count, context) {
	let counter = 0;
	return function (...args) {
		lastArgs = args;
		context = this ?? context;

		if (++counter !== count) return;

		fn.apply(context, args);
		counter = 0;
	};
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md