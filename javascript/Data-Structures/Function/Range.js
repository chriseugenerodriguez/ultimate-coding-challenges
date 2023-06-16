/* e.g.
range(3, 6)     // [3, 4, 5, 6]
range(3)(5)     // [3, 4, 5]
range(3)(0)     // []
*/

function range(start, end) {
    if (end === undefined) {
        return function (end) {
            return range(start, end);
        };
    }
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md