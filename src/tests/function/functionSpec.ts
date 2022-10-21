import resizeImage from '../../function/function';
import path from 'path';

describe('Function file (checking resizeImage functionality)', function () {
  it('resizes image based on input', async function () {
    expect(
      await resizeImage(path.resolve(`./images/fjord.jpg`), 250, 250)
    ).toEqual(
      await Promise.resolve(new Error(path.resolve(`./images/fjord.jpg`)))
    );
  });

  it('did not find the image in the images directory', async function () {
    expect(
      await resizeImage(path.resolve(`./images/ford.jpg`), 250, 250)
    ).toEqual(
      await Promise.resolve(new Error(path.resolve(`./images/ford.jpg`)))
    );
  });
});
