console.log("Exercise 5:");

const capitalize = function(sentence) {
  sentence = sentence.toLowerCase();

  let first = sentence[0].toUpperCase();
  let rest = sentence.slice(1);

  return first + rest;
};

console.log(capitalize("bOb"));      // Bob
console.log(capitalize("TAYLOR"));   // Taylor
console.log(capitalize("feliSHIA")); // Felishia