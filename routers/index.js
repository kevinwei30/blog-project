var express = require('express')
var router = express.Router()
// var path = require('path')

var allPosts = require('../controllors/all')
var onePost = require('../controllors/one')
var newPost = require('../controllors/new')
var deletePost = require('../controllors/delete')
var modifyPost = require('../controllors/modify')

router.route('/').get(function (req, res) {
  console.log('in')
  // res.sendFile(path.join(__dirname, '../app/index.html'))
})
router.route('/posts').get(allPosts).post(newPost)
router.route('/posts/:id').get(onePost).delete(deletePost).put(modifyPost)
// router.route('/posts').post(newPost)
// router.route('/posts/:id').delete(deletePost)
// router.route('/posts/:id').put(modifyPost)

module.exports = router
