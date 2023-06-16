function BindSoft(fn, context) {
    var fnArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
        var allArgs = fnArgs.concat(Array.prototype.slice.call(arguments));
        
        // override the context to incoming context if it is not undefined, null or window
        var finalContext = (!this || this === window) ? context : this;
        fn.apply(finalContext, allArgs);
    };
}

// The functionality is similar to `bind` with exception that if there is a context set during the execution it will override

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/functions-challenges.md