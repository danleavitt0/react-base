var express = require('express')
var app = express()
var morgan = require('morgan')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({'extended': 'true'}))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(methodOverride())

app.get('*', function (req, res) {
  res.send('./' + req.url)
})

app.listen(process.env.PORT || 3000)
