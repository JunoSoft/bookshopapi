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
  }

