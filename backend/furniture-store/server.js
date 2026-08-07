const express = require("express");
const http = require("http");

const app = express();
const port = "8080";
/*
 app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
 עד לפה שרת מינימלי*/



app.get("/",(req,res)=>{
    res.send("Server is up and running smoothly");
});

app.get("/buy/:name",(req,res)=>{
    res.send("Server is up and running smoothly");
});

app.get("/buy/:name",(req,res)=>{
    res.send("Server is up and running smoothly");
});
                    //paramter - name
app.get("/priceCheck/:name",(req,res)=>{
    res.send("Server is up and running smoothly");
});


app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]