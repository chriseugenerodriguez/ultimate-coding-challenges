/**
 * @param {HTMLElement | null} tree
 * @return {Boolean}
 */
function HasDuplicateId(tree, idSet = new Set()) {
	if (!tree) return false;
	if (idSet.has(tree.id)) return true;
	tree.id && idSet.add(tree.id);
	if (tree.hasChildNodes()) {
		for (let child of tree.children) {
			const result = HasDuplicateId(child, idSet);
			if (result) return true;
		}
	}
	return false;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/dom-challenges.md