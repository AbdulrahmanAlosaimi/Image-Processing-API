import express from 'express';
import resizeImage from '../../function/function';

const routes = express.Router();
let filename: string;

routes.get('/', async (req, res) => {
  res.status(200);
  try {
    // Query paremeters
    filename = req.query.filename as string;
    const height: number = req.query.height as unknown as number;
    const width: number = req.query.width as unknown as number;

    // When no query parameters are provided
    if (filename == undefined || height == undefined || width == undefined) {
      res.send(
        'Please make sure to use queries with filename, height, and width'
      );
    } else {
      // Resizing image
      const outputImg = await resizeImage(
        filename,
        Number(height),
        Number(width)
      );

      // Sending image to client
      res.sendFile(outputImg as string);
    }
  } catch (err) {
    res.send(
      `image ${filename} was not found, please make sure to enter a correct image.`
    );
  }
});

export default routes;
