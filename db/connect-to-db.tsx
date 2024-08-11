import mongoose from 'mongoose';

async function connectToDb() {
  const mongodbUri = process.env.MONGODB_URI || "";

  if (!mongodbUri) {
    throw new Error("MONGODB_URI is not defined in environment variables.");
  }

  if (mongoose.connection.readyState >= 1) {
    // If the connection is already established, return the existing connection
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
