var Post = require('../models/post')

var newPost = function (req, res) {
  var query = Post.find({}).exec()

  query.then(function (posts) {
    var max = 0
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].id > max) {
        max = posts[i].id
      }
    }

    var newid = max + 1
    console.log(newid)

    return newid
  })
  .then(function (newId) {
    var post = new Post({
      id: newId,
      title: req.body.title,
      author: req.body.author,
      content: req.body.content
    })

    post.save(function (err, p) {
      if (err) { throw err }
      console.log('Post saved!')
      // res.send('Post saved!')
      res.json(p)
    })
  })
  .catch((err) => {
    console.log('Rejected!')
    res.send('Rejected!')
  })
}

module.exports = newPost
