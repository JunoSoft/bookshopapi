const express = require("express");
const mongoose  = require('mongoose');
const book = require("./routes/book")
const app  =  express();
mongoose.connect("mongodb://localhost/shop")
.then(()=>console.log("Database is successfully connected"))
.catch(error=>console.log(error));

app.use(express.json());
app.use("/",book);

const port = process.env.PORT || 8080;
app.listen(port,()=>console.log("server is connected on port ",port));