const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function(array) {
  return array.reduce((product, currentItem) => product * currentItem, 1);
};

const power = function(number, exponent) {
	return number ** exponent;
};

const factorial = function(number) {
  if (number === 0) {
    return 1;
  }
  
  let result = 1;
  for (let i = 1; i <= number; i++) {
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
