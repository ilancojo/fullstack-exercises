console.log("This is exercise 3:");

const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

const name = "TeD"; 
/*const name = "ted";*/ 
/*const name = "Ted";*/
/*const name = "Bob";*/ 
/*const name = "John";*/ 


const lowerCaseName = name.toLowerCase();

let fixedName;

if (lowerCaseName === "bob") {
  fixedName = "Bob";
} else if (lowerCaseName === "ted") {
  fixedName = "Ted";
} else {
  fixedName = name;
}

if (reservations[fixedName]) {

  if (reservations[fixedName].claimed === false) {
   
    console.log(`Welcome, ${fixedName}`);
  
    reservations[fixedName].claimed = true;
  
   } else {
    console.log("Hmm, someone already claimed this reservation");
   }

} else {

  reservations[fixedName] = {
    claimed: true
  };
  console.log(`Welcome, ${fixedName}`);
}

console.log(reservations);
 