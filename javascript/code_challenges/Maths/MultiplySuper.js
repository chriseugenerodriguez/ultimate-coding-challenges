// e.g. multiplySuper(2)(4); // 8

function multiplySuper(num1){
    return function (num2){
        return num1 * num2;
    }
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md