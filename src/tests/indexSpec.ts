import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Checking server', (): void => {
  it('test server working', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });

  it('test the /api route', async (): Promise<void> => {
    const response = await request.get('/api');
    expect(response.status).toEqual(200);
  });

  it('fetch image from cache', async (): Promise<void> => {
    const response = await request.get(
      '/api?filename=santamonica&height=250&width=250'
    );
    expect(response.status).toEqual(200);
  });
});
