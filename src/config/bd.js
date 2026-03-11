import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const db = process.env.MONGO_URI;

const connectBD = async () => {
  try {
    await mongoose.connect(db);

    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ No conectado:", error.message);
  }
};

export default connectBD;