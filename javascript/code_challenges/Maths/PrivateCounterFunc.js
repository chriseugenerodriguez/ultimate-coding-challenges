function PrivateCounterFunc(){
    var count = 0;
    return {
        increment: function(val = 1){
            count += val;
        },
        retrieve: function(){
            return count;
        }
    }
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md