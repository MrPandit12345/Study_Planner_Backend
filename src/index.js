import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

const Port = process.env.PORT || 8000;
const DB = process.env.MONGO_URL || "";
app.use(express.json());

app.get("/trial", (req, res) => {
  res.json({
    data: "Haa bhai yeh trial hai means trailer",
    message: "success",
  });
});

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("DB is connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectDB();

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
