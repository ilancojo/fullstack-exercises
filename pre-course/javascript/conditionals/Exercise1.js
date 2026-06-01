
console.log("This is exercise 1:")  
/*
Exercise 1
Basic Age Check. Create variables for a person's age and use an if statement to check
 if they're old enough to vote (18 or older).
 Display an appropriate message.
*/
const adult = 18;


let people = {
  p1: {
    fname: "John",
    age: 30
  },

  p2: {
    fname: "Dani",
    age: 17
  }
};

let f1 = function(person) {
    if(person.age >= adult){
        console.log(`${person.fname} is ${person.age} years old and he can vote`);
    }else{
         console.log(`${person.fname} is ${person.age} years old and can't vote`);
    }
  }

f1(people.p1);
f1(people.p2);