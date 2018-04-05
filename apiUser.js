var user = require('./jsonData/user');

module.exports = function (app) {
  app.get('/users', function(request, response){
    response.json(user);
  });
  app.get('/user/:guid', function(request, response){
    var selectedUser = user.filter(item => request.params.guid === item.guid);
    if (selectedUser.length > 0) {
      response.json(selectedUser[0]);
    }else {
      response.status(404).json({});
    }
  });
};
