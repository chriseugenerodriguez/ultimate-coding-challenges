/*

Object does not have by default a property named 'length' and hence we can define it on object which helps to track the length
'push' and 'pop' functions can be added to the object which internally calls the Array methods `push` and `pop` by passing the object context

*/


const arrayLikeObject = {
  length: 0,
  push: function (item) {
    Array.prototype.push.call(this, item);
  },
  pop: function () {
    Array.prototype.pop.call(this);
  },
};

// driver code
arrayLikeObject.push("first");
arrayLikeObject.push("second");
arrayLikeObject.pop();
arrayLikeObject; // { length: 1, 0: first }