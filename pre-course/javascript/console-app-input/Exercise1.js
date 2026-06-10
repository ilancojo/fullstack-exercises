

/*

console.log("Exercise 1:");


let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?

 */





/* 
console.log("Exercise 2:");

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ?

*/





/*
console.log("Exercise 3:");

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log( getUserData({firstName: "Alejandro", favoriteColor: "purple"})                      )
console.log(getUserData({firstName: "Melissa"}) )
console.log(getUserData({}))
*/
/**
 Your name is Alejandro and you like purple
Your name is Melissa and you like green
Your name is undefined and you like green
 */

/*
console.log("Exercise 4:");

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?
*/

/*
console.log("Exercise 5:");

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // ?
*/