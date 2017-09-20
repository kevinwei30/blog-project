var Post = require('../models/post')

var allPosts = function (req, res) {
  Post.find({}, function (err, posts) {
    if (err) { throw err }
    // res.send(posts)
    res.json(posts)
  })
}

module.exports = allPosts
