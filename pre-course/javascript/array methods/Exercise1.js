
console.log("Exercise 1:");


let emailAndName = users.map(user => {
  return {
    email: user.email,
    companyName: user.company.name
  }
})

console.log(emailAndName)
  