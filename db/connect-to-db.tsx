import mongoose from "mongoose";

async function connectToDb() {
  const mongodbUri = process.env.MONGODB_URI || "";
  try {
    await mongoose.connect(mongodbUri);

    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}

export default connectToDb;