const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  sumArray = 0
  for (let i = 0; i < arr.length; i++) {
      sumArray += arr[i];
  }
  return sumArray;
};

const multiply = function(arr) {
  let product = 1;
 for (let i = 0; i < arr.length; i++){
   product *= arr[i];
 }
 return product;
};

const power = function(a, b) {
	return a*b
};

const factorial = function(a) {
  result = 1;
  for(let i = 1; i <= a; i++){
    result += i;
  }
	return result
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
