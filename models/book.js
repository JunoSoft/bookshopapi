const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  
  title: {
    type: String,
    minlength: 1,
    required: true,
  },
  publisher: {
    type: String,
    minlength: 5,
    required: true,
  },
  author: {
    type: String,
    minlength: 1,
    required: true,
  },
  price: {
    type: Number,
    minlength: 1,
    required: true,
  },
  pageNumber: {
    type: Number,
    minlength: 1,
    required: true,
  },

  viwerAge: {
    type: Number,
    minlength: 1,
    required: true,
  },
  store: {
    type: Number,
    minlength: 1,
    required: true,
  },
});
const createBook = mongoose.model("Books", bookSchema);

module.exports.createBook = createBook;
