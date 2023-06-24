/**
 * @param {HTMLElement | null} tree
 * @return {Array}
 */
function getElementsByTagName(root, tagName) {
	if (!root) return [];
	let result = [];
	if (root.tagName.toLowerCase() === tagName.toLowerCase()) {
		result.push(root);
	}
	if (root.hasChildNodes()) {
		for (let child of root.children) {
			result = result.concat(getElementsByTagName(child, tagName));
		}
	}
	return result;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/dom-challenges.md