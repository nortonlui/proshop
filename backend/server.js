import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const app = express();

dotenv.config();
connectDB();

const { PORT, NODE_ENV } = process.env;

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(
  PORT,
  console.log(
    `Server running in ${NODE_ENV} mode on port: ${PORT}`.yellow.bold,
  ),
);
