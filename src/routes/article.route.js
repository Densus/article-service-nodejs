const express = require('express');
const router = express.Router();
const articleController = require('./../controllers/article.controller');

// Fetch all data
router.get('/', articleController.findAll);

// Create a new article
router.post('/', articleController.createArticle);

// Retrieve a single article with id
router.get('/:id', articleController.findArticleById);

// Update a article with id
router.put('/:id', articleController.updateArticle);

// Delete a article with id
router.delete('/:id', articleController.deleteArticleById);


module.exports = router;