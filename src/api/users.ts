import express from 'express';
import user from '../data/user';

const router = express.Router();

router.get('/', (request, response) => {
  response.json(user);
});

export default router;
