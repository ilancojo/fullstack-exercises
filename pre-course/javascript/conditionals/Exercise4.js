
console.log("This is exercise 4:")  
/*
Exercise 4
Multiple Condition Validator. Create variables for username length, password length, and user age. 
Use logical operators (&&, ||, !) to check if a user can create an account:

Username must be at least 5 characters
Password must be at least 8 characters
User must be 13 or older
Display specific error messages for each failed condition or success message if all pass
*/

let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;



    
function validUser(name,password,age){

    if(name < 5){
        console.log('Username must be at least 5 characters');

    } else if (password < 8 ){
        console.log("Password must be at least 8 characters");

    } else if (age < 13 ){
        console.log('User must be 13 or older');

    } else{
        console.log('data valid');
    }
}

validUser(usernameLength,passwordLength,userAge);