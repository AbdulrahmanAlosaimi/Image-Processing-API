import express from 'express';
import resizeImage from '../../function/function';

const routes = express.Router();
let filename: string;

routes.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.status(200);
    try {
      // Query paremeters
      filename = req.query.filename as string;
      const height: number = parseInt(req.query.height as string);
      const width: number = parseInt(req.query.width as string);

      // When no query parameters are provided
      if (filename == undefined || height == undefined || width == undefined) {
        res.send(
          'Please make sure to use queries with filename, height, and width'
        );
        // Invalid parameters provided
      } else if (isNaN(width) || isNaN(height)) {
        res.send(
          'Please make sure to provide correct parameters. (Positive integers for both height and width)'
        );
      } else {
        // Resizing image
        const outputImg = await resizeImage(filename, height, width);

        // Sending image to client
        res.sendFile(outputImg as string);
      }
    } catch (err) {
      console.log(err);
      res.send(
        `image ${filename} was not found, please make sure to enter a correct image.`
      );
    }
  }
);

export default routes;
