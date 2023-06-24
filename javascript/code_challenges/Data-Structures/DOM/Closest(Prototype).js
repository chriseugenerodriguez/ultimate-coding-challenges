Element.prototype.closest = function (selector) {
	var el = this;
	while (el) {
		if (el.matches(selector)) {
			return el;
		}
		el = el.parentElement;
	}
	return null;
};

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/dom-challenges.md