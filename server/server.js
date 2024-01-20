import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/products.js';
import employeeRoutes from './routes/employee.js';
import patientRoutes from './routes/patient.js';

const app = express();
dotenv.config();

//! routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Node API');
});

app.get('/blog', (req, res) => {
  res.json({ message: 'Welcome to the Node API Blog section' });
});

app.use('/api', productRoutes);
app.use('/api', employeeRoutes);
app.use('/api', patientRoutes);

//! connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
