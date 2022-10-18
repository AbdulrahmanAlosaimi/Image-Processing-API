import express from 'express';
import api from './api/api';

const routes = express.Router();
routes.use('/api', api);

routes.get('/', (req, res) => {
  res.send('Hello, world!');
});

export default routes;
