if(!Function.prototype.bind){
    Function.prototype.bind = function(context){
        var fn = this;
        var fnArgs = Array.prototype.slice.call(arguments, 1);
        return function(){
            var allArgs = fnArgs.concat(Array.prototype.slice.call(arguments))
            fn.apply(context, allArgs);
        };
    }
}

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md