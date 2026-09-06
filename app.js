import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('App running');
});

export { app };
