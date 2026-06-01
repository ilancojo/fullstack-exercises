

console.log("This is exercise 5:")  
/*
Exercise 5:
Complex Business Logic. Create variables for customer type (regular, premium, vip), purchase amount, and day of week.
Calculate discount using nested conditionals and ternary operators:

VIP customers: 20% discount always
Premium customers: 15% on weekends, 10% on weekdays
Regular customers: 10% if purchase > $100, 5% if purchase > $50, 0% otherwise
Weekends are represented by day 6 (Saturday) or 0 (Sunday)
*/

let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.



function calculateDiscount(type, amount,day ){

    if(type == "premium") {
        
        console.log(`${customerType} customers - discount :`, ((day == 0)||(day == 6))? amount * 0.15 : amount * 0.1 ,"$");

    } else if (type == "regular"){
         console.log(`${type} customers - discount :` ,(amount > 100 )? amount * 0.1 : (amount > 50 )? amount * 0.05 : amount ,"$");

    } else{
        console.log(`${type} customers - discount :` ,(amount * 0.2 ),"$");

    }
}

calculateDiscount(customerType,purchaseAmount,dayOfWeek);




