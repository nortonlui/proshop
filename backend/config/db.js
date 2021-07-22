import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  const { MONGO_URI } = process.env;

  const configsMongo = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  };

  try {
    const conn = await mongoose.connect(MONGO_URI, configsMongo);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (e) {
    console.error(`Error: ${e.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
