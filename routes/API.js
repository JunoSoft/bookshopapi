const express = require("express");
const router  = express.Router();
const book = require("../controllers/book");

router.post("/addbook",book.addBook);


module.exports = router