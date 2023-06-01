const Article = require('../models/ArticleModel')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// create article
const createArticle = async (req, res) => {
  const {title, image, content} = req.body
  articleExists = await Article.findOne({title: {$eq: title} })

  // add to the database
  if (title == "") {
     res.json({ errorFields: "title", error: "Field title is empty" })
  } else if (articleExists) {
     res.json({ errorFields: "title", error: "An article with the same title already exists" })
  } else if (image == "") {
     res.json({ errorFields: "image", error: "Field image is empty" })
  } else if (content == "") {
     res.json({ errorFields: "content", error: "Field content is empty" })
  } else {
    const article = await Article.create({ title, image, content })
    res.json({ success: "Your article has been successfully created" })
  }
}

// get all articles
const getArticles = async (req, res) => {
  const articles = await Article.find({}).sort({createdAt: -1})

  res.status(200).json(articles)
}

// get a single article
const getArticle = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such article'})
  }

  const article = await Article.findById(id)

  if (!article) {
    return res.status(404).json({error: 'No such article'})
  }

  res.status(200).json(article)
}
module.exports = {
  createArticle,
  getArticles,
  getArticle
}