const express = require("express");
const mongoose  = require('mongoose');
const book = require("./routes/book")
const app  =  express();
mongoose.connect("mongodb://localhost/shop")
.then(()=>console.log("Database is successfully connected"))
.catch(error=>console.log(error));

app.use(express.json());
app.use("/",book);

app.listen(3000,()=>console.log("server is connected on port "));