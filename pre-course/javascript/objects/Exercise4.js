console.log("Exercise 4:");


  const kitchen = {
    owner: "Geraldine",
    hasOven: true,
/* 
hasOven: true,
*/
    fridge: {
      price: 500, 
      works:true,  
/* 
works: false,
*/
      items: [
        { name: "cheese", expiryDate: 7 },
        { name: "radish", expiryDate: 2 },
        { name: "bread", expiryDate: 1 }
      ]
    }
  };
  const date = 3;
  const owner = kitchen.owner;
  const hasOven = kitchen.hasOven;
  const fridgeWorks = kitchen.fridge.works;
  const fridgeFixPrice = kitchen.fridge.price / 2;
  const item = kitchen.fridge.items[1];
  const itemName = item.name;
  const daysExpired = date - item.expiryDate;


  if (hasOven === true && fridgeWorks === true) {
    console.log(`${owner}'s ${itemName} expired ${daysExpired} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${itemName} in.`);

  } else if (hasOven === false && fridgeWorks === true) {
    console.log(`${owner}'s ${itemName} expired ${daysExpired} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the ${itemName} in.`);

  } else if (hasOven === true && fridgeWorks === false) {
    console.log(`${owner}'s ${itemName} expired ${daysExpired} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${itemName} in. And she'll have to pay ${fridgeFixPrice} to fix the fridge.`);

  } else {
    console.log(`${owner}'s ${itemName} expired ${daysExpired} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${itemName} in. And she'll have to pay ${fridgeFixPrice} to fix the fridge.`);
  }
