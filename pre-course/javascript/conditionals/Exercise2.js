
console.log("This is exercise 2:")  
/*
Exercise 2
Grade Classification. 
Create a variable for a test score (0-100) and use if-else if-else statements to assign and display a letter grade:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: Below 60
*/

let score = 85;
let s = score;

function testScore(s){

    if ((s >= 90)&& (s <= 100) ){
    console.log("A: 90-100")
    } else if ((s >= 80)&& (s <= 89) ) {
    console.log("B: 80-89")
    } else if ((s >= 70)&& (s <= 79) ) {
    console.log("C: 70-79")
    } else if ((s >= 60)&& (s <= 69) ) {
    console.log("D: 60-69")
    } else {
    console.log("F: Below 60")}
}

testScore(s);