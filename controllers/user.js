const {createBook} = require('../models/book')
const joi = require ("joi");

 exports.addBook = async (req,res)=>{

   const createBookSchema = {
     title:joi.String().min(4).max(1024).required(),
     publisher:joi.String().min(4).max(64).required(),
     author:joi.String().min(4).required(),
     price:joi.Number().max(1024).required(),
     pageNumber:joi.Number().min(4).required(),
     viwerAge:joi.Number().required(),
   }
const newBook =  new createBook({
  title:body.req.title,
  publisher:body.req.publisher,
  author:body.req.author,
  price:body.req.price,
  pageNumber:body.req.pageNumber
})
const {error } = joi.validate(newBook,createBookSchema);
if(error) res.status(400).send(error=>error.details[0].message)
await newBook.save();
 };


