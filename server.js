import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 8000;
const MONGO_URI = 'mongodb+srv://admin:admin123@node-api.pmvypez.mongodb.net/';

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// routes

app.get('/', (req, res) => {
  res.send('Hello Node API');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Node API' });
});

// connect to mongodb
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });
