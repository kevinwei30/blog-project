const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')
const compiler = webpack(config)

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var routes = require('./routers/index')
var port = process.env.PORT || 6308

app.use(webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))
app.use(require('webpack-hot-middleware')(compiler))

app.use(bodyParser.json())
app.use('/', routes)

app.listen(port)
