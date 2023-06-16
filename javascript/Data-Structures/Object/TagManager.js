function TagManager() {
	const map = new Map();
	function addTags(topic, tagText) {
		const tagsArr = tagText.split(",").map((tag) => tag.trim());
		tagsArr.forEach((tag) => {
			if (map.has(tag)) {
				map.get(tag).push(topic);
			} else {
				map.set(tag, [topic]);
			}
		});
	}
	function getTopics(tag) {
		return map.get(tag);
	}
	return {
		addTags,
		getTopics,
	};
}

// Example
const tagManager = TagManager();
tagManager.addTags("React", "Redux, JSX, JavaScript, VDOM");
tagManager.addTags("Angular", "RxJS, TypeScript, JavaScript");
tagManager.addTags("Vue", "VDOM, JavaScript");
tagManager.getTopics.getTopics("VDOM"); // React, Vue
tagManager.getTopics.getTopics("JavaScript"); // React, Angular, Vue

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md