
console.log("This is exercise 6:") ;
/*
Exercise 6
Leap Year Calculator. Create a variable for a year and determine if it's a leap year using conditional statements.
 A year is a leap year if:

It's divisible by 4 AND
If it's divisible by 100, then it must also be divisible by 400

// Examples: 2024 = leap, 1900 = not leap, 2000 = leap, 2023 = not leap
*/

let year = 2024;

if (year % 4 === 0) {

  if (year % 100 === 0) {

    console.log((year % 400 === 0)? `${year} is a leap year` :`${year} is not a leap year`);

  } else {
    console.log(`${year} is a leap year`);
  }

} else {
  console.log(`${year} is not a leap year`);
}
