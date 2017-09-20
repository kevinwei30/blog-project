var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
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
