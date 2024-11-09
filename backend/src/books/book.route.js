const express = require("express");
const Book = require("./book.model");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteABook,
} = require("./book.controller");
const router = express.Router();

//frontend -> backend server -> controller -> book schema -> database ->

//post a book
router.post("/create-book", postABook);

//get all books
router.get("/", getAllBooks);

//single book endpoint
router.get("/:id", getSingleBook);

//update a book endpoint
router.put("/edit/:id", updateBook);

//delete a book
router.delete("/:id", deleteABook);

module.exports = router;
