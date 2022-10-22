import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

export default async function resizeImage(
  file: string,
  height: number,
  width: number
): Promise<string | Error> {
  try {
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    // image path in input folder
    const inputPath = path.resolve(`./images/${file}.jpg`);

    // checking if image exists in output folder already
    if (fs.existsSync(path.resolve(`./output/${file}${height}x${width}.jpg`))) {
      console.log(`Retrieving image from cache`);
      return path.resolve(`./output/${file}${height}x${width}.jpg`);
      // checking if it's a correct image (present in images folder)
    } else if (fs.existsSync(path.resolve(`./images/${file}.jpg`))) {
      await sharp(inputPath)
        .resize(height as number, width as number)
        .toFile(path.resolve(`./output/${file}${height}x${width}.jpg`));
      console.log(`Image is processed and is being retrieved.`);
      await sleep(250);
      return path.resolve(`./output/${file}${height}x${width}.jpg`);
    } else {
      console.log(`image ${file} was not found in images directory.`);
      // image not found in images folder
      return new Error(file);
    }
  } catch (err) {
    return '------------------------TEST-----------------';
  }
}
