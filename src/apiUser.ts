import user from './jsonData/user';

const apiUser = (app: any) => {
  app.get('/users', (request: any, response: any) => {
    response.json(user);
  });
  app.get('/user/:guid', (request: any, response: any) => {
    const selectedUser = user.filter((item) => request.params.guid === item.guid);
    if (selectedUser.length > 0) {
      response.json(selectedUser[0]);
    } else {
      response.status(404).json({});
    }
  });
};

export default apiUser;
