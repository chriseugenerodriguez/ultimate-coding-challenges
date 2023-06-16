/**
 * @param {HTMLElement | null} tree
 * @return {Array}
 */
function GetUniqueTags(root, result = new Set()) {
	if (!root) return [];
	if (!result.has(root.tagName)) {
		result.add(root.tagName);
	}
	if (root.hasChildNodes()) {
		for (let child of root.children) {
			GetUniqueTags(child, result);
		}
	}
	return [...result];
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/dom-challenges.md