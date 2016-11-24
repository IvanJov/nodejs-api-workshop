var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var mongo = require('./lib/mongo');

var app = express();
app.use(bodyParser.json());

var db = mongo();
var models = require('./models')(db);
routes(app, models);

app.listen(3000, function () {
  console.log('App is listening on port 3000');
});