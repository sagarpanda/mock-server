import express from 'express';
import config from './config';
import utils from './utils';
import apiUser from './apiUser';

const app = express();
app.use((request, response, next) => {
  const keys = Object.keys(config.header);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    // @ts-ignore
    const value = config.header[key];
    response.setHeader(key, value);
  }
  next();
});

apiUser(app);
utils.showRoutes(app);
utils.log('----- Base URL -----');
app.listen(config.port, () => utils.log(`http://localhost:${config.port}`));
