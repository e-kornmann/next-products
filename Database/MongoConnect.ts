import mongoose from 'mongoose';

const dbName = process.env.DB_NAME;

export const connectMongoDB = async() => {
  if (mongoose.connection.readyState!== 1) {
    return mongoose.connection.asPromise();
  }

return await mongoose.connect(`${process.env.MONGO_URI}`);
};

