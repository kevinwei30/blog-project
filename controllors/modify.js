var Post = require('../models/post')

var modifyPost = function (req, res) {
  Post.findOneAndUpdate({ id: req.params.id }, {
    $set: {
      title: req.body.title,
      author: req.body.author,
      content: req.body.content
    }
  }, function (err, post) {
    console.log('put')
    if (err) { throw err }
    // res.send(post)
    res.json(post)
  })
}

module.exports = modifyPost
