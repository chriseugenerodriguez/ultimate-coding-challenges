var stringsArr = [];
var stringsArr = new Proxy(stringsArr, {
  set(target, prop, receiver){
    if(typeof receiver === "string"){
      target[target.length] = receiver;
    }
    return true;
  }
});

// driver code
stringsArr.push("Hello", 5, {}, "world", true, [1, 2, 3]);
stringsArr;  // ["Hello", "world"]

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/collections-challenges.md