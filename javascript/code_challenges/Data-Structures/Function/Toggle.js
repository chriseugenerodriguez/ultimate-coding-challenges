function Toggle(...values){
    let state = -1;
    const length = values.length;
    return function(){
        state = (state + 1) % length;
        return values[state];
    }
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md