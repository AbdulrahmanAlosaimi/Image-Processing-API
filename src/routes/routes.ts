import express from 'express';
import api from './api/api';

const routes = express.Router();

// API endpoint
routes.use('/api', api);

routes.get('/', (req, res) => {
  res.status(200);
  res.send('Please append /api to the end of the URL');
});

export default routes;
