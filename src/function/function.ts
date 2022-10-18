import sharp from 'sharp';
import path from 'path';

export default async function resizeImage(
  file: string,
  height: number,
  width: number
): Promise<void> {
  await sharp(path.resolve(`./images/${file}.jpg`))
    .resize(height as number, width as number)
    .toFile(path.resolve(`./output/${file}.jpg`), function (err) {
      console.log(err);
    });
}
