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

const power = function () {

};

const factorial = function () {

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
