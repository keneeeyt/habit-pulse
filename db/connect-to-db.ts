// lib/connectToDb.ts
import mongoose from 'mongoose';

async function connectToDb() {
  const mongodbUri = process.env.MONGO_URI || "";

  if (!mongodbUri) {
    throw new Error("MONGO_URI is not defined in environment variables.");
  }

  if (mongoose.connection.readyState >= 1) {
    console.log("Using existing MongoDB connection");
    return;
  }

  
  try {
    await mongoose.connect(mongodbUri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

export default connectToDb;
