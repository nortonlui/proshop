import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import colors from 'colors';
import connectDB from './config/db.js';

const app = express();
dotenv.config();
connectDB();

const { PORT, NODE_ENV } = process.env;

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(
  PORT,
  console.log(
    `Server running in ${NODE_ENV} mode on port: ${PORT}`.yellow.bold,
  ),
);
