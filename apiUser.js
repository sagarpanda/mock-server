var user = require('./jsonData/user');

module.exports = function (app) {
  app.get('/users', function(request, response){
    response.json(user);
  });
};
