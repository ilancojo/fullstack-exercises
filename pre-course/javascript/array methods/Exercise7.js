
console.log("Exercise 7:");

function findUserCityAndCompany(user){
  
  let newUserInfo = user.map(user => {
    return {  name: user.name,
              city: user.address.city,    
              company : user.company.name };
    });

    return newUserInfo;
}

findUserCityAndCompany(users).forEach(users => {

  console.log( users.name + "is liveing in " + 
    users.city + " and owns the company : " + users.company );
});



