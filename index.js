var express = require('express');
var config = require('./config');
var utils = require('./utils');
var apiUser = require('./apiUser');

const app = express();
app.use(function (request, response, next) {
  var keys = Object.keys(config.header);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    response.setHeader(key, config.header[key]);
  }
  next();
});

apiUser(app);
utils.showRoutes(app);
app.listen(config.port,
  (arg) => utils.log('http://localhost:' + config.port)
);
