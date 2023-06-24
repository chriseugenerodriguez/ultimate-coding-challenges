/**
 * @param {HTMLElement | null} tree
 * @return {HTMLElement | null}
 */
function getRootNode(tree) {
	if (!tree) return null;
	while (tree.parentElement) {
		tree = tree.parentElement;
	}
	return tree;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/dom-challenges.md