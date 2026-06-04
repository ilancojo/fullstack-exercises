
console.log("Exercise 8:");

let inventory = [
    { name: "Laptop", price: 899.99, quantity: 5 },
    { name: "Mouse", price: 24.99, quantity: 12 },
    { name: "Keyboard", price: 79.99, quantity: 8 },
    { name: "Monitor", price: 249.99, quantity: 3 },
    { name: "Headphones", price: 149.99, quantity: 6 }
]

                                  ///sum - sum in evry "index" of the object 
let calculateInventory = inventory.reduce((sum,item)=> {
  let total = item.price * item.quantity
 return  sum + total; },0);

console.log(calculateInventory);



