// `getter` and `setter` on the properties of object can be used to control the read and write behavior


const obj1 = { marks: 0 };
Object.defineProperty(obj1, "marks", {
  set(value) {
    if (value < 0) throw new Error("Marks cant be less than zero");
    marks = value;
  },
  get() {
    return marks;
  },
});


const obj2 = {
  _marks: 0,
  set marks(value) {
    if (value < 0) throw new Error("Marks cant be less than zero");
    this._marks = value;
  },
  get marks() {
    return this._marks;
  },
};

// https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/objects-challenges.md