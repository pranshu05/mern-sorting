const express = require('express')
const {
  createArticle,
  getArticles,
  getArticle
} = require('../controllers/ArticleController')

const router = express.Router()

// POST form data
router.post('/new', createArticle)

// GET all articles
router.get('/all', getArticles)

// GET a single article
router.get('/:id', getArticle)

module.exports = router