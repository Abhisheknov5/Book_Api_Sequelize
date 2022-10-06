const express = require('express');
const booksController = require('../controllers/book.controller')
const checkAuth = require('../middleware/check-auth');

const router =express.Router();
//Create Book
router.post("/",checkAuth.checkAuth,booksController.Create_Book);

//Get Book by id
router.get("/:id",checkAuth.checkAuth,booksController.get_Book);

//Get All Book
router.get("/",checkAuth.checkAuth,booksController.get_allBook);

//Updated Book
router.put("/:id",checkAuth.checkAuth,booksController.update_Book);

// Delete Book
router.delete("/:id",checkAuth.checkAuth,booksController.delete_Book);

module.exports = router;