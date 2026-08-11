
let money = 1000;
let lastChairPrice = null;

const updateMoney = function () {
    $("#money-result").text(`Money: ${money}`);
}

updateMoney();


const checkPrice = function () {
    const itemName = $("#furniture-input").val();

    // TODO 1: Make a GET request to /priceCheck/itemName
    $.get(`/priceCheck/${itemName}`, function (itemInfo) {
    // TODO 2: when the response comes back, display the price inside #price-result
        $("#price-result").text(`Price: ${itemInfo.price}`)
    })
    console.log(itemName)
}


const buyItem = function () {
    const itemName = $("#furniture-buying-input").val();

    // TODO 1: Make a GET request to /priceCheck/itemName
    // קודם בודקים כמה המוצר עולה, לפני שקונים אותו
    $.get(`/priceCheck/${itemName}`, function (itemInfo) {

        if (itemInfo.price === null) {
            $("#inventory-result").text("This item does not exist.")
        } 
        else if (money >= itemInfo.price) {

            // TODO 2: Make a GET request to /buy/itemName
            // רק אם יש מספיק כסף, עושים קנייה בפועל
            $.get(`/buy/${itemName}`, function (item) {

                money -= item.price;
                updateMoney();
                // TODO 3: When the response comes back, display the result inside #inventory-result
                // $("#inventory-result").text(`Item after buying : ${item}`)
                // לא מציגים אובייקט שלם כי זה נותן [object Object], לכן צריך לפרק לשדות
                $("#inventory-result").text(`Congratulations, you've just bought ${item.name} for ${item.price}. There are ${item.inventory} left now in the store.`)
            })
        } 
        else {
            $("#inventory-result").text("You should get a job.")
        }
    })
    console.log(itemName)
}
setInterval(function () {
    $.get("/priceCheck/chair", function (itemInfo) {
        const currentChairPrice = itemInfo.price;

        if (lastChairPrice !== null && currentChairPrice < lastChairPrice) {
            $.get("/buy/chair", function () {
                console.log("bought chair for less")
            })
        } else {
            console.log("still waiting for a price drop...")
        }
        lastChairPrice = currentChairPrice;
    })
}, 3000)