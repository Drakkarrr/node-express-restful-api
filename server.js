import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 8000;
const MONGO_URI = 'mongodb+srv://admin:admin123@node-api.pmvypez.mongodb.net/';

//! routes

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Node API');
});

app.get('/blog', (req, res) => {
  res.json({ message: 'Welcome to the Node API Blog section' });
});

app.post('/product', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//! connect to mongodb
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
