import express from 'express';
import resizeImage from '../../function/function';

const routes = express.Router();

routes.get('/', (req, res) => {
  const filename: string = req.query.filename as string;
  const height: number = req.query.height as unknown as number;
  const width: number = req.query.width as unknown as number;
  if (filename == undefined || height == undefined || width == undefined) {
    res.send(
      'Please make sure to provide filename, height, width, and try again.'
    );
  } else {
    res.send('/api endpoint working');
    console.log(`filename: ${req.query.filename}`);
    console.log(`size: ${req.query.height}h x ${req.query.width}w`);
  }

  resizeImage(filename, Number(height), Number(width));
});

export default routes;
