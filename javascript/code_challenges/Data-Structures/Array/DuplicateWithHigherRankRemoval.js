// Example
const arr = [
	{
		id: 1,
		name: 'emp1',
		rank: 4,
	},
	{
		id: 2,
		name: 'emp2',
		rank: 1,
	},
	{
		id: 2,
		name: 'emp2',
		rank: 2,                // this is a duplicate object (id = 2) and has lower rank 
	},
	{
		id: 3,
		name: 'emp3',
		rank: 3,
	},
];

/*
- The duplicate objects cannot be removed using `Set` as the 2 objects with same structure and data have different references
- `Map` can be used to have 'id' as the key and object as value
- If 'id' is already present in the array, object with the higher rank can be retained
*/

const map = new Map();
arr.forEach(obj => {
	if (map.has(obj.id)) {
		if (obj.rank < map.get(obj.id).rank) {
			map.set(obj.id, obj);
		}
	} else {
		map.set(obj.id, obj);
	}
});
distinctArr = [...map.values()];

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/collections-challenges.md