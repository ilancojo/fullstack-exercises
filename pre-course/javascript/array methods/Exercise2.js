

/* 
Exercise 2
Create an array with user objects that have a zip-code that starts with "5".

You should be left with the objects whose IDs are 3, 4, and 7.
*/ 

console.log("Exercise 2:")

let userZip = users
  .filter(user => user.address.zipcode[0] === "5")
  .map(user => {
    return {
      id: user.id,
      zipcode: user.address.zipcode
    }
  })

console.log(userZip)

