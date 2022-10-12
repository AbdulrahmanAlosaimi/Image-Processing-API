import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/api', (req, res) => {
  res.send('API endpoint working.');
});
