
console.log("This is exercise 1:")  
console.log(((5 > 2) && false))   //F
console.log(!("knife" === "sword")) //T
console.log((1 < 2) || (-1 > -1) || !false) //T
console.log("") //empty string
console.log((31 % 5) == "1")    //T
console.log(!!true) //T
console.log("5th Avenue" != "5th Avenue")   //F
console.log(52 !== "52")    //T
console.log((undefined || null))    //null



let a = 3;
let c = 0;
let b = a;
b = a;  
c = a;  // 3
b = c;  // 3
a = b;  // 3
console.log("This is exercise 2 :")
console.log(a) //3
console.log(b)  //3
console.log(c)  //3