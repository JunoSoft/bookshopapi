const express = require("express");
const router  = express.Router();
const book = require("../controllers/book");

router.post("/createbook",book.addBook);


module.exports.createbook = router