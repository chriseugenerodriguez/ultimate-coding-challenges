/*
e.g.
sum(2)(4)(6); // 12
sum(3, 2)(5); // 10
sum(4)(-10, -6); // -12
sum(6, -3, 1); // 4
*/

function sum(a, b, c){
    if(a !== undefined && b !== undefined && c !== undefined){
        return a + b + c;
    }
    if(a !== undefined && b !== undefined){
        return function(c){
            return sum(a, b, c);
        }
    }
    return function(b, c){
        if(b !== undefined && c !== undefined){
            return sum(a, b, c);
        }
        return function(c){
            return sum(a, b, c);
        }
    }
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md