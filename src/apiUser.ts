import { Response, Request } from 'express';
import user from './jsonData/user';

const apiUser = (app: any) => {
  app.get('/users', (request: Request, response: Response) => {
    response.json(user);
  });
  app.get('/user/:guid', (request: Request, response: Response) => {
    const selectedUser = user.filter((item) => request.params.guid === item.guid);
    if (selectedUser.length > 0) {
      response.json(selectedUser[0]);
    } else {
      response.status(404).json({});
    }
  });
};

export default apiUser;
