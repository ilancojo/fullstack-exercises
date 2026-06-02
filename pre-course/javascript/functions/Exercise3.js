console.log("Exercise 3:");

const numbers1 = [1,2,3,4,5,6,7,8,9,10];
let number = 3;

function isNumberInArray(array, num) {
    
    for (const currentNumber of array) {

        if (currentNumber === num) {
            return true;
        }
    }
    return false;
}

console.log(isNumberInArray(numbers1, number));