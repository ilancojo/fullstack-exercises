
console.log("Exercise 3:");



let userZipId = users
  .filter(user => user.address.zipcode[0] === "5")
  .map(user => user.id)

console.log(userZipId)

