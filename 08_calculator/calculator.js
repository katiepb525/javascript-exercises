const add = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  let difference = a - b;
  return difference;
};

const sum = function (args) {
  let finalSum = 0;
  for (let i = 0; i < args.length; i++) {
    finalSum += parseInt(args[i]);
  }
  return finalSum;

};

const multiply = function (args) {
  let finalProduct = 1;
  for (let i = 0; i < args.length; i++) {
    finalProduct *= parseInt(args[i]);
  }
  return finalProduct;

};

const power = function (a, b) {
  let product = a ** b;
  return product;
};

const factorial = function (a) {

  // there is always one way to arrange a bunch of items in a set, so result by default is one.
  // you can arrange 0 items in a set one way because it is an empty set, so this justifies setting the default to one...
  if (a == 0 || a == 1) {
    return 1;
  }
  result = 1;

  //loop through each number in a set of /a/
  for (i = 1; i <= a; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
