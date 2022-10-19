import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

export default async function resizeImage(
  file: string,
  height: number,
  width: number
): Promise<string | Error> {
  // image path in input folder
  const inputPath = path.resolve(`./images/${file}.jpg`);

  // checking if image exists in output folder already
  if (fs.existsSync(path.resolve(`./output/${file}.jpg`))) {
    console.log(`Retrieving image from cache`);
    return path.resolve(`./output/${file}.jpg`);
    // checking if it's a correct image (present in images folder)
  } else if (fs.existsSync(path.resolve(`./images/${file}.jpg`))) {
    await sharp(inputPath)
      .resize(height as number, width as number)
      .toFile(path.resolve(`./output/${file}.jpg`), function (err) {
        if (err) console.log(err);
      });
    return path.resolve(`./output/${file}.jpg`);
  } else {
    // image not found in images folder
    return new Error(file);
  }
}
