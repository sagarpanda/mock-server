require('dotenv').config({ debug: true });

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { cinema, users } from './api';

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/api/cinema', cinema);
app.use('/api/users', users);

app.get('/', (request, response) => {
  // response.json(request.query);
  // response.json(request.params);
  // response.json(request.body);
  response.send({});
});

app.listen(port, () => console.log(`http://localhost:${port}`));
