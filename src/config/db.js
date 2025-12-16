import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const DatabaseURL = process.env.MONGO_URL || "";

const connectDB = async () => {
  try {
    if (!DatabaseURL) {
      console.warn("MONGO_URL not set in .env — skipping database connection");
      return;
    }

    await mongoose.connect(DatabaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (err) {
    console.error("Error connecting to DB:", err.message);
    process.exit(1);
  }
};

export default connectDB;
