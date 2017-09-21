var express = require('express')
var router = express.Router()
var path = require('path')

var allPosts = require('../controllors/all')
var onePost = require('../controllors/one')
var newPost = require('../controllors/new')
var deletePost = require('../controllors/delete')
var modifyPost = require('../controllors/modify')

router.route('/').get(function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})
router.route('/post/*').get(function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})
router.route('/edit/*').get(function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})
router.route('/posts').get(allPosts).post(newPost)
router.route('/posts/:id').get(onePost).delete(deletePost).put(modifyPost)

module.exports = router
