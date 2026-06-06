console.log("Exercise 6.1:");

const coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 5 },
    doubleShot: { beanRequirement: 15, price: 5 },
    frenchPress: { beanRequirement: 12, price: 5 }
  },

  makeDrink: function (drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (drink === undefined) {
       console.log(`Sorry, we don't make ${drinkType}`);
      return;
    }

    if (this.beans < drink.beanRequirement) {
       console.log("Sorry, we're all out of beans!");
      return;
    }

    this.beans -= drink.beanRequirement;
    console.log(`${drinkType}  is on its way!`);
  },

  buyBeans: function (numBeans) {
    this.money -= numBeans * 2;
    this.beans  += numBeans;
  },

  buyDrink: function (drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (drink === undefined) {
        console.log(`Sorry, we don't make ${drinkType}`);
      return;
    }
    this.money += drink.price;
    this.makeDrink(drinkType);
  }
};

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"

console.log("Beans left:", coffeeShop.beans);
console.log("Money:", coffeeShop.money);