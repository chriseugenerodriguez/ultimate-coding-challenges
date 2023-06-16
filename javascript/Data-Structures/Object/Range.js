let range = {
	start: 10,
	end: 50,
};
5 in range; // false
25 in range; // true

// The object `in` can be trapped using Proxy trap `has`, to check if the value is in the range or not

range = new Proxy(range, {
	has(target, value) {
		return value >= target.start && value <= target.end;
	},
});