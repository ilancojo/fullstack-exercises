
console.log("Exercise 10:");

/**Exercise 10
Use .reduce() to calculate the final total cost including tax for all items in the cart.
Expected Output: 1621.3292 Should return a single number representing the total cost with tax included.
*/

let cartItems = [
    { name: "T-shirt", price: 19.99, category: "clothing", quantity: 2 },
    { name: "Laptop", price: 1299.99, category: "electronics", quantity: 1 },
    { name: "Coffee Beans", price: 12.99, category: "food", quantity: 3 },
    { name: "Headphones", price: 89.99, category: "electronics", quantity: 1 },
    { name: "Jeans", price: 59.99, category: "clothing", quantity: 1 }
]

let taxRates = {
    clothing: 0.08,    // 8% tax
    electronics: 0.10, // 10% tax  
    food: 0.05        // 5% tax
}


let calculateInventoryAfterTax = cartItems.reduce((sum,item)=> {
  
  let total ;

  (item.category == "clothing" ) ?   total = item.price * item.quantity*(1 + taxRates.clothing):
  
  (item.category == "electronics" ) ? total = item.price * item.quantity*(1 + taxRates.electronics):
  
  total = item.price * item.quantity*(1 + taxRates.food);


 return  sum + total; },0);

console.log(calculateInventoryAfterTax);




/** -gpt:
 * let calculateInventoryAfterTax = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity * (1 + taxRates[item.category]);
}, 0);

console.log(calculateInventoryAfterTax);
 * 
 */

