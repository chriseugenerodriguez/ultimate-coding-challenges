function curryFunc(fn) {
	return function curry(...args) {
		if (fn.length <= args.length) {
			return fn.apply(this, args);
		} else {
			return function (...args2) {
				return curry.apply(this, args.concat(args2));
			};
		}
	};
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md