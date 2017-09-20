var Post = require('../models/post')
var allPost = require('./all')

var deletePost = function (req, res) {
  Post.findOneAndRemove({ id: req.params.id }, function (err) {
    if (err) { throw err }
    console.log('Post removed!')
    // res.send('Post removed!')
    // res.end()
    // return res
  })
  .then(allPost(req, res))
}

module.exports = deletePost
