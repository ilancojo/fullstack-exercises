
console.log("This is exercise 1:")  

let people = {
  p1: {
    name: "John",
    age: 30,
    city: "haifa"
  },

  p2: {
    name: "Dani",
    age: 17,
    city: "eilat"
  }
};

let f1 = function(person1,person2) {
    
    if(person1.age == person1.age ){
    
       if(person1.city == person2.city ){
           
            console.log(`${person1.name} wanted to date ${person2.name} `);
        }else{
              console.log(`${person1.name} wanted to date ${person2.name},but couldn't `);
        }         

     }
}

f1(people.p1,people.p2);
