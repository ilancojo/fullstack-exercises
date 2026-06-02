console.log("Exercise 4");

let calculator = {
  add: (a, b) => {
    let result = a + b;
    return result;
  },

  subtract: (a, b) => {
    let result = a - b;
    return result;
  }
};

const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2)); // should print 42