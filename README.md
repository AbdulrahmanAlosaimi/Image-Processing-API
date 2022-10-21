# Image-Processing-API

## Instructions

Make sure to clone the project  
Run `npm run i` and `npm run i -D` to install the dependencies

### Building

Run `npm run build` to generate the output file

### Running

Run `npm run nodemon` to run the project  
Go to `localhost:3000` to see the output

### API Queries

Input your queries depending on the images found in the images directory

Append the following to the URL: `/api?filename=${filename}&heigh=${height}&width=${width}` and the processed image will be shown

### Cache

If an image have been processed before it will be retrieved from the output folder instead of reprocessing it

### Testing

Run `npm run test` to view all the unit tests

---

This project was developed by Abdulrahman Alosaimi as a project for the Full Stack JavaScript Developer Nanodegree
