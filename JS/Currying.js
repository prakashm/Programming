function sum(a) {
  return function (b) {
    if (!b) return a;
    return a + b;
  };
}
//sum(40)(50)
console.log(sum(40)(50));

//Alternate option
function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}
function add(a, b) {
  return a + b;
}
let curriedSum = curry(add);
//curriedSum(10)(20)
console.log(curriedSum(10)(20));
