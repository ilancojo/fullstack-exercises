
console.log("Exercise 7:");



let userSuite = users.filter(user => user.address.suite === "Apt. 950")
  .map(user => user.company.name);

console.log(userSuite);



