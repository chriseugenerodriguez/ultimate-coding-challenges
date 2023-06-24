/* e.g.
const array = [
	{ field: "id", operator: "eq" },
	{ field: "cStatus", operator: "eq" },
	{ field: "money", operator: "eq" },
  ];
  
const filterField = "money";
*/
  
function RemoveElementInArrayByObjProp(filterField) {
	return array.filter((val) => {
		return filterField !== val.field;
	});
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2010%20-%20Challenge/10thChallenge.js