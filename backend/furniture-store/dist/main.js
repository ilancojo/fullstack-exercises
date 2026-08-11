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
    // TODO 1:  Make a GET request to /buy/itemName
    $.get(`/buy/${itemName}`, function (item) {

    // TODO 2:When the response comes back, display the price inside #inventory-result
//$("#inventory-result").text(`Item after buying : ${item}`)  לכן צריך לפרק  [object Object]נותן בפלט  
        $("#inventory-result").text(`Item after buying: ${item.name}, inventory: ${item.inventory}, price: ${item.price}`)
    })
    console.log(itemName)
}