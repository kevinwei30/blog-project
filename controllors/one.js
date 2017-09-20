var Post = require('../models/post')

var onePost = function (req, res) {
  Post.find({ id: req.params.id }, function (err, post) {
    if (err) { throw err }
    // res.send(post)
    res.json(post[0])
  })
}

module.exports = onePost
