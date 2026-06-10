
console.log("Spread Exercises:");

console.log("Exercise 1:");

let meatArr = ["beef","chicken"];
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"];

const [rabbit,...veges ] = vegetableArr; 

meatArr = [...meatArr, rabbit];

vegetableArr =veges;

console.log(meatArr);
console.log(vegetableArr);



console.log("Exercise 2:");

var firstPiece = { id: 101, name: 'Ofri' }
var seoncdPiece = { country: 'Israel'}


const {id,name } = firstPiece; 
const {country} = seoncdPiece;

newPassport = {...firstPiece,country};
console.log(newPassport);


console.log("Nullish Coalescing Exercise:");

let employeesArr = [
  { name : "Joey" , id: 1 , age: 26},
  { name : "Lily" , id: null , age: 24},
  { name : "Alice" , id: 7 , age: null},
  { name : "Sam" , id: 8 , age: 24},
  { name : "Ray" , id: null , age: null}
  ]


employeesArr.forEach( employee=>{


  const {name,id,age } = employee;

  const checkId = id ?? 'missing name data';
  const checkAge = age ?? 'missing age data';

  if (checkId === "missing name data" || checkAge === "missing age data") {
    console.log(name);
  }

});