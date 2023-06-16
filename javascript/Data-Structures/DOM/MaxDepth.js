/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function MaxDepth(root) {
	if (!root) return 0;
	let maxDepth = 0;
	const helper = (current, depth = 1) => {
		if (current.hasChildNodes()) {
			for (let child of current.children) {
				helper(child, depth + 1);
			}
		}
		maxDepth = Math.max(maxDepth, depth);
	};
	helper(root);
	return maxDepth;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/dom-challenges.md