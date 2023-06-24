/*
- The nested object can be accessed only if all the nested properties are defined on the object
- A proxy can designed to create such nested object properties on demand whenever such non existent property is requested and attempted to set with value
- `get` trap of proxy can be used to create the objects dynamically and set the value
*/

function ProxyObject(obj) {
  return new Proxy(obj, {
    get: (target, property) => {
      if (!(property in target)) {
        target[property] = new ProxyObject({});
      }
      return target[property];
    },
  });
}

// e.g.
const obj = new ProxyObject({});
obj.x.y.z = "nested value";
obj.x.y.z; // nested value

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md