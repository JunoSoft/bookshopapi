const { createBook } = require("../models/book");
const joi = require("joi");

exports.addBook = async (req, res) => {
  const createBookSchema = {
    title: joi.string().min(4).max(1024).trim().required(),
    publisher: joi.string().min(4).max(64).trim().required(),
    author: joi.string().min(4).trim().required(),
    price: joi.number().required(),
    pageNumber: joi.number().min(4).required(),
    viwerAge: joi.number().required(),
    store: joi.number().required(),
  };
  const newBook = new createBook({
    title: req.body.title,
    publisher: req.body.publisher,
    author: req.body.author,
    price: req.body.price,
    pageNumber: req.body.pageNumber,
    store: req.body.store,
  });
  const { error } = joi.validate(req.body, createBookSchema);
  if (error) res.status(400).send((error) => error.details[0].message);
  

  const result = await newBook.save();
  res.send(result)
  console.log(result);
};
