import express from 'express';
import mongoose from 'mongoose';
import Product from './models/productModel.js';

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

app.post('/product', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
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
