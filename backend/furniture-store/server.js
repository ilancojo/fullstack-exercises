const express = require("express");
const app = express();
const path = require("path");

const port = "8080";
/*
 app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
 עד לפה שרת מינימלי*/

//המידע
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.use(express.static(path.join(__dirname,"dist")));    
app.use(express.static(path.join(__dirname,"node_modules")));    

app.get("/",(req,res)=>{
    res.send("Server is up and running smoothly");
});


app.get("/buy/:name",(req,res)=>{

   const itemName = req.params.name 
   const item = store.find(furniture => furniture.name === itemName)
    if (item === undefined) {
        res.send({ error: "Item does not exist" })
    } else {
        item.inventory--
        res.send(item)
    }
});


                    //paramter - name
app.get("/priceCheck/:name",(req,res)=>{

    const itemName = req.params.name 
    const item = store.find(furniture => furniture.name === itemName)
    //find return undefined if item is not Exists - (null)
    const itemInfo = (item === undefined) ? { price: null } : { price: item.price };
    //const itemInfo = item ? { price: item.price } : { price: null }   קצר יותר

    res.send(itemInfo);

});

app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

