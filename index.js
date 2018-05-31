const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const mongo = require('./lib/mongo')

const app = express()
app.use(bodyParser.json())

const db = mongo()
const models = require('./models')(db)
routes(app, models)

app.listen(3000, function () {
  console.log('App is listening on port 3000')
})