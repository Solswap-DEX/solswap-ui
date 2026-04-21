import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/solswap';

export async function connectMongo(): Promise<typeof mongoose> {
  try {
    await mongoose.connect(MONGODB_URI);
    return mongoose;
  } catch (err) {
    console.error('[RADAR ERROR] MongoDB connection failed:', err);
    throw err;
  }
}

export async function disconnectMongo(): Promise<void> {
  try {
    await mongoose.disconnect();
  } catch (err) {
    console.error('[RADAR ERROR] MongoDB disconnect failed:', err);
  }
}