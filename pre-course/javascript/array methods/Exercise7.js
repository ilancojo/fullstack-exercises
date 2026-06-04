
console.log("Exercise 7:");

function findUserCityAndCompany(user){
  
  let newUserInfo = user.map(user => {
    return {  name: user.name,
              address: user.city,    
              company : user.company.name };
    });

}

findUserCityAndCompany(users).forEach(users => {

  console.log( users.name + "is liveing in" + 
    users.address.city + "and owns the company " + users.company );
});



