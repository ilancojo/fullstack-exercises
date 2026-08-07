const express = require("express");
const http = require("http");
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
    res.send("Server is up and running smoothly");
});

                    //paramter - name
app.get("/priceCheck/:name",(req,res)=>{

    const itemName = req.params.name
    const item = store.find(furniture => furniture.name === itemName)

    if (item) {
        res.send({ price: item.price })
    } else {
        res.send({ price: null })
    }

});


app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

