import express from 'express';
import GSheetApi from '../googSheetApi';

const router = express.Router();

router.get('/', (request, response) => {
  GSheetApi()
    .sheet('Sheet2')
    .find()
    .then((data: any) => {
      response.json(data);
    })
    .catch((err: any) => {
      console.log(err);
      response.status(400).json({ message: 'error' });
    });
});

/*
router.post('/', (request, response) => {
  gs.sheet('Sheet1')
    .add({ name: 'sagar' })
    .then((data: any) => {
      response.json(data);
    })
    .catch((err: any) => {
      console.log(err);
      response.status(400).json({ message: 'error' });
    });
});

router.put('/', (request, response) => {
  gs.sheet('Sheet1')
    .update({ name: 'sagar' }, { password: 'sagar12' })
    .then((data: any) => {
      response.json(data);
    })
    .catch((err: any) => {
      console.log(err);
      response.status(400).json({ message: 'error' });
    });
});

router.delete('/', (request, response) => {
  gs.sheet('Sheet1')
    .delete({ name: 'sagar' })
    .then((data: any) => {
      response.json(data);
    })
    .catch((err: any) => {
      console.log(err);
      response.status(400).json({ message: 'error' });
    });
});
*/
export default router;
