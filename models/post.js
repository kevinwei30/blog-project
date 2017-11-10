var mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
mongoose.connect('mongodb://kevinwei:mypassword@ds157325.mlab.com:57325/blog_project', {
  useMongoClient: true
})
mongoose.Promise = global.Promise

var Schema = mongoose.Schema

var postSchema = new Schema({
  id: Number,
  title: String,
  author: String,
  content: String,
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Post', postSchema)
