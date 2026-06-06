
console.log("Exercise 1:");


const StringFormatter = function() {
    
    const capitalizeFirst =  function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const toSkewerCase= function(str) {
        return str.split(" ").join("-");
    }
 
    return {    // חושפים את הפונקציות החוצה
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }


  }
const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); 
console.log(formatter.toSkewerCase("blue box"));   